//functions as an expressions

var add = function (a, b) { //don't have name hence called anonymous function 
    return a + b; //we can also use console.log(a+b);
}

console.log(add(2,3));


let result = add(3,5);
console.log(result);

var sum = add;
console.log(sum(4,5));