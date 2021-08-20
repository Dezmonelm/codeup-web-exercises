console.log('hello');

(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['Dezmone', 'Kristy', 'Stven', 'Heather'];
    console.log(names + " Names array");

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    // parans DO NOT GO EVERYWHERE!
    //    Slow down and make sure your variable are clearly assigned
        //    P.S. thank you concole.log()

    var numberOfNames = names.length;
    console.log(numberOfNames);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    // variable names needs to be consoled.
    // Array brackets do not function unless they are called witih a variable.

    console.log(names[0] + ' is at first')
    console.log(names[1] + ' is at second')
    console.log(names[2] + ' is at third')
    console.log(names[3] + ' is at fourth')


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
console.log('----------');
   
    // ok listen....i.....is a variable and it must be defined before assigned
   
    for(var i = 0; i < names.length; i++) {
        console.log([i] + ' is ' + names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
console.log('-------'),

    names.forEach(function (x) {
        console.log(x);
    });
    
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
console.log('------');


    function first(num) {
        return num[0];

    }

    console.log(first([1,2,3,4,5]));
    console.log(first(names));

    function second(num) {
        return num[1];
    }

    console.log(second([1,2,3,4,5]));
    console.log(second(names))

    function last(num) {
        return num[num.length-1];
    }
    console.log(last([1,2,3,4,5]));
    console.log(last(names))





})();
