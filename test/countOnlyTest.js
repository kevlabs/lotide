const {assert} = require('chai');
const countOnly = require('../countOnly');

describe('#countOnly', () => {

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

  it('should return 1 for Jason', () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it('should return 0 for Karima', () => {
    assert.strictEqual(result1["Karima"], 0);
  });
  it('should return 2 for Fang', () => {
    assert.strictEqual(result1["Fang"], 2);
  });
  it('should return {} for countOnly([\'John\'], {})', () => {
    assert.deepEqual(countOnly(['John'], {}), {});
  });

});