

console.log('Hello');



// Make a function called returnTwo() that returns the number 2 when called

function returnTwo(a, b) {

    return a + b;
}
var a = 'number';
var b = 'number';
console.log(returnTwo(a, b));

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
        // var name = name.toString();
        return 'You\'re '  + name + ' right?';

    }

    console.log(returnName(name));


//     Make a function called addThree() which takes in a number input and returns the number plus 3.
//
// Test this function with console.log(addThree(5))

function addThree(input) {
    return input + 3;
}
// console.log(addThree());
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

    return parseInt(Math.random() * (max - min) + min);
}
// var min = prompt('give a number')
// var max = prompt('give a number')
//
// console.log(getRandomNUmber(min, max));


// Write a function called first(input) that returns the first character in the provided string.
//
// function first(input) {
//     return input = {0};
// }
// console.log();
//     Write a function called last(input) that returns the last character of a string
//
// Write a function called rest(input) that returns everything but the first character of a string.
//
//     Write a function called reverse(input) that takes a string and returns it reversed.
//
//     Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
//
//     Write a function called count(input) that takes in a string and returns the number of characters.
//
//     Write a function called add(a, b) that returns the sum of a and b
//
// Write a function called subtract(a, b) that return the difference between the two inputs.
//
//     Write multiply(a, b) function that returns the product
//
// Write a divide(numerator, denominator) function that returns a divided by b
//
// Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
//
// Write the function square(a) that takes in a number and returns the number multiplied by itself.
//
//     Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
//
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
function doMath(operator, a, b) {
    return
}