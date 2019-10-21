const {assert} = require('chai');
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it('returns [0] for letterPositions("hello")["h"]', () => {
    assert.deepEqual(letterPositions('hello')['h'], [0]);
  });
  it('returns [2, 3] for letterPositions("hello")["l"]', () => {
    assert.deepEqual(letterPositions('hello')['l'], [2, 3]);
  });
  it('does not return [1, 3] for letterPositions("hello")["l"]', () => {
    assert.notDeepEqual(letterPositions('hello')['l'], [1, 3]);
  });
});