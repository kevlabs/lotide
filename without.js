const without = function(arr, excl) {
  return arr.filter(elem => !excl.includes(elem));
};

module.exports = without;