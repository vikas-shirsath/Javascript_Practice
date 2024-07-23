function printFirstName(firstName, cb) {
    console.log(firstName);
    cb('Rogers');
}

function printLastName (lastName) {
    console.log(lastName);
}

printFirstName('Steve', printLastName); //callback



const isEven = (n) => {
    return n%2==0 ;
}

let printResult = (evenFun, num) => {
    const isEven = evenFun(num);
    console.log(`The number ${num} is even number :- ${isEven}`);
}

printResult(isEven, 9);