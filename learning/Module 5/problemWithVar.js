//var can be redeclare
//var is not block scoped they are function scoped
var a = 25;

var a = 35;

if(a===35) {
    var b = 45;
    console.log(b);
}

console.log(b);

function num () {
    var c = 34;
    console.log(c);
}

console.log(c);