const assertEqual = function(actual, expected) {
  let output = '';
  if (actual === expected) {
    output = `\x1b[32m✅Assertion Passed: ${actual} === ${expected}\x1b[0m`;
  } else {
    output = `\x1b[31m❗️️️Assertion Failed: ${actual} !== ${expected}\x1b[0m`;
  }
  console.log(output);
  
};

const countLetters = function(str) {
  const output = {};
  for (const char of str) {
    output[char] = output[char] || 0;
    output[char]++;
  }
  return output;
};

console.log(countLetters("lighthouse in the house"));