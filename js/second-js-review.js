"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

// Define a function named isANumber that takes in a value and returns true if the input is numeric or not. Numeric strings are not considered as numbers and should return false.
// function isANumber(value) {
//     if (value === null) {
//         return false;
//     } else if (typeof value === 'boolean') {
//         return false;
//     } else if (!isNaN(value)) {
//         return (true);
//     } else {
//         return false;
//     }
// }
function isANumber (stringVar) {
    return typeof(stringVar) == 'number';

}
// console.log(Number('42'));
//review answer
// function isANumber(input) {
//     return typeof input === 'number';
// }


// Define a function named increment that takes in an input and adds 1 to it if the input is numeric. If the input is not numeric, then return false.

// function increment(i) {
//     if (i++) {
//         return (i);
//     } else {
//         return i(false);
//     }
// }

// review answer
// function increment(input) {
//     if(isNaN(parseInt(input))) {
//         return false;
//     }
//     return ++input;
// }

function increment (input) {
    if (isANumber(input)) {
        return input + 1;
    } else {
        return false;
    }

}
// Define a function named decrement. If the provided input is numeric, the function should subtract 1 and return the result. If the input is not numeric, decrement should return false.

// function decrement(x) {
//     if (x--) {
//         return (x);
//     } else {
//         return x(false);
//     }
// }

// review answer
// function decrement (input) {
//     if(isNaN(parseInt(input))) {
//         return false;
//     }
//     return input - 1;
// }

function decrement (input) {
    if (isANumber(input)) {
        return input - 1;
    } else {
        return false;
    }

}
// Write a function named getHighestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number. If any of the 3 inputs is missing or non-numeric, then return false.

// function getHighestNumber(a, b, c) {
//     if (a >= b && a >= c) {
//         return a;
//     } else if (b >= a && b >= c) {
//         return b;
//     } else if (c >= a && c >= b) {
//         return c;
//     } else if (a, b, c = isNaN) {
//         return false;
//     } else {
//         return false;
//     }
// }

// review answer
// 


function getHighestNumber () {
    if(isANumber(a) && isANumber(b) && isANumber(c)) {
        return Math.max(a, b, c);
    } else {
        return false;
    }
}
// Define a function named parseNumber that parses (converts) a numeric String and returns it's value as a number, the function should be able to decide if it should be parsing an Integer or a Float value.

// function parseNumber(i) {
//     if (i !== isNaN) {
//         return parseInt(i);
//     } else if (i !== isNaN) {
//         return parseFloat(i);
//     } else if (i == parseFloat) {
//         return true;
//     } else if (i === i < 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// review answer
// function parseNumber(input) {
//     return parseFloat(input);
// }

function parseNumber (value) {
    var parseValue = parseFloat(value);
    if() {
        return parseFloat(value) {
    } else


    }
}
// Write a function named add that takes in two inputs. If both inputs provided are numeric, add will return the sum of both inputs. If one or both inputs is not numeric, add should return false.

// function add(a, b) {
//     // return a + b;
//     if (a !== isNaN || b !== isNaN) {
//         return a + b;
//     } else if(add()) {
//         return false;
//     }
// }

function add(a, b) {
    if(isNaN(parseInt(a)) || isNaN(parseInt(b))){
        return false;
    }

    return parseInt(a) + parseInt(b);
}

// Write a function named multiply that takes in two inputs. If both inputs provided are numeric, multiply returns the product of the first input multiplied by the second. If either or both inputs are not numeric, multiply should return false.

// Review answer
function multiply(a, b) {
    if(isNaN(parseInt(a)) || isNaN(parseInt(b))){
        return false;
    }

    return parseInt(a) * parseInt(b);
}

// Define a function named square. If the provided input is numeric, square should return the number multiplied by itself. If the input is not numeric, square, should return false.

// function square(input) {
//     if(input === !isNaN) {
//         return square(Math.sqrt(input));
//     } else {
//         return false;
//     }
// }

// review answer
function square(input) {
    if(isNaN(parseInt(input))) {
        return false;
    }
    return input * input;
}

// Write a function named sumOfSquares that takes in two inputs. If both inputs are numeric, sumOfSquares should square each input and return the sum of them added together. For example, if we pass a and b then we should square a and add it to the square of b. If either or both inputs are not numeric, sumOfSquares should return false.

// function sumOfSquares(a, b) {
//     if (square(a) + square(b)) {
//         return sumOfSquares;
//     } else {
//         return false;
//     }
// }

// review answer
function sumOfSquares(a, b) {
    var aSqr = square(a);
    var bSqr = square(b);

    return add(aSqr, bSqr);
}
// Write a function named isPalindrome that takes in a single input. If the input is a numeric string, then return false. If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is different forwards from backwards. Ignore capitalization.

// function isPalindrome(input) {
//     if(input == '') {
//         return true;
//     } else if (input == ''){
//         return input.split('').reverse().join('input');
//     } else {
//         return false;
//     }
// }

// review answer
// function isPalindrome(input) {
//     if(typeof input !== 'string') {
//         return false;
//     }
//     input = input.toLocaleUpperCase();
//
//     return input === input.split('').reverse().join('');
}