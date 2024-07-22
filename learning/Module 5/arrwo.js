// arrow function is also knwon as fat arrow function 

let a = () => {
    console.log(2);
} 

let b = a => console.log(a + 2);

let c = (a, b) => {
    console.log(a + b);
}

a();

b(2);

c(2, 3);