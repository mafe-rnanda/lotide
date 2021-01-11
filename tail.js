// returns the "tail" of an array: everything except for the first item (head) of the provided array
const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};

// Do not remove
module.exports = tail;