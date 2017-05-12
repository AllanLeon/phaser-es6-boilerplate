class Obstacle extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'pipe');
    //this.game.add.existing(this);

    this.game.physics.arcade.enable(this);
    this.body.velocity.x = -100;

    this.checkWorldBounds = true;
    this.outOfBoundsKill = true;
  }
}

export default Obstacle;
