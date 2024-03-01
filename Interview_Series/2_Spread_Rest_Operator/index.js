// Rest & Spread Operator

// Rest Operator: It collects several elements. In functions when we require to pass arguments but were not sure how many we have to pass, the rest parameter makes it easier.
// Note: There must be only one rest operator in javascript functions.
// A rest operator is a type of parameter that gets all of the remaining parameters of a function call via an Array.
// It enables us to handle a variety of inputs as parameters in a function.
// Because it is used to combine many items, the rest operator is very helpful during array and object destructuring.

// Problem statement is this we can do addition but what if i increase my argumnets during function call then also it is giving me same result i.e 10
// function addNumbers(a, b, c) {
//   return a + b + c;
// }

// const result = addNumbers(5, 2, 3);
// console.log(result);

// Arguments increased.
// function addNumbers(a, b, c) {
//   return a + b + c;
// }

// const result = addNumbers(5, 2, 3, 8, 9);
// console.log(result);

// To overcome this problem we can use rest operator.
// Rest operator ne baaki bache hue numbers ko combine kr lia and ek array ki form mai store kr lia.
function addNumbers(a, b, c, ...rest) {
  console.log(rest);
  return a + b + c;
}

const result = addNumbers(5, 2, 3, 8, 9);
console.log(result);

// Example of Rest
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }

  return total;
}

const res = console.log(sum(1, 2, 3, 4, 5));

// Spread Operator
// Rest mai ye hota tha ki jo bhi elements hum pass krte hai wo combine ho jate hai but spread mai wo divide hote hai.
// The spread operator helps us expand an iterable such as an array where multiple arguments are needed, it also helps to expand the object expressions.
// In cases where we require all the elements of an iterable or object to help us achieve a task, we use a spread operator.
// Note: There can be more than one spread operator in javascript functions.
// The spread operator divides an array or object into separate elements or properties.
// The spread operator is mostly used if you want to duplicate the content of an array or combine or combine multiple arrays/objects together.

// Problem Statement
// var names = ["Rohit", "Sharad", "Rahul"];
// function getNames(name1, name2, name3) {
//   console.log(name1, name2, name3);
// }

// getNames(names[0], names[1], names[2]);

// Solution:- We can do the same thing in simple way using spread operator.
var names = ["Rohit", "Sharad", "Rahul"];
function getNames(name1, name2, name3) {
  console.log(name1, name2, name3);
}
getNames(...names); // ES-6 Concept
getNames(names); // ES-5 concept

// Agr mai ek hata bhi do toh bhi koi fark ni padega bakki agr phele wale method se krta toh usme error aata ki forcefully pass kro.
var namess = ["rohit", "sharad", "rahul"];
function giveNames(name1, name2) {
  console.log(name1, name2);
}
giveNames(...names);

// Examples of Spread
const firstArray = [5, 10, 15, 20, 25, 30];
const newArray = [...firstArray, 35, 40];
console.log(newArray);

const firstBowl = ["papaya", "cucumber", "watermelon"];
const secondBowl = ["pineapple", "Apple", "banana"];
const thirdBowl = ["cashew nut", "Date", "Strawberry"];
const fruitMix = [...firstBowl, ...secondBowl, ...thirdBowl];
console.log(fruitMix);

// Above we have seen how rest and spread work with arrays. Now we will see how rest and spread works with objects.

// Rest with Objects
var students = {
  name: "Rohit",
  age: "23",
  hobbies: ["Cricket", "Singing"],
};

const { age, ...rest } = students;
console.log(rest);

// const age = students.age;
// console.log(age);
// const { age, name } = students; // This is destructuring.
// console.log(name);

// Spread with objects
// var newStudents = {
//   ...students,
// };
// console.log(newStudents);

// now if i want to override the age
var newStudents = {
  ...students,
  age: "24",
};
console.log(newStudents);
