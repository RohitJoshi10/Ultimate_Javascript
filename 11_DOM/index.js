// Window Object:- The Window object represents an open window in a browser. It is browser's object(not javascript) and is automatically created by browser.
// It is a global object with lots of properties and methods. eg:- console, prompt, alert etc.
// When a web page is loaded, the browser creates a Document Object Model(DOM) of the page.
// The DOM represents the structure of an HTML document including all its elements like div, span, img
// Each element in the DOM has properties that represent various aspects of the HTML element such as id, class name, innerHTML, style etc.
// The HTML DOM model is constructed as a tree of Objects, With the object model, JavaScript gets all the power it needs to create dynamic HTML:
// JavaScript can change all the HTML elements in the page
// JavaScript can change all the HTML attributes in the page
// JavaScript can change all the CSS styles in the page
// JavaScript can remove existing HTML elements and attributes
// JavaScript can add new HTML elements and attributes
// JavaScript can react to all existing HTML events in the page
// JavaScript can create new HTML events in the page
// For printing our document we use console.dir(window.document)
// window object k ander ek aur object hoti hai document naam se and ye document basically representation hoti hai hamare HTML code ki.
// And DOM jo tree like structure banta hai waha pe har ek box ko hum node bolte hai and har ek node ek object hai.






// Finding HTML Elements
// document.getElementById(id)	Find an element by element id
// Jab koi id wala element exist ni krta toh null print hoke aata hai.
let heading = document.getElementById("heading");
console.log(heading);

// document.getElementsByTagName(name)	Find elements by tag name
let paras = document.getElementsByTagName("p");
console.log(paras);

// document.getElementsByClassName(name)	Find elements by class name
// jab koi class wala element exist ni krta tab hume empty HTML collection milta hai.
let headings = document.getElementsByClassName("headings");
console.dir(headings);
console.log(headings);

// Query Selector(It is a best method to access HTML elements)
// In JavaScript, the querySelector method is a powerful and flexible way to select and retrieve elements from the DOM (Document Object Model). It allows you to use CSS-style selectors to target elements in a document.
// querySelector returns the first matching element as an object, or null if no matching element is found.
// If you want to select all elements that match a given selector, you can use querySelectorAll method.

// document.querySelector("myId/myClass/tag")
// returns first element
// document.querySelectorAll("myId/myClass/tag")
// return a NodeList

let elements = document.querySelectorAll("p"); // document.querySelector("p");
console.dir(elements);

let firstElement = document.querySelectorAll(".headings");
console.dir(firstElement);

let idSelector = document.querySelector("#myId");
console.dir(idSelector);











// DOM Manipulation properties

// 1. tagName: returns tag for element nodes
// DOM mai hamare pass 3 nodes hoti hai 1. text nodes 2. comment nodes 3. elements nodes
// read firstChild lastChild and children
console.log(heading.firstChild);
console.log(heading.firstChild.nodeName);

// 2. innerText: returns the text content of the element and all its children.
let div = document.querySelector("div");
console.dir(div);
console.dir(div.innerText);

let oldHeading = document.querySelector("h2");
oldHeading.innerText = "New Heading";

// 3. innerHTML: returns the plain text or HTML contents in the element.
console.dir(div.innerHTML);
oldHeading.innerHTML = "<i>New Heading</i>";

// 4. textContent: returns textual content even for hidden elements.
console.dir(div.textContent); // Used when u make a element hidden like this:- style="visibility: hidden"