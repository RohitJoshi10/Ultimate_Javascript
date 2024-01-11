// In JavaScript, the map, reduce, and filter methods are higher-order array methods that allow you to perform operations on arrays in a concise and functional way.

const originalArray = [1, 2, 3, 4, 5];

// 1. map method:- The map method creates a new array by applying a function to each element in the original array.
const mappedArray = originalArray.map((element)=>element*2);
console.log(mappedArray);

// 2. filter method:- The filter method creates a new array with elements that pass a certain condition specified in a function.
// Jis bhi element k liye condition true hogi wo muje return kara k de dega.
const filteredArray = originalArray.filter((element)=> element % 2 == 0); //  originalArray.filter((element)=>{return element % 2 == 0;})
console.log(filteredArray);

// 3. reduce method:- The reduce method is used to accumulate the elements of an array and reduce them to a single value.
// synatx:- array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
// callback: A function that is called once for each element in the array, taking four arguments:
// accumulator: The accumulator accumulates the callback's return values. It is the accumulated result of the previous iterations.
// currentValue: The current element being processed in the array.
// currentIndex (optional): The index of the current element being processed.
// array (optional): The array reduce was called upon.
// initialValue (optional): An initial value for the accumulator. 
// If provided, it is used as the initial value for the first call to the callback function. 
// If not provided, the first element in the array is used as the initial accumulator value, and iteration starts from the second element.

const sum = originalArray.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
console.log(sum);
// accumulator starts at 0 (provided as the initial value).
// In the first iteration, accumulator becomes 0 + 1 (current element).
// In the second iteration, accumulator becomes 1 + 2.
// This process continues until all elements are processed, and the final result is the sum of all elements in the array.


// Finding sum of elements of array using reduce.
let arr = [1,2,3,4];  // Initially res k ander hota hai 1 and curr k ander hota h 2
const output = arr.reduce((res, curr)=>{
    return res+curr;
});
console.log(output);

// Finding maximum value from the array using reduce
const maxVal = arr.reduce((prev, curr)=>{
    return prev > curr ? prev : curr;
})
console.log(maxVal);

