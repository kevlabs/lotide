const {assert} = require('chai');
const flatten = require('../flatten');


describe("#flatten", () => {

  it('should return [1, 2, 3, 4, 5, 6] with input [1, 2, [3, 4], 5, [6]]', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

});