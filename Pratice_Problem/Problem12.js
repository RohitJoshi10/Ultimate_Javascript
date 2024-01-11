//Q1. Create a H2 heading element with text- "Hello JavaScript". Append "from Rohit" to this text using JS.
let heading = document.querySelector("h2");
heading.innerText = heading.innerText + " from Rohit";


// Q2. Create 3 divs wth common class name- "box". Access them & add some unique text to each of them
let divs = document.querySelectorAll(".box");
// divs[0].innerText = "Box 1";
// divs[1].innerText = "Box 2";
// divs[2].innerText = "Box 3";

let index = 1;
for(div of divs)
{
    div.innerText = `Box ${index}`;
    index++;
}