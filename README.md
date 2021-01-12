# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mafe-rnanda/lotide`

**Require it:**

`const _ = require('@mafe-rnanda/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Retrieve the first element from the array
* `tail`: Returns the "tail" of an array. Everything except for the first item (head) of the provided array
* `middle`: Returns the middle-most element(s) of the given array
* `countLetters`: Takes in a sentence (as a string) and then return a count of each of the letters in that sentence
* `countOnly`: Returns an object containing counts of everything that the input object listed
* `findKey`: Returns the first key for which the callback returns a truthy value
* `findKeyByValue`: Scan an object and return the first key which contains the given value
* `letterPositions`: Return all the indices (zero-based positions) in the string where each character is found
* `map`: Returns an array of numbers that should be the length of each array element input
* `takeUntil`: Returns a slice of the array with elements taken from the beginning. It should keep going until the callback/predicate returns a falsy value
* `without`: Returns a new array with only those elements from source that are not present in the itemsToRemove (second argument of function) array
* `eqArrays`: Takes in two arrays and returns true or false, based on a perfect match
* `eqObjects`: Returns true if both objects have identical keys with identical values