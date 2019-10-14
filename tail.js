const assertEqual = function(actual, expected) {
  let output = '';
  if (actual === expected) {
    output = `\x1b[32m✅Assertion Passed: ${actual} === ${expected}\x1b[0m`;
  } else {
    output = `\x1b[31m❗️️️Assertion Failed: ${actual} !== ${expected}\x1b[0m`;
  }
  console.log(output);
  
};

const tail = function(arr) {
  return arr.slice(1);
};

assertEqual(tail([5,6,7]).toString(), [6, 7].toString());
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(tail([]), "Hello");
