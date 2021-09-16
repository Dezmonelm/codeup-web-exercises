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