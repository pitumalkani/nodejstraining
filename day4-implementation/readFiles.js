const fs = require('fs');

const files = fs.readdirSync('./');
console.log("Files " + files);
console.log("Completed");

console.log("Starting...");
fs.readdir('./', (err,files) => {

    if(err){
        console.log(err);
    }else{
        console.log(files);
    }
});

console.log("Completed...");