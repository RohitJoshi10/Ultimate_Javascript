// Create an array to store companies -> "Bloomberg", "Microsoft", "Zeta", "Google", "IBM", "Netflix"
// a. Remove the first company from array
// b. Replace Uber and Ola in its place
// c. Add Amazon at the end

// This question can be done using splice method

let companies = ["Bloomberg", "Microsoft", "Zeta", "Google", "IBM", "Netflix"];
console.log("The companies are:",companies)
companies.splice(0,1, "Uber", "Ola"); //  Remove the first company from array
console.log("Remove the first company from array and Replace Uber and Ola in its place", companies);
companies.push("Amazon");
console.log("Add Amazon at the end:", companies);
