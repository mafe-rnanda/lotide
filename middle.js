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

// const assertArraysEqual = function(actual, expected) {
//   return eqArrays(actual, expected) ? `✅ Assertion Passed: ${actual} === ${expected}` : `🛑 Assertion Failed: ${actual} !== ${expected}`
// };

//take in an array and return the middle-most element(s) of the given array.
//return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.
const middle = function (array) {
  let middleIndex = [];
  //identify array's length and
  //if array has one or two elements, return empty array
  if (array.length <= 2) {
    middleIndex = [];
    //if array has odd number of elements return single middle %2 === 0 > false > length / 2
  } else if (array.length % 2 !== 0) {
    middleIndex = [array[Math.round(array.length / 2) - 1]];
    //if array has even number of elements return 2 elements from middle %2 === 0 > true > length / 2 + 1
  } else if (array.length % 2 === 0) {
    // const middleOne = array[Math.round((array.length / 2) - 1)]
    // const middleTwo = array[Math.round(array.length / 2)]
    middleIndex = [
      array[Math.round(array.length / 2 - 1)],
      array[Math.round(array.length / 2)],
    ];
  }
  return middleIndex; 
};

//TEST CODE
//For arrays with one or two elements, there is no middle. Return an empty array.
middle([1]); // => []
middle([1, 2]); // => []

//For arrays with odd number of elements, an array containing a single middle element should be returned.
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

console.log(assertArraysEqual(middle([]), []));
console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));