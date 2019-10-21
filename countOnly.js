const countOnly = function(allItems, itemsToCount) {
  return Object.keys(itemsToCount).reduce((output, key) => {
    //assign new key property to count object if value set to true
    return itemsToCount[key] ? Object.assign(output, {[key]: allItems.filter(str => key === str).length}) : output;
  }, {});
};

module.exports = countOnly;