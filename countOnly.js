const assertEqual = function(actual, expected) {
  let output = '';
  if (actual === expected) {
    output = `\x1b[32m✅Assertion Passed: ${actual} === ${expected}\x1b[0m`;
  } else {
    output = `\x1b[31m❗️️️Assertion Failed: ${actual} !== ${expected}\x1b[0m`;
  }
  console.log(output);
  
};
//short version
const countOnly2 = function(allItems, itemsToCount) {
  return Object.keys(itemsToCount).reduce((output, key) => {
    //assign new key property to count object if value set to true
    return itemsToCount[key] ? Object.assign(output, {[key]: allItems.filter(str => key === str).length}) : output;
  }, {});
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (!Object.keys(itemsToCount).includes(item) || !itemsToCount[item]) continue;
    results[item] = results[item] || 0;
    results[item]++;
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);