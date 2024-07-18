//loops are satements that we use to control a flow of program and to do some repetative tasks

// Square the each element of an array

var num = [1, 2, 3, 4, 5, 6, 7, 8,];

var squaredArray = [];

for(var i=0; i<num.length; i++) {
    squaredArray.push(num[i] * num[i]);
}

console.log(squaredArray);