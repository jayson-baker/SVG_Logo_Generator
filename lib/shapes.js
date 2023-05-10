// Put shape classes here
class Shape {
  constructor(shape, points) {
    this.shape = shape;
    this.points = points;
  }
  render() {
    return `<${this.shape} ${this.points} stroke="black" fill="${this.userColor}" stroke-width="3"/>`;
  }
  setColor(color) {
    this.userColor = color;
  }
}

class Triangle extends Shape {
  constructor() {
    super("polygon", 'points="95, 18 189, 182 1, 182"');
  }
}

class Square extends Shape {
  constructor() {
    super("rect", 'x="45" y="25" width="110" height="110"');
  }
}

class Circle extends Shape {
  constructor() {
    super("circle", 'cx="100" cy="75" r="65"');
  }
}

module.exports = { Triangle, Square, Circle };
