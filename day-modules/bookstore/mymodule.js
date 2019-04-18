const fs = require('fs');

module.exports.message = "My module is loading...";
console.log("My module is loading...");
module.exports.addBook = function(){
    fs.writeFileSync('book.txt','writing data in the file...');
    console.log("Book added");
};
module.exports.removeBook = ()=> {
    console.log("Book removed");
};
module.exports.searchBook = search;
module.exports.listAll = list;

function search(object){
    console.log("Searching book");
};
function list(){
    console.log("Listing books");
};