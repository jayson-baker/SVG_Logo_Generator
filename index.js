const inquirer = require("inquirer");
const fs = require("fs");
const generateShapes = require("./lib/generateShapes");

const questions = [
  "letters:input:Enter you three leters.",
  "letterColor:input:What color would you like the text? (You may enter a hexadecimal number if you like.)",
  "shape:checkbox:What shape would you like the logo to be?:circle:triangle:square",
  "shapeColor:input:What color would you like the shape? (You may enter a hexadecimal number if you like.)",
].map((element) => {
  const [name, type, message, ...choices] = element.split(":");
  return { name, type, message, choices };
});

function writeToFile(answers) {
  fs.writeFile("logo.svg", generateShapes(answers), (err) =>
    err ? console.log(err) : console.log("Successfully created Logo!")
  );
}

function init() {
  inquirer.prompt(questions).then(writeToFile);
}

init();
