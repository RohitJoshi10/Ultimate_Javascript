const clock = document.querySelector("#clock");

let date = new Date();
// let hours = date.getHours() % 12 || 12;
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let finalTime = hours + ":" + minutes + ":" + seconds
// console.log(finalTime);

setInterval(() =>{
   let date = new Date();
   clock.innerHTML = date.toLocaleTimeString();
}, 1000)
