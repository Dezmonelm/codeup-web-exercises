"use strict";

// $(document).ready(function() {
//     alert('Javescript page is ready')
//     // INSERT JAVASCRIPT CODE SAMPLE HERE
//
// });


// var test = $('#item').html();
// alert(test);
//
// test = $('#stuff').html();
// alert(test);
//
//
// $('.codeup').css('border', '1px solid red');
//
// $('li').css('font-size', '20px');
//
// $('h1').css('background-color', 'yellow');
// $('p').css('background-color', 'yellow');
// $('li').css('background-color', 'yellow');
//
// $('p', 'h1', 'li').css('color', 'orange')



// $('h1').click(function (){
//     $(this).css('background-color', 'red');
// });
//
// $('p').dblclick(function (){
//     $('p').css('font-size', '18px');
// });
//
// $('li').hover(function (){
//     $(this).css('color', 'red')
// },
//     function (){
//         $(this).css('color', 'black');
// })



var sound = new audio('audio/')
//use the variable tp target sound
var sliceImg = 

$(document).ready(function() {
    var userInput = prompt('You have to follow directions! Do you understand? (yes/no)')
    userInput = userInput.toLowerCase();
    var explode = $('button');
    console.log(userInput);
    if(userInput === 'yes') {
        // add sound
        alert('Let\'s begin!')
        explode.click(function () {
            $('command1').css('color', 'green');
        });

        console.log('make a sound');
    }
        else {
        // add action
        console.log('explode');
        explode.click(function () {
            $('.fw-bold').css('color', 'red')
        })
    }

});


