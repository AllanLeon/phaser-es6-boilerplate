import ObstacleColumn from 'objects/ObstacleColumn';

class ObstacleGenerator extends Phaser.Group {
  constructor(game) {
    super(game);
    this.game.add.existing(this);

    this.game.time.events.loop(Phaser.Timer.SECOND * 3, this.generateObstaclesAtRandomPosition, this);
  }

  generateObstaclesAtRandomPosition() {
    let obstacles = new ObstacleColumn(this.game, this.game.rnd.integerInRange(50, 250));
    this.game.score.increase();
    this.add(obstacles);
  }

  update(bird, restartGame) {
    this.children.forEach(function(obstacle) {
      this.game.physics.arcade.collide(bird, obstacle, restartGame, null, this);
    }, this);
  }
}

export default ObstacleGenerator;
