//take in an array and return the middle-most element(s) of the given array.
//For arrays with one or two elements, there is no middle. Return an empty array.
//For arrays with odd number of elements, an array containing a single middle element should be returned.
//For arrays with an even number of elements, an array containing the two elements in the middle should be returned

const middle = function (array) {
  let middleIndex = [];
  //identify array's length and
  //if array has one or two elements, return empty array
  if (array.length <= 2) {
    middleIndex = [];
    //if array has odd number of elements return single middle %2 === 0 > false > length / 2
  } else if (array.length % 2 !== 0) {
    middleIndex = [array[Math.round(array.length / 2) - 1]];
    //if array has even number of elements return 2 elements from middle %2 === 0 > true > length / 2 + 1
  } else if (array.length % 2 === 0) {
    // const middleOne = array[Math.round((array.length / 2) - 1)]
    // const middleTwo = array[Math.round(array.length / 2)]
    middleIndex = [
      array[Math.round(array.length / 2 - 1)],
      array[Math.round(array.length / 2)],
    ];
  }
  return middleIndex;
};

module.exports = middle;
