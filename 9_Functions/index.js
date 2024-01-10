// A Function is a block of code that perforoms a specific task, can be invoked whenever needed.
// In JavaScript, functions are reusable blocks of code that can be defined and called to perform a specific task.

// Function Declaration
// You can declare a function using the function keyword, followed by the function name, a list of parameters enclosed in parentheses, and a block of code enclosed in curly braces.
function greet(name){
    console.log("Hello, " + name + "!");
}
greet("Rohit");

// Function Expression
// Another way to create a function is by using a function expression. In this case, the function is assigned to a variable.
const welcome = function(name){
    console.log("Hello, " + name + "!");
}
welcome("Yaar");


// Arrow Function:- ES6 introduced arrow functions, providing a more concise syntax for writing functions.
const message = (name) => {
    console.log("Hello, " + name + "!");
}
message("Bro");

// Return Statement, Parameters and Arguments
// Functions can return values using the return statement. This allows you to capture the result of a function and use it elsewhere in your code.
// Parameters are placeholders in the function declaration, while arguments are the actual values passed when the function is called.
function add(a, b){
    return a+b;
}
const result = add(2,3);
console.log(result);

// Default Parameters:- You can provide default values for function parameters
function badsha(name = "Sachin"){
    console.log("Hello " + name + "!");
}
badsha();
badsha("Sultan");

// Note:- Function parameters are like local variables of the function having the block scope.
// A function is a standalone block of code that can be defined and called independently.
// It is not associated with an object or a class.
// Functions are declared using the function keyword and can be invoked by their name.
// A method is a function that is associated with an object.
// It is defined within the context of an object or a class.
// Methods are called on objects and often operate on the data within that object.
// Like toUpperCase() is a method as it is associated with to work only strings.


// forEach Loop in Arrays
// Here forEach is a method that is used to create a loop
// Array.forEach(callbackFunction)
// CallbackFunction: Here, it  is a function to execute for each element in the Array
// A callback is a function passed as an argument to another function.
// arr.forEach((val)=>{ console.log(val); })

let arr = [1, 2, 3, 4, 5];
// forEach array k ek ek element ko pick krega and pass krega printVal function ko
// arr.forEach(function printVal(val){
//       console.log(val);
// })

// This callback function contains 3 parameters and they are optionals.
// first parameter is the value jo har ek index par stored hai.
// second parameter is the index itslef and third is the array itself.
arr.forEach((val, indx, arr)=>{
    console.log(val, indx, arr);
})

// Note:- High Order Functions
// High Order Functions are High Order Methods in javascript that either take another function inside them 
// as a parameter or they return another function as their output.
// Here forEach is a high order function.




// In JavaScript, a higher-order function is a function that takes one or more functions as arguments or returns a function as its result.
// This concept is rooted in functional programming and provides a powerful way to work with functions as first-class citizens. Higher-order functions enable you to create more abstract and flexible code.

// 1. Functions as Arguments
// Higher-order functions can take other functions as arguments. This allows you to pass behavior (functionality) as a parameter to another function.
function multiplyBy(factor){
    return function (number){
        return number * factor;
    };
}

const double = multiplyBy(2);
console.log(double(5));
// In this example, multiplyBy is a higher-order function that takes a factor and returns a new function. The returned function can then be used to multiply a number by that factor.

// 2. Functions as Return Values
// Higher-order functions can also return functions. This is useful for creating specialized functions on the fly.
function greetingFunction(greeting) {
  return function (name) {
    console.log(greeting + ", " + name + "!");
  };
}

const greetInEnglish = greetingFunction("Hello");
const greetInSpanish = greetingFunction("Hola");

greetInEnglish("John"); // Output: Hello, John!
greetInSpanish("Maria"); // Output: Hola, Maria!
// Here, greetingFunction is a higher-order function that takes a greeting and returns a function. The returned function can then be used to create greetings for specific names.