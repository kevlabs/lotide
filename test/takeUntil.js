const {assert} = require('chai');
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {

  it('should return [1, 2, 3, 4, 5] if the callback is x => x > 5', () => {
    assert.deepEqual(takeUntil([1, 2, 3, 4, 5, 6, 7], elem => elem > 5), [1, 2, 3, 4, 5]);
  });

  it('should return [ 1, 2, 5, 7, 2 ] if the callback is x => x < 0', () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const results1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(results1, [ 1, 2, 5, 7, 2 ]);
  });

  it("should return ['I've', 'been', 'to', 'Hollywood'] if the callback is x => x === ','", () => {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const results2 = takeUntil(data2, x => x === ',');
    assert.deepEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });

});