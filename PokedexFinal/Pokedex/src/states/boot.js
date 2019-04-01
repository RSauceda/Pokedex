
var Pokedex = {}

Pokedex.bootState = function(game) {

}

Pokedex.bootState.prototype = {

    preload: function() {
        
    },

    create: function() {
         game.physics.startSystem(Phaser.Physics.ARCADE);
    	 game.state.start('preloadState')
    },

    update: function() {

    }
}