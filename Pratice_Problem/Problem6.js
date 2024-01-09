// For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(mark of marks)
{
    sum += mark;
}
let avg = sum/marks.length;
// console.log("The average makrs of the student is:", avg);
console.log(`The average marks of the students is: ${avg}`);