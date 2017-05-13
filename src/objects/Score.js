class Score extends Phaser.Text {
  constructor(game, x, y) {
    super(game, x, y, '0', {
      fill: "#ffffff"
    });
    this.score = 0;
    this.game.add.existing(this);
  }

  increase() {
    this.score++;
    this.text = `${this.score}`;
  }
}

export default Score;
