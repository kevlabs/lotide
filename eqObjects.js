const assertEqual = function(actual, expected) {
  let output = '';
  if (actual === expected) {
    output = `\x1b[32m✅Assertion Passed: ${actual} === ${expected}\x1b[0m`;
  } else {
    output = `\x1b[31m❗️️️Assertion Failed: ${actual} !== ${expected}\x1b[0m`;
  }
  console.log(output);
  
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  if (keys1.length !== Object.keys(object2).length || typeof object1 !== typeof object2) return false;
  for (const key of keys1) {
    //test for value as null is of type object
    if (typeof object1[key] !== 'object' || !object1[key]) {
      //compare primitives first
      if (object1[key] !== object2[key]) return false;
    } else {
      //elseif object use recurrence and call eqObjects again
      if (!eqObjects(object1[key], object2[key])) return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);


assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { z: 1, f: {e: 3, c: 2} }, b: 2 }, { a: { z: 1, f: {e: 3, c: 2} }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqObjects(['s', 't', 'r'], 'str'), false);
assertEqual(eqObjects(['s', 't', 'r'], {0: 's', 1: 't', 2: 'r'}), true);