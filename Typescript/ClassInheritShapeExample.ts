class Shape {
  constructor(protected x: number, protected y: number) {}
}

class Movable extends Shape {
  constructor(x: number, y: number) {
    super(x, y);
}

  move(dx: number, dy: number) {
    this.x += dx;
    this.y += dy;
  }
}