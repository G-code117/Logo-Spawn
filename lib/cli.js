const inquirer = require('inquirer');
const Svg = require('./svg')
const {Circle, Square, Triangle} = require('./shape')
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');
const { default: Choices } = require('inquirer/lib/objects/choices');
const { error } = require('console');

class CLI {
  constructor() {
    this.title = '';

    // Array of task objects e.g. [{ text: string, priority: bool }, ...]
    this.tasks = [];
  }
  run() {
    const questions = [
      {
        name: 'text',
        type: 'input',
        message: 'enter 3 characters for logo',
        validate: (text) => {
          return text.length <= 3 || 'no text over 3 characters'
        }
      },
      {
        name: 'textColor',
        type: 'input',
        message: 'enter text color'
      },
      {
        name: 'shapeType',
        type: 'list',
        Choices: ['circle','square','triangle']
      },
      {
        name: 'shapeColor',
        type: 'input',
        message: 'enter text color'
      }
    ]
    return inquirer
      .prompt(questions)
      .then(({ text, textColor, shapeType, shapeColor }) => {
        let shape;
        if(shapeType === "circle"){
          shape = new Circle() 
        }else if(shapeType === "triangle"){
          shape = new Triangle() 
        }else if(shapeType === "square"){
          shape = new Square() 
        }

        shape.setColor(shapeColor)

        const svg = new Svg();
        svg.setText(text, textColor);
        svg.setShape(shape)
        return writeFile(`./example/${text}.svg`, svg.render());

      }).then(() => {
        console.log("Svg file created!")
      }).catch((error) => {
        console.error("error happened", error)
      })
      
  }

  
}

module.exports = CLI;
