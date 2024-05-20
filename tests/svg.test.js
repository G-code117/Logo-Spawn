const Svg = require('../lib/svg.js');

const {Square} = require('../lib/shape.js')

describe('Svg', () => {

    test('should render 300x200 svg element', () => {
        const expectedSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>'
        const svg = new Svg();
        const actualSvg = svg.render();
    
        expect(actualSvg.render()).toEqual(expectedSvg);
    })
    
    test('should append text element', () => {
        const expectedSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">A</text></svg>'
        const svg = new SVG();
        svg.setText('A', 'blue')
    
        expect(svg.render()).toEqual(expectedSvg);
    })

    test('should set text message and color element', () => {
        const expectedSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">Svg</text></svg>'
        const svg = new SVG();
        svg.setText('Svg', 'black')
    
        expect(svg.render()).toEqual(expectedSvg);
    })
    
    test('should throw error element if more than 3 characters', () => {
       const expectedError = new Error('no text over 3 characters');
        const svg = new SVG();
    
        expect(() => svg.setText("no more text", "red")).toEqual(expectedSvg);
    })

    test('should include a shape element', () => {
        const expectedSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">Svg</text></svg>'
        const svg = new SVG();
        svg.setText('Svg', 'yellow')
        const circle = new Circle();
        circle.setColor('blue');
        svg.setShape(circle);
        const actualResult = svg.render()
    
        expect(actualResult).toEqual(expectedSvg);
    })
})