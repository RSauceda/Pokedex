game = new Phaser.Game(1280, 720, Phaser.AUTO, 'gameDiv')
  
game.state.add('bootState', Pokedex.bootState)
game.state.add('preloadState', Pokedex.preloadState)
game.state.add('menuState', Pokedex.menuState)
game.state.add('endingState', Pokedex.endingState)
game.state.add('creditsState', Pokedex.creditsState)
game.state.start('bootState')
