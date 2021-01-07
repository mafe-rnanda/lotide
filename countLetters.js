const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

//The function should take in a sentence (string) and then return a count of each of the letters in that sentence
//PSEUDOCODE
// create an empty object
//go through each index/letter of the string with a loop
// add a key for each indexed letter
// add += 1 to the key value of letter read
// return object

const countLetters = function(sentence) {
  let results = {};
  for (const letter of sentence) {
    //console.log(letter);
    if (letter !== " ") {
      //console.log('found a letter not a space');
       //console.log(results[letter]);
      if (results[letter]) {
        //console.log('this has a value')
        results[letter] += 1;
      } else {
        //console.log('this doesnt have a value')
        results[letter] = 1;
      }
    }    
  }
  return results;
};

//TEST CODE
console.log(countLetters("lighthouse"));
console.log(countLetters("week one")); 
console.log(countLetters("coding is hard"));

// console.log(assertEqual(countLetters("lighthouse"), {l:1 , i:1 , g:1 , h:2 , t:1 , o:1, u:1, s:1} ));
// console.log(assertEqual(countLetters("week one"), {w:1, e:3, k:1, o:1, n:1,})); 
// console.log(assertEqual(countLetters("malala"), {m:1, a:3, l:2,}));