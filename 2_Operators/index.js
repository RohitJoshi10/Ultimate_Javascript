// Operators are used to perform some operations on data
// a + b here a & b are operands and + is the operator

// 1. Arthmetic Operators: +, -, * ,/   Arithmetic Operators are used to perform arithmetic on numbers:
let num1 = 10;
let num2 = 20;
let add = num1+num2;
let sub = num1-num2;
let mul = num1*num2;
let div = num1*num2;
let Mod = num1%num2;
let inc = num1++;
let dec = num2--;
let expo = num1**2;
console.log(add);


// 2. Assignmnet Operators:- Assignment operators assign values to JavaScript variables.
// =, +=, -=, *=, /=, %=, **=
let x = 40;
x += 10;
console.log(x);


// 3. Comparison Operators:- Are used to compare two values and evalute a expression either true or false
// == equal to, === equal value and equal type, != not equal to
// !== not equal value or not equal type, > greater than
// < less than, >= greater than or equals to
// <= less than or equal to,  ? ternary operator
let a = 10;
let b = 10;
let c = (a<10) ? "a is less than 10" : "a is greater than equal to 10";
let d = "10"
let res1 = a===b;
let res2 = a===d;
console.log(c); // console.log("a+b =", a+b);


// Note:- ALl comparison operators can also be used on strings
// Note that strings are compared alphabetically:
// The + can also be used to add (concatenate) strings:
// The += assignment operator can also be used to add (concatenate) strings:
// Adding two numbers, will return the sum, but adding a number and a string will return a string:
let text1 = "A";
let text2 = "B";
let text3 = "20";
let text4 = "5";
let text5 = "Rohit is a";
let text6 = "Hello,"+5;
let result1 = text1 < text2;
let result2 = text3 < text4; // since both text3 and text4 are strings, this comparison is done based on their Unicode code points
let result3 = text1 + " " + text2;
text5 += " smart man";
console.log(text6);


// 4. Logical Operator: Comparison and Logical operators are used to test for true or false.
// && logical and, || logical or, ! logical not
// Logical OR-> gives true when any one of the condition is true otherwise false.
// Logical AND -> gives true when both the condition are true otherwsie false.
// Logical NOT -> change the true to false and vice versa
let e = 6;
let f = 5;
let cond1 = e>f; // true
let cond2 = e === 6; // true
console.log("cond1 && cond2 =", cond1 && cond2);
console.log("cond1 && cond2 =", !(cond1 && cond2));

// 5. Bitwise Operators
// & AND, | OR, ~ NOT, ^ XOR, << left shift, >> right shift, >>> unsigned right shift
let g = 4;
let h = 5;
console.log(a&b);
