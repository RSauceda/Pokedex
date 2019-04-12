Pokedex.creditsState = function (game) {

}
var spanish = true;

Pokedex.creditsState.prototype = {

    preload: function () {
        game.load.json('datosPokemon', 'assets/csvjson.json');
    },


    create: function (num) {
        var datosPokemon = game.cache.getJSON('datosPokemon'); //carga del fichero json
        fondo = game.add.tileSprite(0, 0, 1280, 720, 'stats');
        var idPokemon = pokemonID;

        //Interfaces estéticas del nombre, hp, ataque, el sprite del pokemon ...
        var pokemonActual = game.add.sprite(100, 235, '' + idPokemon + '');
        pokemonActual.scale.setTo(1.3, 1.3);
        var nombrePokemon = game.add.sprite(640, 90, 'nombrePokemon');
        nombrePokemon.scale.setTo(0.85, 0.85);
        nombrePokemon.anchor.setTo(0.5);
        var hpPokemon = game.add.sprite(120, 90, 'hpPokemon');
        hpPokemon.scale.setTo(0.5, 0.5);
        hpPokemon.anchor.setTo(0.5);
        var ataquePokemon = game.add.sprite(1100, 50, 'attackPokemon');
        ataquePokemon.scale.setTo(0.1, 0.1);
        ataquePokemon.anchor.setTo(0.5);
        var defensaPokemon = game.add.sprite(1100, 135, 'defensePokemon');
        defensaPokemon.scale.setTo(0.2, 0.2);
        defensaPokemon.anchor.setTo(0.5);
        var pesoPokemon = game.add.sprite(220, 600, 'weightPokemon');
        pesoPokemon.scale.setTo(0.13, 0.13);
        pesoPokemon.anchor.setTo(0.5);
        var banderaJapon = game.add.sprite(540, 190, 'japaneseFlag');
        banderaJapon.scale.setTo(0.04, 0.04);
        banderaJapon.anchor.setTo(0.5);
        var fondoStats = game.add.sprite(660, 385, 'fondoStats');
        fondoStats.scale.setTo(0.85, 0.95);
        fondoStats.anchor.setTo(0.5);

        //Tipos del pokemon
        var tipo1 = game.add.sprite(175, 625, '' + datosPokemon[idPokemon - 1].type1 + '');
        tipo1.scale.setTo(0.1, 0.1);
        var tipo2 = game.add.sprite(275, 625, '' + datosPokemon[idPokemon - 1].type2 + '');
        tipo2.scale.setTo(0.1, 0.1);

        //Habilidades
        var habilidades = game.add.text(845, 250, "Habilidades: " + datosPokemon[idPokemon - 1].abilities, { font: '45px Arial Black', fill: '#000000' })
        habilidades.scale.setTo(0.7, 0.7);
        habilidades.anchor.setTo(0.5);

        //Texto con info (hp, ataque, ...)
        //Caso especial (Pokemon legendario)
        if (datosPokemon[idPokemon - 1].is_legendary == 1) {
            var nombre = game.add.text(640, 90, datosPokemon[idPokemon - 1].name + " [Gen " + datosPokemon[idPokemon - 1].generation + "]", { font: '75px Verdana', fill: '#ffd300' })
            nombre.anchor.setTo(0.5); //alineación del texto
        } else {
            var nombre = game.add.text(640, 90, datosPokemon[idPokemon - 1].name + " [Gen " + datosPokemon[idPokemon - 1].generation + "]", { font: '75px Verdana', fill: '#ffffff' })
            nombre.anchor.setTo(0.5); //alineación del texto
        }
        var hp = game.add.text(122.5, 90, datosPokemon[idPokemon - 1].hp, { font: '40px Arial Black', fill: '#000000' })
        hp.anchor.setTo(0.5);
        var ataque = game.add.text(1175, 55, datosPokemon[idPokemon - 1].attack, { font: '30px Arial Black', fill: '#000000' })
        ataque.anchor.setTo(0.5);
        var defensa = game.add.text(1175, 140, datosPokemon[idPokemon - 1].defense, { font: '30px Arial Black', fill: '#000000' })
        defensa.anchor.setTo(0.5);
        var peso = game.add.text(310, 610, datosPokemon[idPokemon - 1].weight_kg, { font: '40px Arial Black', fill: '#000000' })
        peso.anchor.setTo(0.5);
        var nombreJapones = game.add.text(690, 192.5, datosPokemon[idPokemon - 1].japanese_name, { font: '20px Arial Black', fill: '#000000' })
        nombreJapones.anchor.setTo(0.5);

        //Botones
        var volver_boton = game.add.button(15, 635, 'botonAtras', this.menuOnClick, this, 1, 0, 0);
        volver_boton.scale.setTo(0.09, 0.09);
        var fullscreen_boton = game.add.button(1225, 670, 'fullscreen', this.fullscreen, this, 1, 0, 0);
        fullscreen_boton.scale.setTo(0.5, 0.5);
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

        //Estadisticas contra elementos
        //tipos es un array que contiene enteros que indican cuanto le influye al pokemon actual los otros tipos
        var tipos = [datosPokemon[idPokemon - 1].bug, datosPokemon[idPokemon - 1].dark, datosPokemon[idPokemon - 1].dragon,
            datosPokemon[idPokemon - 1].electric, datosPokemon[idPokemon - 1].fairy, datosPokemon[idPokemon - 1].fight,
            datosPokemon[idPokemon - 1].fire, datosPokemon[idPokemon - 1].flying, datosPokemon[idPokemon - 1].ghost,
            datosPokemon[idPokemon - 1].grass, datosPokemon[idPokemon - 1].ground, datosPokemon[idPokemon - 1].ice,
            datosPokemon[idPokemon - 1].normal, datosPokemon[idPokemon - 1].poison, datosPokemon[idPokemon - 1].psychic,
            datosPokemon[idPokemon - 1].rock, datosPokemon[idPokemon - 1].steel, datosPokemon[idPokemon - 1].water];
        game.add.text(500, 305, "Fuerte contra:", { font: '40px Arial Black', fill: '#29c71b'});
        game.add.text(500, 510, "Débil contra:", { font: '40px Arial Black', fill: '#2d0c82'});
        var desplazamientoX = 70; //espacio de separación entre cada sprite de tipo
        var posInicialX = 525;
        var posX1 = posInicialX;
        var posX2 = posInicialX;
        var posY = 350;
        var contador = 0; //Si llega a 10 empieza a poner sprites en otra fila para que no se salgan de la pantalla
        for (i = 0; i < 18; i++) { //18 = numero de tipos en total
            if(contador < 9){
                if (tipos[i] <= 1) {
                    var debilContra = game.add.sprite(posX1, posY, '' + arrayTipos[i] + '');
                    debilContra.scale.setTo(0.1);
                    posX1 += desplazamientoX;
                    contador++;
                }
                else{
                    var fuerteContra = game.add.sprite(posX2, posY + 200, '' + arrayTipos[i] + '');
                    fuerteContra.scale.setTo(0.1);
                    posX2 += desplazamientoX;
                    contador++;
                }
            }
            else{
                //Se resetea porque pasa a la siguiente fila
                posX1 = posInicialX;
                posX2 = posInicialX;
                posY += desplazamientoX;
                contador = 0;
            }
            

        }
    },

    update: function () {
        //Movimiento del fondo
        fondo.tilePosition.x += 0.25;
        fondo.tilePosition.y += -0.25;

    },

    menuOnClick: function () {

        game.state.start('menuState', true, false)

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
