/** Here the implmentation is chaning based on the operator passed with the parameters */
function calc(a,b,f){
    result = f(a,b);
    console.log(result);
}

calc(10,20,(a,b)=> a+b);
calc(10,20,(a,b)=> a-b);
calc(10,20,(a,b)=> a*b);
calc(10,20,(a,b)=> a/b);