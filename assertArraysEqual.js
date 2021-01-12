const eqArrays = require('./eqArrays');

//take in two arrays and console.log an appropriate message to the console
const assertArraysEqual = function(actual, expected) {
  return eqArrays(actual, expected)
    ? `✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑 Assertion Failed: ${actual} !== ${expected}`;

};

module.exports = assertArraysEqual;