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

module.exports = eqObjects;