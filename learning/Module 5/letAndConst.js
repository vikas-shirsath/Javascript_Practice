if(true) {
    var a = 2;
    let b = 3;
}

console.log(a);
// console.log(b);


//let is block scoped

var z = 2;
var z = 3;

let d = 2;
// let d = 4;

//let is solution for redeclaration problem

d = 4;
//we can reassign let keyword also var keyword



//const keyword not allow to reassign, redeclare and always block scoped

const w = 100;
console.log(w);

// w = 120;
// console.log(w);

