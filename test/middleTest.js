const assert = require('chai').assert;
const middle = require('../middle');

describe("return the middle-most element(s) of the given array", () => {
  it("should return en empty array if array is empty", () => {
    assert.deepEqual(middle([]), []);
  });
  it("should return en empty array for arrays with one element", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("should return en empty array for arrays with two element", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should return [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});