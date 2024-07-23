//pure function always gives same output for same input 
//pure function does not get any external or console


//impure function
var a = 2;

function impadd (b) {
    console.log(a+ b);
}

impadd(2)


//pure function 

function addpure (c, d) {
    return c + d;
}

console.log(addpure(2, 2));