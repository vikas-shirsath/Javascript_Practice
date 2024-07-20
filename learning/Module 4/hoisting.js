//hoisting is calling function before declaring it

console.log(a); // returns undefined

greet();

console.log(add);

var a = (10);

function greet() {
    console.log('Hello');
}

var add = function (b, c) {
    return b + c;
}