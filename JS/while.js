'use strict'

console.log('hi')
// var x = 2;
// while(true) {
//     alert('number double');
//     x = x + x;
//     if(x === 2) {
//     if(x === 65536){
//
//     }
//     }
// // }

// Do While Loop
// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random ' +
// 'number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop ' +
// 'your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her ' +
// 'clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the ' +
// 'random numbers for this exercise.

// var min = 50;
// var max =100;
// var customerCones(x);

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;

// var number =  function randomNum(min, max) {
//     return Math.random() * (randommax - min + 1))
// var number;

// } do (x = 5; x - customerCones; x++ ){
//     x++;
//     console.log(number 'how many cones do you want?')
//     while {
//
//     }
// }

do {
    alert('There are' + allCones + ' cones left.');
    var userInput = prompt('Input a number');
    // Or allCones = allCone-userInput
    if (allCones < userInput) {
        alert('We don\'t have that many cones left.');
        continue;
    }
    allCones -= userInput;

} while (allCones > 0);
alert('ALL DONE!');