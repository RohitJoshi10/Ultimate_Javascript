// In javascript, loops are used to repeatedly execute a block of code.
// There are several types of loops in javascript

// 1. for loop:- This loop is used when you know in advance how many times you want to iterate.
for(let i=0; i<10; i++)
{
    console.log(i);
}

// 2. while loop:- This loop is used when you want to execute a block of code as long as a condition is true.
let j = 0;
while(j < 10)
{
    console.log(j);
    j++;
}

// 3. do-while loop:- Similar to the 'while' loop, but the condition is checked after the block of code is executed,
// ensuring that the code inside the loop is executed at least once.
let k = 0;
do{
    console.log(k);
    k++;
}while(k < 10);

// 4. for...in loop:- This loop is used for iterating over the properties of an object.
const person = { name: 'Rohit', age: 23, city: 'Dehradun'};
for(let i in person)
{
    console.log(i, person[i]); // Here i is the key and person[i] is the value of that key.
}

// 5. for...of loop:- Introduced in ECMAScript 6(ES6), it iterates over objects like Array and Strings.
const colors = ['red', 'green', 'blue'];
for(let i of colors)
{
    console.log(i);
}

let str = "Rohit";
for(let i of str)
{
    console.log("i =", i);
}