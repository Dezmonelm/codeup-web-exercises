"use strict";

/* ########################################################################## */
console.log('Hi');

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// var analyzeColor = true;
// console.log(analyzeColor)
function analyzeColor(input) {
    alert('The color is ' + input);
    if (input === 'blue') {
        console.log('blue is the color of the sky')

    } else if (input === 'cyan') {
        console.log('cyan is the color chosen')
    } else if (input === 'red') {
        console.log('the ball is red')
    } else {
        console.log('This is not blue, red, or cyan');
    }
}

// console.log(!analyzeColor 'not a color defined');
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// analyzeColor(randomColor);
//     console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
var colors = prompt('What is the color?')
switch (colors) {
    case 'red':
        alert('the color is ' + colors);
        break;
    case 'orange':
        alert('the color is ' + colors);
        break;
    case 'yellow':
        alert('the color is ' + colors);
        break;
    case 'blue':
        alert('the color is ' + colors);
        break;
    case 'green':
        alert('the color is ' + colors);
        break;
    case 'indigo':
        alert('the color is ' + colors)
        break;
    case 'purple':
        alert('the color is ' + colors)
        break;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userInput;

function userInput(input) {
    prompt('What color would you like? ' + analyzeColor(userInput));
    return userInput;
    alert(userInput + ' is what you get!');
}

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// var promo = custNum(Math.random('LUCKY NUMBER ' x <= 5 '!'));
// var luckyNumber = custNum;
//     if { luckyNumber === 0;
//     alert('L')
//     } ele if {

// }

function calculateTotal(luckyNumber, totalNum) {
    switch (luckyNumber) {
        case 0:
            alert('No discount')
            return totalNum
            break;
        case 1:
            alert('10% discount');
            return totalNum * (10 / 100);
            break;
        case 2:
            alert('25% discount');
            return totalNum * (25 / 100);
            break;
        case 3:
            alert('35% discount');
            return totalNum * (35 / 100);
            break;
        case 4:
            alert('50% discount');
            return totalNum * (50 / 100);
            break;
        case 5:
            alert('IT\'S ALL FREE!');
            return totalNum * (0 / 100);
            break;
    }
}

console.log(calculateTotal(1, 100));
console.log(calculateTotal(2, 100));
console.log(calculateTotal(3, 100));
console.log(calculateTotal(4, 100));
console.log(calculateTotal(5 / 100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 //  */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// var userInput = prompt('How much is your bill? ')
// alert('What\'s your lucky number' + userInput)
// Alert('' + )
// // alert(luckyNumber' is your lucky number:' ';' userInput ': is your bill');
// alert(calculateTotal())

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function lastOne() {
    var yesOk = confirm('What number would you like to enter?');
    if (yesOk === true) {
        var userNumber = prompt('enter number');
        if (isNaN(userNumber) === true) {

        }
    }
    return 'function';
}

// var userInput = num;
// alert(num %= 0 'Even number');
// alert(num === 100 'Positive number');
// alert(num = true);