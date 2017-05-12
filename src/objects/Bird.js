class Bird extends Phaser.Sprite {
  constructor(game, x, y) {
    super(game, x, y, 'bird', 0);
    this.game.add.existing(this);
    this.scale.setTo(0.1, 0.1);

    this.initializePhysics();
    this.initializeInput();
    this.initializeTweens();
  }

  initializePhysics() {
    this.game.physics.arcade.enable(this);
    this.body.gravity.y = 1000;
  }

  initializeInput() {
    let spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(this.jump, this);
  }

  initializeTweens() {
    this.flyAnimation = this.game.add.tween(this);
    this.flyAnimation.to({angle: -20}, 100);
  }

  jump() {
    this.flyAnimation.start();
    this.body.velocity.y = -350;
  }

  update() {
    if (this.angle < 20)
    this.angle += 1;
  }
}

export default Bird;
