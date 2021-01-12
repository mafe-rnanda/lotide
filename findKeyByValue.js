const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

//scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined
const findKeyByValue = function(obj, value) {
  for (let key in obj) {
    //console.log(key)
    const keyValue = obj[key];
    //console.log(key, value);
    if (keyValue === value) {
      return key;
    }
  }
};

/////// TEST CODE ////////
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));

module.exports = findKeyByValue;