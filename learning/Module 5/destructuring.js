// The destructuring assignment syntax is a javascript expression that makes it possible to unpack values from array, or properties from objects, into distinct variables.

//destructuring array


let arr = ['Hi', 'I', 'am', 'Vikas']

let [a, b, c, d] = arr;

console.log(a,b,c,d);


//destructuring object

let myObj = {
    name : 'Adam',
    age : 25,
    gender : 'M',
    address : {
        country : 'England',
        state : 'London'
    } 
}


let {name : n, age, gender, address : {country}} = myObj;  //have to pass same name as key

console.log(n, age, gender);