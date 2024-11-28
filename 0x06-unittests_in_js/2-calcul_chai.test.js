const { expect } = require('chai');
const calculateNumber = require('./0-calcul'); // Adjust path to your actual file

describe('calculateNumber with chai', () => {
  it('should return the sum of two rounded integers', () => {
    expect(calculateNumber(1, 3)).to.equal(4);
    expect(calculateNumber(1.2, 3.7)).to.equal(5);
    expect(calculateNumber(1.5, 3.7)).to.equal(6);
    expect(calculateNumber(2.4, 2.4)).to.equal(4);
  });

  it('should handle negative numbers', () => {
    expect(calculateNumber(-1.4, -3.6)).to.equal(-5);
    expect(calculateNumber(-1.5, 2.5)).to.equal(1);
    expect(calculateNumber(-0.5, -0.5)).to.equal(-1);
  });

  it('should handle edge cases', () => {
    expect(calculateNumber(0.1, 0.7)).to.equal(1);
    expect(calculateNumber(0.4, 0.4)).to.equal(0);
    expect(calculateNumber(0.9, 0.1)).to.equal(1);
  });
});
