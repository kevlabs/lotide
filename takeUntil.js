//returns array elements until callback returns true
const takeUntil = function(arr, cb) {

  const output = [];
  let i = 0;

  while (i < arr.length && !cb(arr[i])) {
    output.push(arr[i]);
    i++;
  }

  return output;
};

module.exports = takeUntil;