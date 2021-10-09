function tellFortune (numberOfChildren, partnersName ,geographicLocation, jobTitle) {

    // var numberOfChildren = typeof num === 'number';
    // var partnersName = typeof aName === 'string';
    // var geographicLocation = typeof place === 'string';
    // var jobTitle = typeof workPlace === 'string';

    var output ='You will be a ' + jobTitle + ' in  ' + geographicLocation + ', and married to ' + partnersName + ' with ' + numberOfChildren + ' kids.';
    return output;
}

function calculateDogAge(puppyAge, conversionNum) {
    var humanAge = puppyAge * conversionNum;
    // console.log(humanAge);
    return 'hello there! This little doggy is ' + humanAge;
}

// Taco Tuesday
// array of strings that orders food
//function named tacoTuesday that returns TRUE with the word 'taco' and false if not

// var notTacos = []
var tacoTypes = ['Seafood taco', 'Veggie taco', 'beef taco', 'Chicken taco', 'Steak taco']
// function tacoTuesday (input) {
//     if(tacoTypes)
//     return true;
// } else {
//     return false;
// }

function tacoTuesday (arr) {
    for(var i = 0; i < arr.length; i++) {

        if(arr[i].includes('taco')) {
            return true;
        }
    }
    return false;
}


// Write a function named whatAWednesday that takes in an array of strings representing sandwiches ordered - it’s a busy Wednesday, so we’re getting in tons of orders for burgers and chicken like so:
//     var customer1Order = [“what-a-burger”, “what-a-burger”, “what-a-chicken”, “what-a-chicken”];
// var customer2Order = [“what-a-burger”, “fries”, “what-a-burger”]
// whatAWednesday should return to me a formatted string that counts the number of burgers and chicken sandwiches respectively and lets me know if that order had any chicken in it.
// whatAWednesday(customer1Order) // “Your order included chicken sandwiches, so we’re getting those made for you! You ordered a total of 2 burgers and 2 chicken sandwiches.”
// whatAWednesday(customer2Order) // “Your order did not include any chicken sandwiches - salright, our burgers are cooked fresh too! You ordered a total of 2 burgers.”
// Happy coding and have a good rest of your day!


// this is BOM
//TODO: Finish coding this program. You need to stop the setInterval() method after the showTime() function has run five times


// let count = 0;
//
// function showTime() {
//
//     // return new date and time
//     let dateTime = new Date();
//
//     // return the time
//     let time = dateTime.toLocaleTimeString();
//
//     count += 1;
//
//     //if the count reaches 5, stop the program.
// if(count >= 5){
//     clearInterval(display)
// }
//     console.log(time)
// }
//
// let display = setInterval(showTime, 5000);
//
// function greet() {
//  console.log('Hello World!');
// }
// var delayedGreeting =window.setTimeout(greet, 3000);
//
// window.clearTimeout(delayedGreeting);

//    BOM DONE!

//function named logEvens
//passes arument to print only even numbers
// console.log()

// function logEvens (x) {
//     if(x % 2 == 0) {
//         console.log(true);
//
//     } else {
//         console.log(false);
//
//     }
// }

function logEvens (input) {
    for (var x = 0; x <= input; x++) {
        if(x % 2 === 0) {
            console.log(x);
        }

    }
}

//function named logNum()
//accepts up to a number
//function tells whether num is even or odd

function logNuM(input) {
    for(var x = 1; x <= input; x++) {
        if(x % 2 === 0) {
            console.log(x + ' even');
        } else if (x % 2 !== 0){
            console.log(x + ' odd');
        }
    }
    console.log(x)
}

// Create html with a paragrah with some words in it.
// Bring in jquery to
$(document).ready(function () {

    // When: clicked
    $('p').click(function (event) {
        event.preventDefault();
        console.log(event);

        // You see: alert
        // MINE:
        // alert('I think I did it...');
        // console.log(alert);

        // You see: alert <p>
        // Kenneth:
        alert($(this).text());
    });

});

//