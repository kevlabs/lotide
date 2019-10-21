const flatten = function(arr) {
  return arr.reduce((flattened, element) => flattened.concat(element), []);
};

module.exports = flatten;