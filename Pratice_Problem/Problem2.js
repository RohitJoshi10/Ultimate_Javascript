// Write a code which can give grades to the students according to their scores
// A, 80-100
// B, 70-89
// C, 60-69
// D, 50-59
// F, 0-49

let marks = prompt("Enter your marks");

// Using if else
// if(marks >= 90 && marks <= 100)
// {
//     console.log("Grade A");
// }
// else if(marks >= 70 && marks <= 89)
// {
//     console.log("Grade B");
// }
// else if(marks >= 60 && marks <= 69)
// {
//     console.log("Grade C");
// }
// else if(marks >= 50 && marks <= 59)
// {
//     console.log("Grade D");
// }
// else if(marks >= 0 && marks <= 49) {
//     console.log("Grade F");
// }
// else console.log("Please enter a valid makrs");



// Using switch
switch(true)
{
    case (marks >= 90 && marks <= 100):
        console.log("Grade A");
        break;
    case (marks >= 70 && marks <= 89):
        console.log("Grade B");
        break;
    case (marks >= 60 && marks <= 69):
        console.log("Grade C");
        break;
    case (marks >= 50 && marks <= 59):
        console.log("Grade C");
        break;
    case (marks >= 0 && marks <= 49):
        console.log("Grade F");
        break;40
    default : 
    console.log("You entered wrong marks");
}