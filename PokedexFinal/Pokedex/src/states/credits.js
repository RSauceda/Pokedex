Pokedex.creditsState = function(game) {
}

Pokedex.creditsState.prototype = {

    preload: function(){
        game.load.json('datosPokemon', 'assets/csvjson.json');
    },


    create: function(num) {
        var datosPokemon = game.cache.getJSON('datosPokemon');
        fondo = game.add.tileSprite(0, 0, 1280, 720, 'stats');
        var idPokemon = pokemonID;
        
        var pokemonActual = game.add.sprite(200, 200, ''+idPokemon+'');
        pokemonActual.scale.setTo(1.3, 1.3);

        var volver_boton = game.add.button(115, 500, '1', this.menuOnClick, this, 1, 0, 0);
        var fullscreen_boton = game.add.button(1225, 670, 'fullscreen', this.fullscreen, this, 1, 0, 0);
        var text = game.add.text(200, 200, datosPokemon[idPokemon - 1].name, {font: '50px Arial', fill: '#ffffff'})
        fullscreen_boton.scale.setTo(0.5, 0.5);
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    },
    
    update: function() {
        fondo.tilePosition.x += 0.25;
        fondo.tilePosition.y += -0.25;
    },

    menuOnClick: function() {

        game.state.start('menuState')
 
    },

    fullscreen: function() {
    if (game.scale.isFullScreen)
    {
        game.scale.stopFullScreen();
    }
    else
    {
        game.scale.startFullScreen(false);
    }

},
}
