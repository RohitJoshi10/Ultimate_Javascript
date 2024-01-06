// Prompt the user to ente their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the fullname length.
// eg: user name = "rohitjoshi" username should be "@rohitjoshi10"

let fullname = prompt("Enter your username");
let username = "@"+ fullname + fullname.length;
console.log(username);

// Can aslo be done using concat