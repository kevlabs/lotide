const {assert} = require('chai');
const countLetters = require('../countLetters');

describe('#countLetters', () => {

  it('should return {e: 3, g: 1, h: 4, i: 2, l: 1, n: 1, o: 2, s: 2, t: 2, u: 2} for "lighthouse in the house"', () => {
    assert.deepEqual(countLetters('lighthouse in the house'), {e: 3, g: 1, h: 4, i: 2, l: 1, n: 1, o: 2, s: 2, t: 2, u: 2});
  });
  it('should not return {e: 3, g: 5, h: 4, i: 2, n: 8, o: 2, s: 2, t: 2, u: 2} for "lighthouse in the house"', () => {
    assert.notDeepEqual(countLetters('lighthouse in the house'), {e: 3, g: 5, h: 4, i: 2, n: 8, o: 2, s: 2, t: 2, u: 2});
  });
  it('should return {} for ""', () => {
    assert.deepEqual(countLetters(''), {});
  });
  it('should return {} for undefined', () => {
    assert.deepEqual(countLetters(), {});
  });

});