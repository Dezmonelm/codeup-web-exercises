'use strict'
//
// console.log('Hellos there!');
//
function showMultiplicationTable(num) {
    console.log('Here is the Multiplacation Table ')
    for (var i = 1; i <= 10; i++) {

        console.log(num = 'x' + i + ' = ' + num * 1);
    }
}

// function showMultiplicationTable(){
// var number = prompt('enter a number: ');
// console.log('multiples' + number);
//
// for(var i = 1; i <= 10; i++) {
//     var result = i * number;
//     console.log('Multiplication Table' + result)
// }
// }
//     }
// }
// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to
// the console whether each number is odd or even. For example:

for (var num = 0; num < 10; num++) {
    var randomNumber = Math.floor(Math.random() * 180) + 20
    if(randomNumber % 2 === 0) {
        console.log(randomNumber + ' is even');
    } else {
        console.log(randomNumber + " is odd.");
    }

}


// // Create a for loop that uses console.log to create the output shown below.
//
// for (var i =100; i < 100; i - 5);
//     while(i = 100 ) {
//         console.log('fives' + i)
//     }
console.log();
