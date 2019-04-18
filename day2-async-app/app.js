/** Main module */
console.log("I am going to write asynch code");
getUser(1, function (user) {
    console.log(user);
    getRepository(user.githubUser, function (repos) {
        console.log(repos);
    });
});


// Design a asynchronoues code- user id is passed an get an user object
function getUser(id, callback) {
    setTimeout(() => {
        console.log("Performing database activity to get the user details with id :" + id);
        callback({ "id": id, "githubUser": "pitumalkani" });
    }, 1000);
}

function getRepository(username, callback) {
    setTimeout(() => {
        console.log("Calling the repos for user: " + username)
        callback(["Rep1", "Repo2", "Repo3"]);
    }, 2000);

}

/**  Design asynchronous invocation
1. Callbacks
2. Promises
3. Async /await
*/