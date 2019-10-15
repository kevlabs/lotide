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

const without = function(arr, excl) {
  return arr.filter(elem => !excl.includes(elem));
};

assertArraysEqual(without([1, 2, 3, 4, 5], [3, 5]), [1, 2, 4]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);


//make sure that original array is not changed
const myArr = [1, 2, 3, 4, 5];
assertArraysEqual(without(myArr, [3, 5]), [1, 2, 4]);
assertArraysEqual(myArr, [1, 2, 3, 4, 5]);
