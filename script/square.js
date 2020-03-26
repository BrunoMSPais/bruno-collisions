class Square {
  constructor(game, x, y, width, height) {
    this.context = game.context;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    this.context.beginPath();
    this.context.lineWidth = "1";
    this.context.strokeStyle = "green";
    this.context.rect(this.x, this.y, this.width, this.height);
    this.context.stroke();
  }
  collision(player) {
    const x = player.x + 50;
    const y = player.y + 50;
    const height = player.playerHeight;
    const width = player.playerWidth;

    // in progress

    return false;
  }
}
