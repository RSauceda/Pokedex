Pokedex.preloadState = function(game) {

}

Pokedex.preloadState.prototype = {

    preload: function() {
        var text = "Loading";
        var style = { font: "65px Arial", fill: "#ffffff", align: "center" };
        var t = game.add.text(game.world.centerX -150, 250, text, style);
        game.load.image('fondo', 'assets/images/fondo.png', 0, 0);
        game.load.image('stats', 'assets/images/stats.png', 0, 0);
        game.load.spritesheet('fullscreen', 'assets/images/fullscreen_spritesheet.png', 71, 71);
        for(i = 1; i < 722; i++){
            game.load.image('' + i + '' , 'assets/images/pokemons/' + i + '.png', 0, 0);
        }
    },

    create: function() {
    	
    	game.state.start('menuState')
    },

    update: function() {

    }
}