// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two rounded integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(2.4, 2.4), 4);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.4, -3.6), -5);
    assert.strictEqual(calculateNumber(-1.5, 2.5), 1);
    assert.strictEqual(calculateNumber(-0.5, -0.5), -1);
  });

  it('should handle edge cases where rounding occurs', () => {
    assert.strictEqual(calculateNumber(0.1, 0.7), 1);
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
    assert.strictEqual(calculateNumber(0.9, 0.1), 1);
  });
});

