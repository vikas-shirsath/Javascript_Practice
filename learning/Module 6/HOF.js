// Higher Order function 

let arr = [1, 2, 3, 4, 5, 6];

let squaredArr = [];

for (let i = 0; i<arr.length ; i++) {
    squaredArr.push(arr[i] * arr[i]);
}

console.log(squaredArr);


// map method

// map will loop through every element of your array and will perform specific operations that you have provided
//map method always return you new array with results 

const num = [1, 2, 3, 4, 5, 6];

const squaredNum = num.map(function(n) {
    return n * n;
})

console.log(squaredNum);