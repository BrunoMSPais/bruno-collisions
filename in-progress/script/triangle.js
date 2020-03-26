class Triangle {
  constructor(game, Ax, Ay, Bx, By, Cx, Cy) {
    this.context = game.context;
    this.Ax = Ax;
    this.Ay = Ay;
    this.Bx = Bx;
    this.By = By;
    this.Cx = Cx;
    this.Cy = Cy;
  }

  draw() {
    this.context.beginPath();
    this.context.moveTo(Ax, Ay);
    this.context.lineTo(Bx, By);
    this.context.lineTo(Cx, Cy);
    this.context.lineTo(Ax, Ay);
    this.context.stroke();
  }
}
