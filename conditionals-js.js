// var isSunny = true;
//
// if (isSunny) {
// //    do dome stuff
//     alert('Don\'t forget some sunscreen!');
// } else {
//     alert('Good - too much sun can cause some issues as you get older');
// }

// Adong in else-if:

// var isSunny = 'hurricane';
//
// if (isSunny) {
// //    do dome stuff
//     alert('Don\'t forget some sunscreen!');
// } else if(!isSunny){
//     alert('Good - too much sun can cause some issues as you get older');
// } else {
//     alert('something');
//
// }

if(false) {
    console.log('it is a sunny day outside');
} else {
    console.log('It is not a sunny day outside');
}

// Rewrite as a ternary
var isSunny = 'sunny';

(false) ? console.log('it is a sunny day outside') : console.log('It is not a sunny day outside');

var pizzaPreference = prompt("What kind of pizza do you like?");

//switch

switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break;
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
    default:
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}