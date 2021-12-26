var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns correct if 5! equals 120.', ()=> {
      // Setup
      const inputNumber = 5;
      const expected = 120;
      // Exercise
      const result = Calculate.factorial(inputNumber);
      // Verify
      assert.equal(result, expected);
    });
    
    it('returns correct if 3! equals 6.', ()=> {
      // Setup
      const inputNumber = 3;
      const expected = 6;
      // Exercise
      const result = Calculate.factorial(inputNumber);
      // Verify
      assert.equal(result, expected);
    });
    
    it('returns correct if 0! equals 1.', ()=> {
      // Setup
      const inputNumber = 0;
      const expected = 1;
      // Exercise
      const result = Calculate.factorial(inputNumber);
      // Verify
      assert.equal(result, expected);
    });
  });
});