const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(obj1, obj2) {
  //check if the keys from each object are of the same lenght if not, return false
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    // if they are, then loop through each key in object 1
    for (const key in obj1) {
      //check if the key value of object 1 is not the same as the key value of key 2
      if ((obj1[key]) !== (obj2[key])) {
        return false;
      } else {
        return true;
      }
    }
  }
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// console.log(assertEqual(eqObjects(ab, ba), true ))
// console.log(assertEqual(eqObjects(ab, abc), false ))

const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false