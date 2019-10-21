const assertEqual = function(actual, expected) {
  let output = '';
  if (actual === expected) {
    output = `\x1b[32m✅Assertion Passed: ${actual} === ${expected}\x1b[0m`;
  } else {
    output = `\x1b[31m❗️️️Assertion Failed: ${actual} !== ${expected}\x1b[0m`;
  }
  console.log(output);
  
};

module.exports = assertEqual;