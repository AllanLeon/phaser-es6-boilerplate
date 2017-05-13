import Bird from 'objects/Bird';
import ObstacleGenerator from 'objects/ObstacleGenerator';
import Score from 'objects/Score';

class GameState extends Phaser.State {
	preload() {
		// This function will be executed at the beginning
    // Here's where we load the images and sounds
		this.game.load.image('bird', 'assets/bird.png');
		this.game.load.image('pipe', 'assets/pipe.png');
		this.game.load.image('background', 'assets/background.png');
	}

	create() {
		// This function is called after the preload function
    // Here we set up the game, display sprites, etc.
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		this.game.add.tileSprite(0, 0, this.game.world.width, this.game.world.height, 'background');

		this.game.score = new Score(this.game, 0, 0);
		this.bird = new Bird(this.game, this.game.world.width / 4, this.game.world.centerY);
		this.obstacles = new ObstacleGenerator(this.game);

		this.bird.checkWorldBounds = true;
    this.bird.events.onOutOfBounds.add(this.restartGame, this);

		this.game.world.bringToTop(this.game.score);
	}

	update() {
		// This function is called 60 times per second
    // It contains the game's logic
		this.obstacles.update(this.bird, this.restartGame);
	}

	restartGame() {
		this.game.state.start('GameState');
	}

	/*render() {
		this.obstacles.children.forEach(function(obstacle) {
			obstacle.children.forEach((pipe) => {
				this.game.debug.body(pipe);
			}, this);
			//this.game.debug.body(obstacle);
		}, this);
	}*/

}

export default GameState;
