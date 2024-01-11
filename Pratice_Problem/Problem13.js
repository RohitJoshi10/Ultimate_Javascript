// Q1. Create a new button element. Give it a text "click me", background color of red & text color of white
//     Insert the button as the first elememt inside the body tag.

let btn = document.createElement("button");
btn.innerText = "Click Me";
btn.style.backgroundColor = "red";
btn.style.color = "white";

document.querySelector("body").append(btn);


// Q2. Create a <p> tag in html, give it a class and some styling
// Now create a new class in CSS and try to append this class to the <p> element
// Did you notice, how you overwrite the class name when you add a new one ?
// Solve this problem using classList.

let paragraph = document.querySelector("p")
paragraph.getAttribute("class");
// paragraph.setAttribute("class","newPara"); // This is overwriting my old css. so i will use classList property
paragraph.classList.add("newPara");