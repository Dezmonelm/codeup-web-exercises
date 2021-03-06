(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    planets.unshift('The Sun');
    console.log(planets);
    alert(planets);
    // console.log('Adding "The Sun" to the beginning of the planets array.');
    // console.log(planets);

    planets.push('Pluto');
    console.log(planets);

    // console.log('Adding "Pluto" to the end of the planets array.');
    // console.log(planets);

    planets.shift([0]);
    console.log(planets);

    // console.log('Removing "The Sun" from the beginning of the planets array.');
    // console.log(planets);

    planets.pop(-1);
    console.log(planets);

    // console.log('Removing "Pluto" from the end of the planets array.');
    // console.log(planets);

    planets.indexOf(2);
    console.log('This is ' + planets[2]);

    // console.log('Finding and logging the index of "Earth" in the planets array.');

    planets.reverse();
    console.log(planets);

    // console.log("Reversing the order of the planets array.");
    // console.log(planets);

    planets.sort();
    console.log(planets);

    // console.log("Sorting the planets array.");
    // console.log(planets);
})();
