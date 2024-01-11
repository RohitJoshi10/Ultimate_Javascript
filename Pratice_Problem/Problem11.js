// Q1. We are given array of marks of students. Filter out the marks of the students that scored 90+
let marks = [87, 93, 64, 99, 86];
const result = marks.filter((val)=>{
    return val > 90;
});
console.log(result);


// Q2. Take number n as input from the user. Create an array of numbers from 1 to n.
//     use the reduce method to calculate sum of all numbers in the array.
//     use the reduce method to calculate product of all numbers in the array.

let number = prompt("Enter a number");
let arr = [];
for(let i=1; i<=number; i++){
    arr[i-1] = i;
}

const sum = arr.reduce((prev, curr)=>{
    return prev+curr;
});
console.log("The sum is", sum);

const product = arr.reduce((prev, curr)=>{
    return prev*curr;
});
console.log("The product is", product);
