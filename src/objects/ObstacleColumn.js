import Obstacle from 'objects/Obstacle';

class ObstacleColumn extends Phaser.Group {
  constructor(game, y) {
    super(game);
    //this.game.add.existing(this);

    let top = new Obstacle(this.game, 400, y);
    top.scale.setTo(1, -1);
    //top.anchor.setTo(0, 0);
    //top.angle += 180;
    //top.body.rotation += 180;
    let bottom = new Obstacle(this.game, 400, y + 150);
    //bottom.anchor.setTo(0, 0);
    this.add(top);
    this.add(bottom);
  }
}

export default ObstacleColumn;
