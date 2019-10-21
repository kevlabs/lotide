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

* `head(array: array)`: retrieves the first element of an array
* `middle(array: array)`: returns the middle element(s) of an array
* `tail(array: array)`: returns every element in an array past its head
* `assertEqual(val1: any, val2: any)`: prints to the console whether or not two values are strictly equal
* `eqArrays(array: array)`: returns true if two arrays have the same structure (order + values)
* `assertArraysEqual(val1: array, val2: array)`: prints to the console whether or not two arrays are equal according to eqArrays
* `eqObjects(object: any)`: returns true if two objects have the same structure (keys + values)
* `assertObjectsEqual(val1: any, val2: any)`: prints to the console whether or not two objects are equal according to eqObjects