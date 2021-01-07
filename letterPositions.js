const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function (actual, expected) {
  return eqArrays(actual, expected)
    ? `✅ Assertion Passed: ${actual} === ${expected}`
    : `🛑 Assertion Failed: ${actual} !== ${expected}`;

};


// return all the indices (zero-based positions) in the string where each character is found
// const letterPositions = function(sentence) {
//   const results = {};
//   for (const letter of sentence) {
//     //console.log(letter);
//    if (letter !== " ") {
//     // using if when running letter first time
//     if (!results[letter]) {
//       results[letter] = [];
//       results[letter].push(sentence.indexOf(letter))
//     } else {
//       let positions = results[letter];
//       // para sacar el ultimo index de mi array tengo que saber primero cuantos elements tengo y sacar el index del array sustrayendo 1;
//       let latestOccurrence = positions[positions.length - 1]; 
//       //console.log(positions);
//       results[letter].push(sentence.indexOf(letter, latestOccurrence + 1));
//     }
//   }
// }
//   return results;
// };

const letterPositions2 = function(sentence) {
  const results = {};
  let counter = 0;
  for (const letter of sentence) {
    //console.log(letter);
   if (letter !== " ") {
    // using if when running letter first time
    if (!results[letter]) {
      results[letter] = [];
      results[letter].push(sentence.indexOf(letter))
    } else {
      let positions = results[letter];
      results[letter].push(sentence.indexOf(letter, counter));
    }
  }
  counter += 1;
}
  return results;
};


//indexOf()

//TEST CODE
console.log(letterPositions2('lll'));
console.log(letterPositions2('hello world'));

console.log(assertArraysEqual(letterPositions2('lll'), {l:[0, 1, 2]}));
