"use strict";

$(document).ready(function() {
    alert('Javescript page is ready')
    // INSERT JAVASCRIPT CODE SAMPLE HERE

});


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



$('h1').click(function (){
    $(this).css('background-color', 'red');
});

$('p').dblclick(function (){
    $('p').css('font-size', '18px');
});

$('li').hover(function (){
    $(this).css('color', 'red')
},
    function (){
        $(this).css('color', 'black');
})

var funColor = document.getElementById('item');
funColor.addEventListener()