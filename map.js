const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  return eqArrays(actual, expected)
    ? `✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑 Assertion Failed: ${actual} !== ${expected}`;

};


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

///////// TEST CODE //////////
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// console.log(results1);

// const myCallBackExpression = word => word[0];
// console.log(assertArraysEqual(map(["good", "morning"],myCallBackExpression),["g", "m"]))
// console.log(assertArraysEqual(map(["buenos", "dias"], myCallBackExpression),["b", "d"]))
// console.log(assertArraysEqual(map(["bonjour", "madame"], word => word[0]),["x", "x"]))

module.exports = map;