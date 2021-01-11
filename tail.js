//const assertEqual = require('../assertEqual');

const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};

// Do not remove
module.exports = tail;