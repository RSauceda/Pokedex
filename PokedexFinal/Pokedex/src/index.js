game = new Phaser.Game(2000, 2000, Phaser.AUTO, 'gameDiv') 
//Inicializo el tamaño de la pantalla a 2000 x 2000 para leer el nuevo tamaño del fichero xml
  
game.state.add('bootState', Pokedex.bootState)
game.state.add('preloadState', Pokedex.preloadState)
game.state.add('menuState', Pokedex.menuState)
game.state.add('endingState', Pokedex.endingState)
game.state.add('creditsState', Pokedex.creditsState)
game.state.start('bootState')
