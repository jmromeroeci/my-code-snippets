class Shape {
  constructor(x, y) {}
}

class Movable extends Shape {
  constructor(x, y) {
    super(x, y);
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;
  }
}
