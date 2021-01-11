// Do not remove
const assertEqual = require('../assertEqual');
const tail = require('../tail')

//////// TEST CODE ////////
assertEqual(tail(["word"]), []);
assertEqual(tail([]), []);
assertEqual(tail(["word", "book", "pen"]), ["book", "pen"]);
assertEqual(tail(["word", "pen", "book"]), ["pen"]);