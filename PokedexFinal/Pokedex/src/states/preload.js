Pokedex.preloadState = function(game) {

}
var arrayTipos = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fight', 'fire', 'flying', 'ghost',
            'grass', 'ground', 'ice', 'normal', 'poison', 'psychic', 'rock', 'steel', 'water'];
Pokedex.preloadState.prototype = {

    preload: function() {
        var text = "Loading";
        var style = { font: "65px Arial", fill: "#ffffff", align: "center" };
        var t = game.add.text(game.world.centerX -150, 250, text, style);
        game.load.image('fondo', 'assets/images/fondo_pokedex.png', 0, 0);
        game.load.image('numPag1', 'assets/images/pagina1.png', 0, 0);
        game.load.image('numPag2', 'assets/images/pagina2.png', 0, 0);
        game.load.image('stats', 'assets/images/stats.png', 0, 0);
        game.load.image('japaneseFlag', 'assets/images/japanFlag.png', 0, 0);
        game.load.image('nombrePokemon', 'assets/images/pokemon_nombre.png', 0, 0);
        game.load.image('hpPokemon', 'assets/images/pokemon_hp.png', 0, 0);
        game.load.image('attackPokemon', 'assets/images/pokemon_attack.png', 0, 0);
        game.load.image('defensePokemon', 'assets/images/pokemon_defense.png', 0, 0);
        game.load.image('weightPokemon', 'assets/images/pokemon_weight.png', 0, 0);
        game.load.image('botonAtras', 'assets/images/boton_atras.png', 0, 0);
        game.load.spritesheet('fullscreen', 'assets/images/fullscreen_spritesheet.png', 71, 71);
        for(i = 1; i < 722; i++){
            game.load.image('' + i + '' , 'assets/images/pokemons/' + i + '.png', 0, 0);
        }
        for(j = 0; j < 18; j++){
            game.load.image('' + arrayTipos[j] + '', 'assets/images/' + arrayTipos[j] + '_type.png', 0, 0);
        }
    },

    create: function() {
    	
    	game.state.start('menuState')
    },

    update: function() {
        
    }
}