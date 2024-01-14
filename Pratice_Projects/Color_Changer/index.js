let body = document.querySelector("body");
let buttons = document.querySelectorAll(".button"); // It will give me a node list so i can apply forEach here
let span = document.querySelector("#sp");

const handler = (e)=>{
    let color = e.target.id;
    if(color === "grey"){
        body.style.backgroundColor = color;
    }
    else if(color === "white"){
        body.style.backgroundColor = color;
    }
    else if(color === "blue"){
        body.style.backgroundColor = color;
    }
    else{
        body.style.backgroundColor = color;   
    }
}

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener("click", handler);
});

