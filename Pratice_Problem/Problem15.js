// Q1. You are creating a website for your college. Create a class User with 2 properties
// name and email. It also has a method called viewData() that allows user to view website data.

let Data = "College Data"
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(`${Data}`);
    }
};

let myObj = new User("Badsha","badsha@hotmail.com");
myObj.viewData();


// Q2. Create a new Class called Admin which inherits form User. Add a new method call editData to Admin that allows it to edit website data.
class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
         Data = "College Data edited."
         console.log("College Data edited.")
    }
}
let adminObj = new Admin("John", "john@gmail.com");
adminObj.editData();