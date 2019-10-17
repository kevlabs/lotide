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

const map = function(arr, cb) {
  return arr.reduce((output, elem) => output.concat(cb(elem)), []);
};

const words = ["ground", "control", "to", "major", "tom"];

console.log(map(words, (str) => str[0]));

assertArraysEqual(map(words, (str) => str[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map([], (str) => str[0]), []);