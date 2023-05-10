const { Triangle, Square, Circle } = require("./shapes");

function generateShapes({ letters, letterColor, shape, shapeColor }) {
  let shapeChange;
  let textY = 95;
  switch (shape[0]) {
    case "triangle":
      textY = 150;
      shapeChange = new Triangle();
      break;
    case "square":
      shapeChange = new Square();
      break;
    case "circle":
      shapeChange = new Circle();
      break;
  }
  shapeChange.setColor(shapeColor);
  return `
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
${shapeChange.render()}
<text xmlns="http://www.w3.org/2000/svg" x="100" y="${textY}" font-size="60" text-anchor="middle" fill="${letterColor}">${letters
    .toUpperCase()
    .slice(0, 3)}</text>
</svg>`;
}

module.exports = generateShapes;
