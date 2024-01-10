// Create a function using the "function" keyword that takes a String as an argument and returns the number of vowels in the string.
// Follow up question-> Create an arrow function to perform the same task.

// Without using Arrow function 
// function countVowels(myString){
//     let count = 0;
//     for(let ch of myString)
//     {
//         if(ch == 'a' ||  ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' ||  ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
//         {
//             count++;
//         }
//     }
//     return count;
// }

// console.log("The number of vowles are:",countVowels("Roit Joshi"));


// Using Arrow function
const countVowels = (myString) =>{
    let count = 0;
    for(let ch of myString)
    {
        if(ch == 'a' ||  ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' ||  ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U')
        {
            count++;
        }
    }
    return count;
}

console.log("The number of vowles are:",countVowels("Rohit Joshi"));
