const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

//return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = function (obj, callback) {
  for (const key in obj) {
    const objValue = obj[key];
    if (callback(objValue)) {
      return key;
    }
  }
};

////// TEST CODE //////
// const result = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2) // => "noma"

// console.log(assertEqual(result, "noma"));

module.exports = findKey;
