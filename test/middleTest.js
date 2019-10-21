const {assert} = require('chai');
const middle = require('../middle');

describe("#middle", () => {
  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it('returns [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.notDeepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Hello"]);
  });
});