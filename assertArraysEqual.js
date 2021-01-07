// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === expected`);
//   } else {
//     console.log(`🛑 Assertion Failed: ${actual} !== expected`);
//   }

// };

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

const assertArraysEqual = function (actual, expected) {
  return eqArrays(actual, expected)
    ? `✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑 Assertion Failed: ${actual} !== ${expected}`;

};

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); // =>should FAIL
assertArraysEqual([1, 2, 3], [3, 2, 3]); // =>should FAIL
assertArraysEqual([1, 2, 3], [1, 2, "3"]); // => should FAIL
