const letterPositions = function(str) {
  const output = {};
  for (let i = 0; i < str.length; i++) {
    output[str[i]] = output[str[i]] || [];
    output[str[i]].push(i);
  }
  return output;
};

module.exports = letterPositions;