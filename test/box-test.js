// Import the necessary functions

// Note
// Pay close attention to all these imports - they may not always already be there for you.

const chai = require('chai');
// const chai = require('chai'); -> gives you access to the Chai assertion library.
// const { expect } = require('chai');
const expect = chai.expect;
// const expect = chai.expect; -> gives you access to the Expect syntax from the Chai assertion library.
// const {createBox, calculateArea, increment, increaseWidth, increaseHeight} = require('../box');
const {createBox, calculateArea, increment} = require('../box');
// const {createBox, calculateArea} = require('../box'); -> imports your functions from your box file into your test file. Remember this only works if you are also exporting each function from your box file.

describe('Box functions', function() {
    it('should return true', function() {
        expect(true).to.deep.equal(true);
        // expect(true).to.equal(Parvin);
    });
  describe('createBox', function() {
   
    it('should return a box with default dimensions when no arguments are passed', function() {
      const box = createBox();
      expect(box).to.deep.equal({height: 100, width: 100});
    });

    it('should return a box with specified dimensions when arguments are passed', function() {
      const box = createBox(50, 70);
      expect(box).to.deep.equal({height: 50, width: 70});
    //   expect(box.height).to.equal(50);
    //   expect(box.width).to.equal(70);
    });

  });

  describe('calculateArea', function() {

    it('should return the area of the box', function() {
      const box = createBox(50, 70);
      const area = calculateArea(box);
      expect(area).to.equal(50 * 70);
    });
  });

//   describe('increaseWidth', function() {

//     it('should increase the width of the box by a provided value', function() {
//       let box = createBox(50, 70);
//       box = increaseWidth(box, 10);
//       expect(box).to.deep.equal({height: 50, width: 80});
//     });

//   });

//   describe('increaseHeight', function() {

//     it('should increase the height of the box by a provided value', function() {
//       let box = createBox(50, 70);
//       box = increaseHeight(box, 10);
//       expect(box).to.deep.equal({height: 60, width: 70});
//     });

//   });

describe('increment', function() {
    
// create the tests for the new increment function. We will test if it increases the width and height of the box correctly:

    it('should increase the width of the box by a provided value', function() {
      let box = createBox(50, 70);
      box = increment(box, 10, 'width');
      expect(box).to.deep.equal({height: 50, width: 80});
    });

    it('should increase the height of the box by a provided value', function() {
      let box = createBox(50, 70);
      box = increment(box, 10, 'height');
      expect(box).to.deep.equal({height: 60, width: 70});
    });

  });

});

