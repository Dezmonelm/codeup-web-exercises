'use strict';
// Generate a Personal Access Token for the GitHub API.
//
//     We will use this so that we don't get rate limited when talking to the GitHub API. You can add the token to your requests like this:
fetch('https://api.github.com/users/jackiedallas/events', {headers: {'Authorization': gitHubAPI}})
    .then((response) => response.json())
    .then((jsonData)=>{console.log(jsonData[0])
        console.log(jsonData[0].created_at)
        console.log(jsonData[0].payload.commits)
        let result = {
        date : jsonData[0].created_at,
        commits : jsonData[0].payload.commits
    };
        console.log(result);
        return result;
    })
    .then((results)=>{
        console.log(results)
        document.getElementById('date').innerHTML = results.date;
    })

function wait(num) {
    return new Promise((response, reject)=>{
        console.log(response)})
    wait(1000).then((num) => console.log('You\'ll see this after 1 second'));
    wait(3000).then((num) => console.log('You\'ll see this after 3 seconds'));
}
console.log(wait())