(function() {
    console.log('Welcome to functions!');

//Define named function
    function sayHello() {
        console.log('Hello!');
    }

    console.log('In the file after creating the sayHello function.');

    sayHello();

//Define anonymous function
    var sayHowdy = function () {
        console.log('Howdy');
    }

    sayHowdy();


// Arguments and Parameters
//These pass data through functions
    function add(x, y) {
        return x + y;
    }

    console.log('add(2,3) ' + add(2, 3));

    function subtract(x, y) {
        return x - y;
    }


// Scope
    var instructor = 'Douglas';
    var day = 'Friday';

    function tellTheDay() {
        return 'Tell ' + instructor + 'it is ' + day + '!';
    }

    function greeting() {
        var username = 'Kenneth';
        return 'Hi, ' + username;
    }

    console.log(greeting());
    // console.log(username);

    function checkDay() {
        var day = 'Monday';
        return day;
    }

    console.log('it is ' + checkDay());

})();