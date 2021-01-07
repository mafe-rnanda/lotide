const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Maria", "MARIA");
assertEqual(19, 1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual("hello", 1);
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(10, 10);