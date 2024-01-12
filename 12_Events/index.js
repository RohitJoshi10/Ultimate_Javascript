// In JavaScript, an event is a specific occurrence or incident that happens in the browser, such as a user clicking a button, resizing the window, or pressing a key.
// Events drive the interaction between a user and a web page, allowing developers to respond to user actions.

// An event handler is a piece of code (usually a function) that is executed in response to a specific event. 
// It defines what should happen when the associated event occurs. Event handlers are used to add interactivity to web pages by responding to user actions.

// An event listener is a function that "listens" for a specific type of event to occur and then invokes a corresponding event handler. 
// Event listeners are responsible for handling the registration and removal of event handlers. They are attached to HTML elements and wait for the specified event to trigger the associated event handler.






// Events in JS
// The change in the state of an object is know as event
// Events are fired to notify code of "interesting chnages" that may affect code execution
// Mouse events (click, double click etc.)
// Keyboard events (keypress, Keyup, Keydown)
// Form events (submit etc.)
// Print event & many more
// onchange	An HTML element has been changed
// onclick	The user clicks an HTML element
// onmouseover	The user moves the mouse over an HTML element
// onmouseout	The user moves the mouse away from an HTML element
// onkeydown	The user pushes a keyboard key
// onload	The browser has finished loading the page
// <button onclick="console.log('Button is clicked');">Click me</button>  This is inline event handling

// Event Handling can be done in 3 ways
// 1. Inline event handling --> makes html code to bulky
// 2. using js ---> yaha phr ek baar mai ek he fuction ko likh kr event ko handle kr skte hai....we can't use another function to handle it.
// 3. Event Listeners ---> For a sigle event we can create multiple events listeners.


// Evemt Handling in JS
// First priority is of javascript handler not the inline one.
// ek baar agr hume apne event ko handle kr lia then usko dubara handle nhi kr skte agr krenge toh purana wala code overwrite ho jayega.
// Node.event = () =>{
//     // handle here
// }

let btn1 = document.querySelector("#btn1");

btn1.onclick = () =>{
    console.log("btn1 was clicked");
}

let box1 = document.querySelector("#box1");
box1.onmouseover = () =>{
    console.log("You are inside the div");
}


// Event Object
// It is a special object that has details about the event.
// All event handlers have access to the event object's properties and methods.
// node.event = (e) =>{
//     // handle here
// }
// e.target, e.type, e.clientX, e.clientY
let btn2 = document.querySelector("#btn2");

btn2.onclick = (e) =>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
}


// Event Listeners
// node.addEventListener(event, callback)
// node.removeEventListener(event, callback) here callback means handler
// Note:- the callback reference should be same to romeve
let btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", (e) => {
     console.log("button 3 clicked handler-1");
 })

btn3.addEventListener("click", () => {
     console.log("button 3 clicked handler-2");
 })

const handler3 = () => {
     console.log("button 3 clicked handler-3");
 }
btn3.addEventListener("click", handler3);

btn3.addEventListener("click", () => {
     console.log("button 3 clicked handler-4");
 })

// Now removing one event listener
btn3.removeEventListener("click",handler3);