// FUNCTION IMPLEMENTATION
const assertEqual2 = function(actual, expected) {
  const passed = actual === expected;
  console.log('Assertion %s: %s %s== %s', passed ? 'Passed' : 'Failed', actual, passed ? '=' : '!', expected);

};

const assertEqual = function(actual, expected) {
  let output = '';
  if (actual === expected) {
    output = `\x1b[32mAssertion Passed: ${actual} === ${expected}\x1b[0m`;
  } else {
    output = `\x1b[31mAssertion Failed: ${actual} !== ${expected}\x1b[0m`;
  }
  console.log(output);
  
}

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, 1);
assertEqual('1', 1);
assertEqual('Hey', 'hey');
assertEqual('Hey', 'Hey');