const {assert} = require('chai');
const map = require('../map');

describe("#map", () => {

  const words = ["ground", "control", "to", "major", "tom"];

  it("returns ['g', 'c', 't', 'm', 't'] with callback str => str[0]", () => {
    assert.deepEqual(map(words, str => str[0]), ['g', 'c', 't', 'm', 't']);
  });
  it('returns [] with callback str => str[0]', () => {
    assert.deepEqual(map([], (str) => str[0]), []);
  });
});