const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === expected`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== expected`);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Maria", "MARIA");
// assertEqual(19, 1);
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual("hello", 1);
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(10, 10);


const head = function(array) {
  return array[0];
};

//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello"]), "Bye");
assertEqual(head([]), "Bye");