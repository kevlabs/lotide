# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kevlabs/lotide`

**Require it:**

`const _ = require('@kevlabs/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array: array)`: retrieves the first element of an array.
* `middle(array: array)`: returns the middle element(s) of an array.
* `tail(array: array)`: returns every element in an array past its head.
* `assertEqual(val1: any, val2: any)`: prints to the console whether or not two values are strictly equal.
* `eqArrays(arr1: array, arr2: array)`: returns true if two arrays have the same structure (order + values).
* `assertArraysEqual(val1: array, val2: array)`: prints to the console whether or not two arrays are equal according to eqArrays.
* `eqObjects(obj1: any, obj2: any)`: returns true if two objects have the same structure (keys + values)
* `assertObjectsEqual(val1: any, val2: any)`: prints to the console whether or not two objects are equal according to eqObjects.
* `findKey(source: object, callback: function)`: returns the first key for which the callback returns a truthy value or undefined if no key is found.
* `findKeyByValue(source: array, value: any)`: returns the first key which contains the given value or undefined if no key with that given value is found.
* `takeUntil(source: array, callback: function)`: returns a new array with all elements taken from the beginning until the callback returns a truthy value.
* `countOnly(source: array, value: string)`: returns the number of occurences of the given value in the supplied array.
* `countLetters(string)`: returns an object which keys represent letters found in the string and values the # of occurences of said letters.
* `letterPositions(string)`: returs an object with all the indices (zero-based positions) in the string where each character is found.
* `flatten(source: array)`: flattens an array of depth 1. Returns a new array.
* `map(source: array, callback: function)`: returns a new array of the same length with each array element equal to the return value of the callback function.
* `without(source: array, exclude: array)`: return a new array with only those elements from source that are not present in the exclude array.