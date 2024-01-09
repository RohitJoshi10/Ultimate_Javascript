// 1. push():- Adds one or more elements to the end of an array and returns the new length of the array.
let arr1 = [1,2,3];
arr1.push(4);
console.log(arr1);
arr1.push(5,6);
console.log(arr1);

// 2. pop():- Removes the last element from an array and returns that element.
let arr2 = [1,2,3,4,5];
console.log(arr2);
let remElem = arr2.pop();
console.log("Removed Element:",remElem);
console.log(arr2);

// unshift():-  Adds one or more elements to the beginning of an array and returns the new length of the array.
let arr3 = [2,3];
console.log(arr3);
arr3.unshift(1);
console.log(arr3);

// shift():- Removes the first element from an array and returns that element.
let arr4 = [0,1,2,3];
console.log(arr4);
let shiftelem = arr4.shift();
console.log("Shifted Element:", shiftelem);
console.log(arr4);

// concat():- Returns a new array that combines two or more arrays or values.
let firstName = ['Rohit', 'Sachin', 'Yogendra', 'Harsh', 'Yatin'];
let lastName = ['Joshi', 'Aswal', 'Chand', 'Chauhan', 'Chauhan'];
let Names = firstName.concat(lastName);
console.log(Names);

// toString():- When used on an array, it converts the array elements to strings and concatenates them into a single string, separated by commas.
// It's important to note that toString() does not modify the original array; it simply returns a string representation of the array.
// If you want to convert an array to a string with a different separator or handle the string representation differently, you may need to use other methods, such as join().
let numbers = [100,200,300,400,500];
console.log(numbers.toString());
console.log(numbers.join("-"));

// slice():- The slice() method returns a shallow copy of a portion of an array into a new array object. It does not modify the original array.
// startIndex: The index at which the slice begins (inclusive).
// endIndex: The index at which the slice ends (exclusive).
// If omitted, slice() methods extracts through the end of the original array.
let originalArray = [1,2,3,4,5];
let slicedArray = originalArray.slice(1,4);
console.log("The array before slicing:", originalArray);
console.log("The array after slicing:", slicedArray);


// splice():- The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array.
// array.splice(startIndex, deleteCount, item1, item2, ...);
// startIndex: The index at which to start changing the array.
// deleteCount: The number of elements to remove from the array.
// item1, item2, ...: Elements to add to the array.

let arr5 = [1,2,3,4,5];
console.log("The array before splice was:", arr5);
arr5.splice(1, 2); // It removes 2 elements starting from Index
console.log("The array after splice is:", arr5);

// The splice() method can be used to add new items to an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

// ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.
// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(months);
console.log(spliced);