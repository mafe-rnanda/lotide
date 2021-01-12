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


//return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a falsy value.
const takeUntil = function(array, callBack) {
  let newArr = [];
  for (const item of array) {
    //console.log(callBack(item))
    if (!callBack(item)) {
      newArr.push(item);
      
    } else {
      break;
    }
  }
  return newArr;
};

///////// TEST CODE /////////
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1); //[ 1, 2, 5, 7, 2 ]

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]; // [ 'I\'ve', 'been', 'to', 'Hollywood' ]
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

module.exports = takeUntil;