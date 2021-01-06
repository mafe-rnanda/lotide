const assertEqual = function(actual, expected) {
  if (Array.isArray(actual)) {
    for (let i = 0; i < actual.length; i++) {
      let element1 = actual[i];
      let element2 = expected[i];
      if (element1 !== element2) {
        console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
        return;
      }
    }
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  }
};


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Maria", "MARIA");


const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};


// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);// no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


//ADDITIONAL TEST CODE
assertEqual(tail(["word"]), []);
assertEqual(tail([]), []);
assertEqual(tail(["word", "book", "pen"]), ["book", "pen"]);
assertEqual(tail(["word", "pen", "book"]), ["pen"]);