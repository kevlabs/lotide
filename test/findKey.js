const {assert} = require('chai');
const findKey = require('../findKey');


describe("#findKey", () => {
  const myObj = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  it('should return noma if the callback is x => x.stars === 2', () => {
    assert.strictEqual(findKey(myObj, x => x.stars === 2), "noma");
  });

  it('should return undefined if the callback is x => x.stars === 4', () => {
    assert.strictEqual(findKey(myObj, x => x.stars === 4), undefined);
  });

});