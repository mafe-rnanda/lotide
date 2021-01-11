// Do not remove
const assert = require('chai').assert;
const tail = require('../tail')

describe("returns everything except for the first item (head) of the provided array", () => {
  it("should return en empty array for arrays with one element", () => {
    assert.deepEqual(tail(["word"]), []);
  });
  it("should return en empty array when an empty array is input", () => {
    assert.deepEqual(tail([]), []);
  });
  it("should return ['book', 'pen'] for ['word', 'book', 'pen']", () => {
    assert.deepEqual(tail(["word", "book", "pen"]), ["book", "pen"]);
  });
});