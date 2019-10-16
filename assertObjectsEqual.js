const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  if (keys1.length !== Object.keys(object2).length) return false;
  for (const key of keys1) {
    if (typeof object1[key] !== 'object') {
      //compare primitives first
      if (object1[key] !== object2[key]) return false;
    } else {
      //elseif object use recurrence and call eqObjects again
      if (!eqObjects(object1[key], object2[key])) return false;
    }
  }
  return true;
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);