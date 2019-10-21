const {assert} = require('chai');
const without = require('../without');

describe("#without", () => {

  it('should return [1, 2, 4] if without([1, 2, 3, 4, 5], [3, 5])', () => {
    assert.deepEqual(without([1, 2, 3, 4, 5], [3, 5]), [1, 2, 4]);
  });

  it('should return [2, 3] if without([1, 2, 3], [1])', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it('should return [ "1", "2"] if without(["1", "2", "3"], [1, 2, "3"])', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it('should not alter the original array', () => {
    const myArr = [1, 2, 3, 4, 5];
    without(myArr, [3, 5]);
    assert.deepEqual(myArr, [1, 2, 3, 4, 5]);
  });

});
