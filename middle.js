const middle = function(arr) {
  const testArr = arr.slice();
  return (testArr.length - 1) ? testArr.splice(~~((testArr.length - 1) / 2), testArr.length % 2 ? 1 : 2) : [];
};

module.exports = middle;