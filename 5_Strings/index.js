// In JavaScript, a string is a sequence of characters, and it is one of the primitive data types.
// Strings can be created using single quotes (') or double quotes (").

let singleQuotedString = 'Hello, I am a string!';
let doubleQuotedString = "I can also be created with double quotes!";
console.log(singleQuotedString[4]); 
console.log(singleQuotedString.length);
console.log(doubleQuotedString.length);


// Template Literals in JavaScript
// A template literal is a way to embed expressions inside a string using backticks (`).
// `Hello Everybody`

let specialString = `This is a template literal`;
console.log(specialString);
console.log(typeof specialString);


// let say we have object and we want to print it's details in a single line.
// So, for doing this we just write two console statements
let obj = {
    item: "pen",
    price: 10
};

console.log("The cost of", obj.item, "is", obj.price, "rupees"); 
// Yaha pe maine ek choti string banyai fir ek variable likha then again ek choti string then again variable and so on.... 
// But we can do this in a better way by storing this string and var in a single string.
// and for doing this we will use template literal....
// In template literal we can write variables with our sting.

let templateString = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(templateString); // Here our output is convrted into a singl string

// NOTE:- String Interpolation is a way to create strings by doing substituion of placeholders.
//        `string text ${expression} sting text`
// String interpolation in JavaScript refers to the process of embedding variables or expressions within a string to create a new string. 
// This allows you to construct strings dynamically by combining text and variable values or expressions. There are several ways to achieve string interpolation in JavaScript:

// Expression k ander jo kuch bhi likha hota hai sabse phele uski value calculate hoti h then wo string ka part banta hai.
let str1 = `The addition of one two and three is ${1+2+3}`;
console.log(str1);

// With template literal's we can have escape characters.
// I want to print rohit and joshi in the next line so i will use a escape character.
// \n :- Gives me next line
// \t :-  Gives me tab space
let str2 = "Rohit\nJoshi";
console.log(str2);

let str3 = "Rohit\tJoshi"; 
console.log(str3);
console.log("The lenght is", str3.length);