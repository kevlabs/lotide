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

const middle = function(arr) {
  const testArr = arr.slice();
  return (testArr.length - 1) ? testArr.splice(~~((testArr.length - 1) / 2), testArr.length % 2 ? 1 : 2) : [];
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => true
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => true
assertArraysEqual(middle(["1", "2", "3"]), ["2"]); // => true
assertArraysEqual(middle(["1", "2", "3"]), ["1", "2"]); // => false