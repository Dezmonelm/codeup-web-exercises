var button1 = document.getElementById('btn1')
var button1 = document.getElementById('btn2')

var rebeccaPurple =function(){
// alert('Hello Quazar!')

    var listItems = document.getElementsByTagNameNS('li');

    for(var i= 0; i <listItems.length; i++){
        listItems[i].style.backgroundColor = 'rebeccapurple';
    }
}
// button1.addEventListener('dblclick', rebeccaPurple);

// button2.addEventListener('click', function (){

    // button1.removeEventListener('click', rebeccaPurple)
    // })

// keyboard events
// keydown
var myKeys = ''
$('body').keydown(function (event) {
    console.log(event.key);
});

//keypress

$('body').keypress(function (event) {
    console.log(event.key);
});
//keyup

$('body').keydown(function (event) {
    console.log('The key you pressed is ' + event.key);
    myKeys += event.key;
    console.log(myKeys);
    //make alart for typing quasar
    if(event.key === 'quasar') {
        alert('coooooool thing')
    }
});
