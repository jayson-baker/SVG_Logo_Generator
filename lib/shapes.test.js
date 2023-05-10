const { Triangle, Square, Circle } = require("./shapes");

describe("shapes.js", () => {
  test("Triangle should be filled with user selected color", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="95, 18 189, 182 1, 182" stroke="black" fill="blue" stroke-width="3"/>'
    );
  });

  test("Square should be filled with user selected color", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<rect x="45" y="25" width="110" height="110" stroke="black" fill="blue" stroke-width="3"/>'
    );
  });

  test("Circle should be filled with user selected color", () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<circle cx="100" cy="75" r="65" stroke="black" fill="blue" stroke-width="3"/>'
    );
  });

  test("Circle should be filled with user selected color", () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<circle cx="100" cy="75" r="65" stroke="black" fill="red" stroke-width="3"/>'
    );
  });
});
