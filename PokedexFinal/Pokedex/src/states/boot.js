
var Pokedex = {}

Pokedex.bootState = function(game) {

}

Pokedex.bootState.prototype = {

    preload: function() {
        game.load.xml('xml', 'assets/xmlPokedex.xml'); //Se carga el fichero xml
        game.load.spritesheet('loading', 'assets/images/loading.png', 300, 200, 3);
        game.load.image('stats', 'assets/images/stats.png', 0, 0);
    },

    create: function() {
        //Lectura xml para cambio de tamaño de pantalla
        var xml = game.cache.getXML('xml');
    	var sizeX = xml.getElementsByTagName('screenSizeX')[0].innerHTML;
        var sizeY = xml.getElementsByTagName('screenSizeY')[0].innerHTML;
        game.scale.setGameSize(sizeX, sizeY);

        //game.physics.startSystem(Phaser.Physics.ARCADE);
    	game.state.start('preloadState')
    },

    update: function() {

    }
}