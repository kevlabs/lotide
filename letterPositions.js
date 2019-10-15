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

const countLetters = function(str) {
  const output = {};
  for (let i = 0; i < str.length; i++) {
    output[str[i]] = output[str[i]] || [];
    output[str[i]].push(i);
  }
  return output;
};

console.log(countLetters("lighthouse in the house"));

assertArraysEqual(countLetters('hello')['h'], [0]);
assertArraysEqual(countLetters('hello')['l'], [2, 3]);
assertArraysEqual(countLetters('hello')['l'], [1, 3]);