// If i want to store marks of 5 students then either i can make 5 variables and store them.
// eg:- stu1 = 50, stu2 = 30;
// or i can make an object and then can store marks of 5 students.
// eg:- let marks  = { stu1: 50, stu2: 30};
// but here is the problem we know that we will store the marks of students in an oder only.
// that means firstlty storing the marks of stu1 then stu2 and then so on...


// In JavaScript, an array is a special type of object that allows you to store and manipulate a collection of elements. 
// Each element in an array can be of any data type, and arrays can dynamically resize to accommodate varying numbers of elements.
// eg:- let marks = [50, 30, 20, 18, 66];
//      let heros = ["ironman", "hulk", "thor", "batman"];
//      let info = ["rohit", 23, "Dehradun"];
// Arrays are used where we want to store multiple items in the form of a collection but wants to give them only one name.
// objet k ander hume har key of different name dena hota hai.
// but in case of aarays we can give a single name to the collection of items.

// Properties hoti hai jo sirf ek single value deti hai and method wo hota hai jo kuch kamm bhi kre.
// so, we have a property of array like length.
let marks = [50, 30, 20, 18, 66];
console.log("The length of the array is :", marks.length);
console.log("Marks of student1 which is at index 0:",marks[0]); // Accessing array elements as indices
console.log("Marks of student6 which does not even exist:", marks[6]); // You will get undefined

let heros = ["ironman", "hulk", "thor", "batman"];
console.log("Heros array:",heros);
console.log('Type of heros array:',typeof heros); // Arrays is of object type

// In javascript strings are immutable that means we can't change them but array are not immutabole we can changee them
marks[0] = 60;
console.log("Marks of student1 which is at index 0:",marks[0]);


// Looping over an array
let cars = ["BMW", "Volvo", "Mini", "Nano", "Range Rover"];

// For loop
for(let i=0; i<cars.length; i++)
{
    console.log("The cars no", i+1, "is", cars[i]);
}

// For of loop
for(let car of cars)
{
    console.log(car);
}