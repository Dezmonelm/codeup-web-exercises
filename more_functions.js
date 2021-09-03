'use strict'

console.log('Hello');



// Make a function called returnTwo() that returns the number 2 when called

function returnTwo(a, b) {
    var a = 1;
    var b = 1;
    return a + b;
}
console.log(returnTwo());

// Test this function with console.log(returnTwo())
//
//     Make a function called sayHowdy() which console.logs the string “Howdy!”

function sayHowdy () {
    return('Howdy');

}

//     Test this function by directly calling sayHowdy()

console.log(sayHowdy());

// Remember this function does not need a defined return value
//
// Make a function called returnName() that returns the string of your name
//
// Test this function with console.log(returnName())

    function returnName(name) {
        return ('You\'re Dezmone right?');
    }
    var name = '';
    console.log(returnName(name));


//     Make a function called addThree() which takes in a number input and returns the number plus 3.
//
// Test this function with console.log(addThree(5))

function addThree(num) {
    return (num + 3 )
}
console.log(addThree(num));
//     Make a function called sayString() which returns the string input passed in.
//
// Test this function with console.log(sayString('codeup'))

function sayString(input) {
    return(input)
}
console.log(sayString());

//     Challenge Function Drills
//
// Write a function called identity(input) that takes in an argument called input and returns that input.

function identity(input) {
    return (input);

}
console.log(identity());
//     Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.

function getRandomNUmber(min, max) {
    var min = Number;
    var max = NUmber;
    return Math.Random() * (max - min) + min;
}
console.log();


// Write a function called first(input) that returns the first character in the provided string.
//
function first(input) {
    return(first.charAt());
}
console.log(first);
//     Write a function called last(input) that returns the last character of a string

function last (input) {
    return last.charAt(last.length(input)-1);
}
console.log(last);

// Write a function called rest(input) that returns everything but the first character of a string.

function rest (input) {
    return rest.slice();
}
console.log(rest);

//     Write a function called reverse(input) that takes a string and returns it reversed.

function reverse (input) {
    return input.splice('').reverse.join('');
}
console.log(reverse);
//     Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.

function isNumeric(input) {
    return input === 'number';
}

console.log(isNumeric);

//     Write a function called count(input) that takes in a string and returns the number of characters.

function count(input) {
    return input.length;
}

console.log(couunt);
//     Write a function called add(a, b) that returns the sum of a and b

function add (a, b) {
    return a + b;
}

console.log(add);
// Write a function called subtract(a, b) that return the difference between the two inputs.

subtract (a, b) {
    return a - b;
}
console.log(subtract);

//     Write multiply(a, b) function that returns the product

function multiply (a, b) {
    return a * b;
}
console.log(multiply)
// Write a divide(numerator, denominator) function that returns a divided by b
//
// Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
//
// Write the function square(a) that takes in a number and returns the number multiplied by itself.
//
//     Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
//
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
