const {assert} = require('chai');
const tail = require('../tail');

describe("#tail", () => {
  it('returns [6, 7] for [5, 6, 7]', () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });
  it('should not return "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.notDeepEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it('should not return "Hello" for []', () => {
    assert.notDeepEqual(tail([]), "Hello");
  });
});