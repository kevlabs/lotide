const countLetters = function(str) {
  const output = {};
  if (str) {
    for (const char of str) {
      if (char === ' ') continue;
      output[char] = output[char] || 0;
      output[char]++;
    }
  }
  return output;
};

module.exports = countLetters;