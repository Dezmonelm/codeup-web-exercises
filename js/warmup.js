function tellFortune (numberOfChildren, partnersName ,geographicLocation, jobTitle) {

    // var numberOfChildren = typeof num === 'number';
    // var partnersName = typeof aName === 'string';
    // var geographicLocation = typeof place === 'string';
    // var jobTitle = typeof workPlace === 'string';

    var output ='You will be a ' + jobTitle + ' in  ' + geographicLocation + ', and married to ' + partnersName + ' with ' + numberOfChildren + ' kids.';
    return output;
}