let str1 = "Hello, World!";


// 1. toUpperCase():- Convert the string to uppercase
console.log(str1.toUpperCase());

// 2. toLowerCase():- Convert the sting to lowercase
console.log(str1.toLowerCase());

// 3. charAt(index):- Return the character at specified index.
console.log(str1.charAt(0));

// 4. at(index):- The at() method returns the character at a specified index (position) in a string.
// The at() method is a new addition to JavaScript.
// It allows the use of negative indexes while charAt() do not.
// Now you can use myString.at(-2) instead of charAt(myString.length-2).

console.log(str1.charAt(str1.length-2));
console.log(str1.at(-2));

// 5. indexOf(substring):- Return the index of the first occurrence of the specified substring or it returns -1 if the string is not found.
console.log(str1.indexOf('World'));

// 6. lastIndexOf():- Return the index of the last occurrence of a specified text in a string or it returns -1 if the string is not found.
console.log(str1.lastIndexOf('l'));

// 7. includes():- This method returns true if a sting contains a specified value
console.log(str1.includes("World"));
// Check if a string includes "World". Start at position 12:
console.log(str1.includes("World", 12));

// 8. startsWith():- This method returns true if a string begins with a specified value otherwise it returns false.
console.log(str1.startsWith("Hello"));

// 9. endsWith():- The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false
console.log(str1.endsWith("World"));
// Check if the 13 first characters of a string ends with "World":
console.log(str1.endsWith("World!", 13));

// 10. slice(start, end):- Extract a portion of string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position(end not included).
console.log(str1.slice(0,5));
console.log(str1.slice(-6,-1));

// 11. substring(start, end):- similar to `slice` but doesn't support negative indicies.
// The difference is that start and end values less than 0 are treated as 0 in substring()
// If you omit the second parameter, substring() will slice out the rest of the string.
console.log(str1.substring(0,5));
console.log(str1.substring(2));

// 12. substr():- Similar to slice() but the difference is that the second parameter specifices the length of the extracted part.
console.log(str1.substr(2,3));

// 13. concat():- joins two or more stings. The concat() method can be used instead of the plus operator. 
let firstName = "Rohit";
let lastName = "Joshi";
let fullName = firstName.concat(" ",lastName);
console.log(fullName);

// 14. trim():- Removes whitespaces from both end of the string. Middle spaces ko trim nhi krta.
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.
// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
let myString = "            IronMan is          ";
console.log(myString.trim());
console.log(myString.trimStart());
console.log(myString.trimEnd());

// 15. str.replace(searchval, newVal):- The replace() method does not change the string it is called on. 
// The replace() method returns a new string.
// The replace() method replaces only the first match.
// To replace all occurrences of search value use Regular Expression /g flag.
// To replace case insensitive, use a regular expression with an /i flag (insensitive).
let text = "My super hero is Ironman. Ironman is more powerfull than Hulk";
console.log(text.replace("Ironman", "Batman"));
console.log(text.replace(/Ironman/g, "Batman"));
console.log(text.replace(/Ironman/g, "Batman"));
console.log(text.replace(/IRONMAn/i, "Batman"));


// 16. split():- A string can be converted to an array with the split() method.
// If the separator is omitted, the returned array will contain the whole string in index [0].
// If the separator is "", the returned array will be an array of single characters.
let sentence = "This is a sample sentence";
let wordsArray = sentence.split(" "); // Splitting based on spaces (" ")
console.log(wordsArray);