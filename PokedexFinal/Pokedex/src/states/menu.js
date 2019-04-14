Pokedex.menuState = function (game) {
}

var pokemonID = -1;
var vel = 25;

Pokedex.menuState.prototype = {


    preload: function () {
    },

    create: function () {
        game.world.setBounds(0, 0, 720, 8300);
        var fondo = game.add.sprite(0, 0, 'fondo');
        var x = 50; //Distancia horizontal entre los sprites de los pokemons
        var y = 185; //Distancia vertical entre las filas de sprites de pokemons
        var numPokemon = 1;
        var numColumnas = 8;
        var numFilas = 66; //Se muestran 528 pokemons

        //Lectura de datos del fichero xml
        var xml = game.cache.getXML('xml');
        var numSerie = xml.getElementsByTagName('serialNumber')[0].innerHTML;
        var nombre1 = xml.getElementsByTagName('name')[0].innerHTML;
        var nombre2 = xml.getElementsByTagName('name')[1].innerHTML;
        game.add.text(825, 30, 'Creado por: ' + nombre1 + ' y ' + nombre2, { font: '15px Arial', fill: '#000000' })
        game.add.text(1050, 60, 'Numero de serie: ' + numSerie, { font: '15px Arial', fill: '#000000' })

        //Incluir sprites de los pokemons y asociarles botones a cada uno
        for (i = 0; i < numFilas; i++) {
            for (j = 1; j <= numColumnas; j++) {
                boton = game.add.button(x, y, '' + numPokemon + '', (but) => this.estadisticas(but.id), this, 1, 0, 0);
                boton.id = numPokemon;
                boton.scale.setTo(0.45, 0.45);
                x += 150;
                numPokemon++;
            }
            x = 50;
            y += 122;

        }

        //Boton de pantalla completa
        var fullscreen_boton = game.add.button(1225, 665, 'fullscreen', this.fullscreen, this, 1, 0, 0);
        fullscreen_boton.scale.setTo(0.5, 0.5);
        fullscreen_boton.fixedToCamera = true;
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

        //Botones de número de páginas
        var numPag1 = game.add.button(1200, 530, 'numPag1', this.mismaPantalla, this, 1, 0, 0);
        numPag1.scale.setTo(0.16, 0.16);
        numPag1.fixedToCamera = true;

        var numPag2 = game.add.button(1205, 590, 'numPag2', this.cambioPantalla, this, 1, 0, 0);
        numPag2.scale.setTo(0.145, 0.145);
        numPag2.fixedToCamera = true;

    },

    update: function () {
        if (game.input.keyboard.isDown(Phaser.Keyboard.S)) {
            game.camera.y += vel;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.W)) {
            game.camera.y -= vel;
        }
    },

    estadisticas: function (numID) { //Se le pasa el id del boton para mostrar la imagen

        game.state.start('creditsState');
        pokemonID = numID;

    },

    fullscreen: function () {
        if (game.scale.isFullScreen) {
            game.scale.stopFullScreen();
        }
        else {
            game.scale.startFullScreen(false);
        }

    },

    mismaPantalla: function () {
        game.state.start('menuState', true, false);
    },

    cambioPantalla: function () {
        game.state.start('endingState', true, false);
    },

}

