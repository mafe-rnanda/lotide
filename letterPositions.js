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

// return all the indices (zero-based positions) in the string where each character is found
const letterPositions = function (sentence) {
  const results = {};
  let counter = 0;
  for (const letter of sentence) {
    //console.log(letter);
    if (letter !== " ") {
      // using if when running letter first time
      if (!results[letter]) {
        results[letter] = [];
        results[letter].push(sentence.indexOf(letter));
      } else {
        let positions = results[letter];
        results[letter].push(sentence.indexOf(letter, counter));
      }
    }
    counter += 1;
  }
  return results;
};

////// TEST CODE ////////
// console.log(letterPositions('lll'));
// console.log(letterPositions('hello world'));
// console.log(assertArraysEqual(letterPositions('lll'), {l:[0, 1, 2]}));

module.exports = letterPositions;
