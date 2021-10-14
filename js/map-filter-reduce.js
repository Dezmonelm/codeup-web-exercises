const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
//     Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let threeOrMoreLanguages = users.filter(function (person) {
    return person.languages.length >= 3;
});

// let threeOrMoreLangauges = users.filter((person) => user.languages.length > 2)
//
// console.log(threeOrMoreLangauges);

//     Use .map to create an array of strings where each element is a user's email address

// let usersEmail = users.map(function (address) {
//     return address.email;
// });

let usersEmail = users.map((address) => address.email);
console.log(usersEmail);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let sumOfExperience = users.reduce(function (sumYears, userYears) {
    return sumYears + userYears.yearsOfExperience;
}, 0);

let sumAverage = sumOfExperience / users.length;
console.log(sumOfExperience);
console.log(sumAverage);

//     Use .reduce to get the longest email from the list of users.

let longestEmail = usersEmail.reduce(function (longest, mail) {

    return longest.length > mail.length ? longest : mail;
});
// console.log(longest);
console.log(longestEmail);

// let longestEmail = users.reduce(function (email1, email2) {
//     return email1.email.length > email2.email.length ? email1 : email2;
// });

//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// let usersStingNames = users.reduce(function (stringNames, userNames,index) {
//     if(index != users.length - 1){
//         return stringNames + userNames.name + (', ');
//     }
//     return stringNames + userNames.name + ('. ');
// }, 'Instructors: ');
// console.log(usersStingNames);

let namestring = users.map(function (user) {
    return user.name;
}).join(', ');
console.log(namestring);

// Use .reduce to get the unique list of languages from the list of users.

let uniqueLanguage = users.reduce(function (langList, userList) {
    return langList.users.languages
});

console.log(uniqueLanguage);