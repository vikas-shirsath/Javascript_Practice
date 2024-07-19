//In javscript for in loop allows you to loop through properties of an object.
//the statements of code found within the loop body will be executed once for each property of an object.


var colors = {
    primary : 'Blue',
    secondary : 'Red',
    tertiary : 'White'
}


for(var color in colors) {
    console.log(color + ' --> ' + colors[color]);
}



var colorArray = ['Green', 'Yellow', 'Red'];
for (var color in colorArray) {
    console.log(color + ' --> ' + colorArray[color]);
}