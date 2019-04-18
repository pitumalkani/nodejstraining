console.log("Loading the math.js file");
var pi = 3.14;
module.exports.PI = pi;
module.exports.calculateArea = area;
function area(radius){

    return pi*radius*radius;
}