// Call, Apply, Bind in JS

let obj1 = {
  name: "Rohit Joshi",
  age: 23,
  printDetails: function (city, state, country) {
    console.log(
      this.name + " " + this.age + " " + city + " " + state + " " + country
    );
  },
};

obj1.printDetails("Dehradun", "Uttarakhand", "India");

// obj2 wants the printDetails function as well
// We can create a seprate fun for it also...but what happens if we have multiple objects
// Then it is not feasible way to create a seprate func for every obj
// To resolve this issue we can use call func.
let obj2 = {
  name: "Sachin Aswal",
  age: 23,
};

// 1. Call: Call Method allows an object to use the method (function) of another object.
obj1.printDetails.call(obj2, "Rishikesh", "Uttarakhand", "India");

// 2. Apply: This is similar like call the difference is that instead of passing individual parameters seprately here we pass the Array as parameters
obj1.printDetails.apply(obj2, ["Rishikesh", "Uttarakhand", "India"]);

// 3. Bind: It is similar like call but it creates a new function with a specific this context that can be invoked later.
let newFun = obj1.printDetails.bind(obj2, "Rishikesh", "Uttarakhand", "India");
newFun();

// Here func was inside the obj what will happen if it was a generic function
// We can use call method to call that generic function with the obj as an argument
// let obj1 = {
//   name: "Rohit Joshi",
//   age: 23,
// };

// let printDetails = function () {
//   console.log(this.name);
//   console.log(this.age);
// };

// let obj2 = {
//   name: "Sachin Aswal",
//   age: 23,
// };

// printDetails.call(obj1);
// printDetails.call(obj2);
