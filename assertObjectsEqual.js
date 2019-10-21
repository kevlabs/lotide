const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let output = '';
  if (eqObjects(actual, expected)) {
    output = `\x1b[32m✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}\x1b[0m`;
  } else {
    output = `\x1b[31m❗️️️Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}\x1b[0m`;
  }
  console.log(output);
  
};

module.exports = assertObjectsEqual;