// Do not remove
const assertArraysEqual = require('../assertArraysEqual');


//////// TEST CODE ////////
assertArraysEqual([1, 2, 3], [1, 2, 3]); 
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); 
assertArraysEqual([1, 2, 3], [3, 2, 3]); 
assertArraysEqual([1, 2, 3], [1, 2, "3"]);