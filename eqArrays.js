const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((elem, i) => Array.isArray(elem) && eqArrays(elem, arr2[i]) || elem === arr2[i]);
};

module.exports = eqArrays;