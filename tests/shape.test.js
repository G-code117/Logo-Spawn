const {Square, Circle, Triangle} = require('../lib/shape');

describe('Circle', () => {
    test('should render svg for a green circle element', () => {
        const expectedSvg = [
            '<circle cx="150" cy="100" r="80" fill="blue" />',
      ].join('');
      const circle = new Circle();
      expect(header.render()).toEqual(expectedHtml);
    });
    test('should accept a fill color input', () => {
        const expectedSvg = [
          '<circle cx="150" cy="100" r="80" fill="purple" />',
        ].join('');
        const circle = new Circle();
        circle.setColor("purple");
        const actualSvg = circle.render()
        expect(actualSvg).toEqual(expectedSvg);
      });
  });

  describe('Square', () => {
    test('should render svg for a red square element', () => {
        const expectedSvg = [
            '<rect x="90" y="40" width="120" height="120" fill="red" />',
      ].join('');
      const square = new Square();
      expect(header.render()).toEqual(expectedHtml);
    });
    test('should accept a fill color input', () => {
        const expectedSvg = [
          '<rect x="90" y="40" width="120" height="120" fill="pink" />',
        ].join('');
        const square = new Square();
        square.setColor("pink");
        const actualSvg = square.render()
        expect(actualSvg).toEqual(expectedSvg);
      });
  });

  describe('Triangle', () => {
    test('should render svg for an green triangle element', () => {
        const expectedSvg = [
            '<triangle points="150, 18, 244, 182, 56, 182" fill="green" />',
      ].join('');
      const triangle = new Triangle();
      triangle.setColor("green")
      const actualSvg = triangle.render()
      expect(actualSvg.render()).toEqual(expectedSvg);
    });
    test('should accept a fill color input', () => {
        const expectedSvg = [
          '<triangle points="150, 18, 244, 182, 56, 182" fill="green" />',
        ].join('');
        const triangle = new Triangle();
        triangle.setColor("green");
        const actualSvg = triangle.render()
        expect(actualSvg).toEqual(expectedSvg);
      });
  });