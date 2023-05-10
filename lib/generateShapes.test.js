const generateShapes = require("./generateShapes");

describe("generateShapes", () => {
  test("should generate a triangle with red text and shape fill should be pink", () => {
    const logoData = {
      letters: "JCB",
      letterColor: "red",
      shape: ["triangle"],
      shapeColor: "pink",
    };
    const expected = `
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
<polygon points="95, 18 189, 182 1, 182" stroke="black" fill="pink" stroke-width="3"/>
<text xmlns="http://www.w3.org/2000/svg" x="100" y="150" font-size="60" text-anchor="middle" fill="red">JCB</text>
</svg>`;
    expect(generateShapes(logoData)).toEqual(expected);
  });

  test("should generate a square with red text and shape fill should be pink", () => {
    const logoData = {
      letters: "JCB",
      letterColor: "red",
      shape: ["square"],
      shapeColor: "pink",
    };
    const expected = `
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
<rect x="45" y="25" width="110" height="110" stroke="black" fill="pink" stroke-width="3"/>
<text xmlns="http://www.w3.org/2000/svg" x="100" y="95" font-size="60" text-anchor="middle" fill="red">JCB</text>
</svg>`;
    expect(generateShapes(logoData)).toEqual(expected);
  });

  test("should generate a circle with red text and shape fill should be pink", () => {
    const logoData = {
      letters: "JCB",
      letterColor: "red",
      shape: ["circle"],
      shapeColor: "pink",
    };
    const expected = `
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
<circle cx="100" cy="75" r="65" stroke="black" fill="pink" stroke-width="3"/>
<text xmlns="http://www.w3.org/2000/svg" x="100" y="95" font-size="60" text-anchor="middle" fill="red">JCB</text>
</svg>`;
    expect(generateShapes(logoData)).toEqual(expected);
  });
});
