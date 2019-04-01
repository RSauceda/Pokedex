Pokedex.menuState = function(game) {
}

var pokemonID = -1;

Pokedex.menuState.prototype = {
    

    preload: function() {
        
    },

    create: function() {
        var fondo= game.add.sprite(0, 0, 'fondo');
        var x = 50; //Distancia horizontal entre los sprites de los pokemons
        var y = 175; //Distancia vertical entre las filas de sprites de pokemons
        var numPokemon = 1;
        var numColumnas = 8;
        var numFilas = 4;

        //Incluir sprites de los pokemons y asociarles botones a cada uno
        for(i = 0; i < numFilas; i++){
            for(j = 1; j <= numColumnas; j++){
                boton = game.add.button(x, y, ''+numPokemon+'',(but) => this.estadisticas(but.id), this, 1, 0, 0);
                boton.id = numPokemon;
                boton.scale.setTo(0.45, 0.45);
                x += 150;
                numPokemon++;
            }
            x = 50;
            y += 125;
        }

        //Boton de pantalla completa
        var fullscreen_boton = game.add.button(1225, 670, 'fullscreen', this.fullscreen, this, 1, 0, 0);
        fullscreen_boton.scale.setTo(0.5, 0.5);
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        
    },
    
    update: function() {

    },

    estadisticas: function(numID) { //Se le pasa el id del boton para mostrar la imagen

        game.state.start('creditsState');
        pokemonID = numID;
 
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

