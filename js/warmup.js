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