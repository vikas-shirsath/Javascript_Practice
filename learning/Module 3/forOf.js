//the for of statement ceates a loop iterative over iterable objects
//including: built-in string, array, array like objects like node list and also map and set 

var scores = [70, 80, 75, 83];

for(var score of scores) {
    console.log(score);
}


//Method --> Entries

let colors = ['Red', 'White', 'Blue', 'Black'];

for(var [index, color] of colors.entries()) {
    console.log(index + ' --> ' + color);
}


//for Strings
var str = 'Vikas';

for(var c of str) {
    console.log(c);
}