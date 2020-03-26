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

    const w1 =
      (this.Ax * side1 + side4 * side2 - x * side1) /
      (side3 * side2 - (this.Bx - this.Ax) * side1);
    const w2 = (side4 - w1 * side3) / side1;
    // returns true if collision is detected
    return w1 >= 0 && w2 >= 0 && w1 + w2 <= 1;
  }
}
