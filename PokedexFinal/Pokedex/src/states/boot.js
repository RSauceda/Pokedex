
var Pokedex = {}

Pokedex.bootState = function(game) {

}

Pokedex.bootState.prototype = {

    preload: function() {
        game.load.spritesheet('loading', 'assets/images/loading.png', 300, 200, 3);
        game.load.image('stats', 'assets/images/stats.png', 0, 0);
    },

    create: function() {
         game.physics.startSystem(Phaser.Physics.ARCADE);
    	 game.state.start('preloadState')
    },

    update: function() {

    }
}