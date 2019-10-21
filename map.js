const map = function(arr, cb) {
  return arr.reduce((output, elem) => output.concat(cb(elem)), []);
};

module.exports = map;