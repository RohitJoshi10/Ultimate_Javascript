// console.log() is used to print a message to the console.
console.log("Rohit");
console.log("This will be goining to the ultimate javascript series");

// Variables:- Variables are containers for data.
// null means an empty value
// undefined means we don't know what value it is.
// Javascript is a dynamic typed language means we can store any value in 
// any variable. We don't need to define to the variable that what value
// are we going to store in it as we do in other languages for eg:- like c++
// It calculate at runtime the datatype of the variable.
// = is a assignmnet operator. It assign rightside value to leftside.
// In javascript variable name are case sensitive; "A" and "a" is different.
// Only letters, digits, underscore(_) and $ is allowed. (not even space)
// Only a letter, underscore(_) or $ should be 1st character.
// Reserved words cannot be variable names. (can see in MDN)
// Javascript follows camelCasing:- First word  will be small and rest of the words which 
// come after it their first letter will be capital and rest will be small.




// In JavaScript variables can be declared in 4 ways:
// 1. Automatically like below we have declared.
firstName = "Rohit Joshi"; 
age = 23; 
area = 24.34;
x = null;  
y = undefined;
canVote = true;
isMarried = false;
console.log(isMarried);

// 2. Using var
// Variable can be re-declared and updated. A global scope variable.
// Variables defined with var are hoisted to the top and can be initialized at any time.
// Meaning: You can use the variable before it is declared:
// carName = "Volvo";
// var carName;
var z = 10;
z = 20; // Updated
var z = 30 // redeclared
console.log(z);

// 3. Using let
// Variable cannot be re-declared but can be updated. A block scope variable.
// If we have declared a variable but have not given any value to it, so it wil give undefined if we 
// try to console it's value.
let movie = "A beginning of a new journey";
// let movie = "hero"; // This line will through an error as i am redeclaring it.
movie = "A journey to the centre of my life"; // Updated
console.log(movie);

{
    let i = 3;
    console.log(i);
}
{
    let i = 5;
    console.log(i);    
}
 

// 4. Using const
// Variable cannot be re-declared or updated. A block scope variable.
const a = 100;
// a = 200; // This will through an error as we are updating it's value.
// const a = 300; // Error as redeclaration is not allowd.
console.log(a);



// Data Types in JavaScript are of two types primitive and non-primitive

// 1. Primitive

// 1. Number:- All JavaScript numbers are stored as decimal numbers (floating point). Numbers can be written with, or without decimals:
// To see it's type write typeof length
let length = 16;
let weight = 69.9;


// 2. Strings:- A string (or a text string) is a series of characters like "John Doe". Strings are written with quotes. You can use single or double quotes.
let color = "Yellow";
let superHero = "Dr. Strange";
// You can use quotes inside a string, as long as they don't match the quotes surrounding the string
let answer2 = "He is called 'Johnny'";

// 3. Booleans:- Booleans can only have two values: true or false.
let m = true;
let n = false;

// 4. Undefined:- In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
let car;

// 5. Null
let myVar = null;

// 6. Symbol
let f = Symbol("Tony Bhaiya");

// 7. Bigint:- All JavaScript numbers are stored in a a 64-bit floating-point format. 
// JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values that are too big to be represented by a normal JavaScript Number.
let k = BigInt("123456789012345678901234567890");


// 2. Non-Primitive Data type are object
// And The object data type can contain 

// 1. An object:- JavaScript objects are written with curly braces {}. Object properties are written as key:value pairs, separated by commas.
// Can also access object as-- person["key"] or person.firstName
const person = {
    firstName : "Rohit",
    lastName : "Joshi",
    age : 23
};

// To update the object
person["age"] = person["age"] + 1;
person["firstName"] = "ROHIT";

// 2. An array
const friends = ["SpiderMan", "BatMan", "SuperMan"];

// 3. A date
const date = new Date("01-01-2024");

