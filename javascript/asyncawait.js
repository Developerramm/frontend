console.log("javascript async await")

function getUser(userId,callback){
    console.log("Get user from the database");
    setTimeout(() => {
        callback({
            userId : userId,
            username : "john"
        })
    }, 1000);
}