'use strict';
// Generate a Personal Access Token for the GitHub API.
//
//     We will use this so that we don't get rate limited when talking to the GitHub API. You can add the token to your requests like this:
fetch('https://api.github.com/users/jackiedallas/events', {headers: {'Authorization': gitHubAPI}})
    .then((response) => response.json())
    .then((jsonData) => jsonData.results)
    .then((results) => results.forEach((result)=>console.log(result.name)));