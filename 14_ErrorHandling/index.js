// Error handling in JavaScript can be done using the try, catch, finally, and throw statements.
// These constructs allow you to handle and manage errors in your code. 
// The try block contains the code that might throw an exception.
// If an exception occurs, the control is transferred to the catch block where you can handle the error. 
// The error parameter represents the exception object, and you can access its properties like message.
// The finally block contains code that will be executed regardless of whether an exception occurred or not. This block is optional.

let a = 10;
let b = 20;
console.log("a = ", a);
console.log("b = ", b);
console.log("a+b = ", a+b);
try{
    console.log("a+b = ", a+c);
} catch(error){
    console.log(error);
    console.log(error.message);
}finally{
    console.log("This will always be executed.");
}
console.log("a+b = ", a+b); // Agr try catch block use nhi krta toh ye line kabhi execute he ni hoti



// You can also explicitly throw an exception using the throw statement:
function divide(a,b){
    if(b == 0){
        throw new Error("Division by zero is not allowed.");
    }
    return a/b;
}

try{
    let result = divide(10,0);
    console.log(result);
} catch(error){
    console.log("An error occured:", error.message);
}