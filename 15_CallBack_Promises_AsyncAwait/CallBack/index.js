// Synchronous:- Synchronous means the code runs in a particular sequence of instructions given in the program.
// Each instruction waits for the previous instruction to complete its execution
console.log("one");
console.log("two");
console.log("three");
console.log("four");


// Asynchronous:- Due to synchronous programming, sometimes imp instruction get blocked due to some previous instructions,
// which cause a delay in the UI. Asynchronous code execution allows to execute next instruction immediately and doesn't block the flow.
console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("hello")
}, 2000) // 2ms = 2000s
console.log("three");
console.log("four");


// Callbacks:- A callback is a function passed as an argument to another function
function sum(a, b){
    console.log(a+b);
}

function calculator(a,b, sumCallback){
    sumCallback(a,b);
}

calculator(1,2,sum);
// or we can pass the whole function also
calculator(1,2, (a,b)=>{
    console.log(a+b);
})




