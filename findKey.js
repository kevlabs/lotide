const findKey = function(obj, cb) {

  for (const key of Object.keys(obj)) {
    if (cb(obj[key])) return key;
  }

  //return undefined cb not satisfied
  return undefined;

};

module.exports = findKey;