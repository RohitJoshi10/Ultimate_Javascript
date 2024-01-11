// Getting the attributes 

// getAttribute(attr)-----> to get the attribute value
// setAttribute(attr,value)---->to set an attribute with a specific name and value.

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let para = document.querySelector(".para");
console.log(para);

let cls = para.getAttribute("class");
console.log(cls);
// Now changing the Attribute of the paragraph
para.setAttribute("class","newPara");

// To get the style of an element.
// node.style
div.style.backgroundColor = "violet";
div.style.fontStyle = "italic";
div.innerText = "I am BOX";


// INSERTING ELEMENTS
// let el = document.createElement("div"); ---> Before adding a new element first create it.
// node.append(el) ---> adds at the end of Node(inside)
// node.prepend(el) ---> adds at the start of node(inside)
// node.before(el) ---> adds before the node(outside)
// node.after(el) ---> adds after the node(outside)


let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);

// Now iss button ko screen mai dikhane k liye hume isse apne dom mai add krna hoga
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
div.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi, I am new!</i>";
document.querySelector("body").prepend(newHeading);

// DELETE ELEMEMT
// Node.remove() ---> remove the node
let paragraph = document.querySelector("p");
para.remove();

// Also read about appendChild and removeChild