// In javascript we have 4 types of conditions
// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

// if statement
let age = 18;
if(age > 18)
{
    console.log("You can Vote");
}

// if-else statement
let num1 = 10
if(num1 > 0)
{
    console.log("The number is positive");
}
else{
    console.log("The number is negative");
}

// else-if-statement
let num2 = 0;
if(num2 > 0)
{
    console.log("The number is positive");
}
else if(num2 < 0)
{
    console.log("The number is negative");
}
else{
    console.log("The number is 0");
}


// Switch Statements:- The switch statement is used to perform different actions based on different conditions.
// Use the switch statement to select one of many code blocks to be executed.
// How switch works:-
// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.
// When JavaScript reaches a break keyword, it breaks out of the switch block.
// This will stop the execution inside the switch block.
// It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.
// If you omit the break statement, the next case will be executed even if the evaluation does not match the case.
// The default keyword specifies the code to run if there is no case match:
// The default case does not have to be the last case in a switch block:
// If default is not the last case in the switch block, remember to end the default case with a break
// If multiple cases matches a case value, the first case is selected.
// If no matching cases are found, the program continues to the default label.
// If no default label is found, the program continues to the statement(s) after the switch.

let day = "Saturday";
switch(day)
{
    case 'Monday' : 
    console.log("Today is Monday");
    break;
    case 'Tuesday' : 
    console.log("Today is Tuesday");
    break;
    case 'Wednesday' : 
    console.log("Today is Wednesday");
    break;
    case 'Thrusday' : 
    console.log("Today is Thrusday");
    break;
    case 'Friday' : 
    console.log("Today is Friday");
    break;
    case 'Saturday' : 
    console.log("Today is Saturday");
    break;
    case 'Sunday' : 
    console.log("Today is Sunday");
    break;
    default:
        console.log("You entered a wrong choice");
}