const eqArrays = function(arr1,arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  } else {
    for(let i = 0; i < arr1.length; i++) {
      if(arr1[i] !== arr2[i]) {
        return false
      } 
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  eqArrays(actual, expected) ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`)
};

//function should return a new array with only those elements from source that are not present in the itemsToRemove array.
const without = function(source, itemsToRemove) {
  let newArr = [...source];
  for (let i = 0; i < itemsToRemove.length; i++) {
    const elem = itemsToRemove[i];
    const elemFound = newArr.indexOf(elem);
    if (elemFound >= 0) {
      newArr.splice(elemFound, 1);
    }
  }
  return newArr;
};

//////// TEST CODE /////////
// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]


// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;