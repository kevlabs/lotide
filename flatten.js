const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((elem, i) => elem === arr2[i]);
};

const assertArraysEqual = function(actual, expected) {
  let output = '';
  if (eqArrays(actual, expected)) {
    output = `\x1b[32m✅Assertion Passed: ${actual} === ${expected}\x1b[0m`;
  } else {
    output = `\x1b[31m❗️️️Assertion Failed: ${actual} !== ${expected}\x1b[0m`;
  }
  console.log(output);
  
};

const flatten = function(arr) {
  return arr.reduce((flattened, element) => flattened.concat(element), []);
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);