// Q1. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
let btn = document.querySelector("#btn");
let body = document.querySelector("body");
let currentColor = "light";

let handler1 = () =>{
    if(currentColor === "light")
    {
        currentColor = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        document.querySelector("p").style.color = "white"
    }
    else{
        currentColor = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        document.querySelector("p").style.color = "black"
    }
    console.log(currentColor);
    
}

btn.addEventListener("click",handler1);