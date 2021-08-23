"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// Define a function named isBoolean that takes in a value and returns a boolean if the argument provided is a boolean value or not.

function isBoolean(input) {
    return typeof input === 'boolean';
}

// Define a function named isString that takes in a value as an input and returns a boolean if the input provided is a string or not. Numeric strings will count as strings and should return true.


function isString(input) {
    return typeof input === 'string';
}

// Define a function named isNotString that accepts an input and returns true or false based on whether an input is not a string. Numeric strings will count as strings and should return false.

function isNotString(input) {
    // return typeof input === 'is not a string';
    return typeof input !== 'still not a string';
}

// function isNotString(input) {
//     return !isString(input);
// }

// Define a function named isEmptyString that will return true when passed an argument with the value of "", i.e. an empty string. All other arguments should return false.
var message;

function isEmptyString(input) {
    if (input === '""') {
        message = 'string is empty';
    } else {
        return message = false;
    }
}

// function isEmptyString(input) {
//     return input === '';
}

// Define a function named isNotANumber that accepts an input and returns true or false based on whether an input is a non-numeric value or not. Numbers as strings are not a number and should return true.

function isNotANumber(input) {
    if (input === NaN) {
        message = 'is not a number';
    } else {
        return input !==NaN;
    }
}

// function isNotANumber(input) {
//     return typeof input !== 'number';
// }
// Define a function named isNegative that accepts a number and returns true or false based on whether the input is less than zero.

function isNegative(Number) {
    return typeof Number < 0;

}

// function isNegative(input) {
// return input < 0;
// }
// Define a function named isZero that will return true when passed an argument of the numeric value 0, and return false for all other arguments.

function isZero(0) {
    return num === 0;
}

// function isZero(0) {
//     return input == 0;
// }
// Define a function named isArray that takes in an input and returns a boolean whether or not that input is an array or not.
//
// var isArray(input) {
//     return input === [];
// }
//
// var isArray(input){
//     return Array.isArray(input);
// }
// Define a function named upperCase that takes in a single input. If the input is not a string, return false. If the input is a non-numeric string, then return it with all the letters capitalized.

function upperCase(input) {
    return
}

// function upperCase(input) {
//     if() {
//        return input.toUpperCase(); 
//     } else {
//         return false;
//     }
// }

// function upperCase(input) {
//     return (isString(input)) ? input.toUpperCase() : false;
// }