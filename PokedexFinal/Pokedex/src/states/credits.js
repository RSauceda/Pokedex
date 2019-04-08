Pokedex.creditsState = function (game) {
}

Pokedex.creditsState.prototype = {

    preload: function () {
        game.load.json('datosPokemon', 'assets/csvjson.json');
    },


    create: function (num) {
        var datosPokemon = game.cache.getJSON('datosPokemon'); //carga del fichero json
        fondo = game.add.tileSprite(0, 0, 1280, 720, 'stats');
        var idPokemon = pokemonID;

        var pokemonActual = game.add.sprite(125, 250, '' + idPokemon + '');
        pokemonActual.scale.setTo(1.3, 1.3);
        var nombrePokemon = game.add.sprite(640, 90, 'nombrePokemon');
        nombrePokemon.scale.setTo(0.85, 0.85);
        nombrePokemon.anchor.setTo(0.5);

        var volver_boton = game.add.button(15, 635, 'botonAtras', this.menuOnClick, this, 1, 0, 0);
        volver_boton.scale.setTo(0.09, 0.09);
        var fullscreen_boton = game.add.button(1225, 670, 'fullscreen', this.fullscreen, this, 1, 0, 0);
        var text = game.add.text(640, 90, datosPokemon[idPokemon - 1].name, { font: '100px Verdana', fill: '#ffffff' })
        text.anchor.setTo(0.5); //alineación del texto del nombre para que aparezca centrado siempre

        fullscreen_boton.scale.setTo(0.5, 0.5);
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    },

    update: function () {
        //Movimiento del fondo
        fondo.tilePosition.x += 0.25;
        fondo.tilePosition.y += -0.25;
    },

    menuOnClick: function () {

        game.state.start('menuState')

    },

    fullscreen: function () {
        if (game.scale.isFullScreen) {
            game.scale.stopFullScreen();
        }
        else {
            game.scale.startFullScreen(false);
        }

    },
}
