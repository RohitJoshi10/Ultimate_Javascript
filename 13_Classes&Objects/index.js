// A javascript object is an entity having state and behaviour(properties and method)
// JS objects have a special property called prototype which is itself a object. Like array is an object it also have prototype like we have not created push function but we can still use it because it comes it comes in the prototype.
// We can set prototype using __proto__
// NOTE:- If object & prototype have same method object's method will be used.
// this simply means that object. eg:- this.marks is same as student.marks

const student = {
    fullName: "Rohit Joshi",
    marks: 81.6,
    printMarks: function(){
        console.log("Marks = ",this.marks); // It will give us error so use this keyword with it
    }
};

const employee = {
    // We can define a functionin in both ways in a object.
    // 1.
     calcTax(){
        console.log("Tax rate is 10%");
     },
    // 2.
    calcTax2: function(){
        console.log("Tax rat is 20%");
    }
};

const karanArjun = {
    salary : 50000
};

// Now we will define a prototype for this karanArujn method so that it can use the properties and method of employee.
karanArjun.__proto__ = employee;


/****************************************************************************************************************************************************/

// Classes in JS
// Class is a program-codee template for creating objects.
// Those objects will have some state(variables) & some behaviour(functions) inside it.
// class MyClass{
//     constructor(){};
//     myMethod(){}
// }
// let myObj = new MyClass();
// jab bhi hume bulk mai similar objects ko create krna hota hai toh uske liye hum classes ka use krte hai.

class ToyotaCar{
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }
    setBrand(brand){
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("Furtuner");
let lexus = new ToyotaCar();


// Constructor
// In JavaScript, a constructor is a special method that is called when an object is created using the new keyword.
// Constructor is automatically invoked by new and is used to initializes object. 
// Constructors are used to initialize the object's properties and perform any other setup that may be required. 
// Constructors are defined within a class or a function, and they typically set initial values for the object's properties.

class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo(){
        console.log(`${this.year} ${this.make} ${this.model}`);
    }
}

let myCar = new Car("Toyota", "Camry", "2023");
myCar.displayInfo();



// Inheritance in JS
// Inheritance is passing down properties & methods from parent class to child class.
// NOTE:- If child and parent have same method, child's method will be used. (Method Overriding).
// To inherit we use keyword extends.

class Person{
    constructor(){
        console.log("Parent Constructor");
        this.species = "homo sapiens";
        console.log("exist parent constructor");
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("Sleep");
    }
    rest(){
        console.log("Person mostly rest");
    }
}

class Engineer extends Person{
    constructor(branch){
        console.log("Child Constructor");
        super();
        super.eat();
        this.branch = branch;
        console.log("exist child constructor");
    }
    work(){
        console.log("Solve Problems");
    }
    rest(){
        console.log("Engineer don't rest")
    }
}

let rohitObj = new Engineer();
rohitObj.work();
rohitObj.eat();
rohitObj.rest();


// Super Keyword
// The super keyword is used to call the constructor of it's parent calss to access the parent's properties and methods.
// We must call super constructor in derived class before accessing 'this' or returning from derived constructor.
// It is also used to pass on the child class info to parent class.
// Parent class
class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    displayInfo() {
        console.log(`${this.make} ${this.model}`);
    }
}

// Child class inheriting from the parent class
class child extends Vehicle {
    constructor(make, model, color) {
        super(make, model); // Call the parent class constructor
        this.color = color;
    }

    drive() {
        console.log("Vroom!");
    }
}

// Creating instances
let childObj = new child("Toyota", "Camry", "Blue");
childObj.displayInfo(); // Output: Toyota Camry
childObj.drive(); // Output: Vroom!
