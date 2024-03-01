// Async JS Programming
// Callbacks, Promises, Async & Await

// Problem Statememt
/*
In the output, I can see that I only see Rohit and Shruti, but not Vishnu. 
This is because while the getDatas function is executing, it waits for 1 second. 
Then the createData function is called, which waits for 2 seconds before pushing the data into the array. 
During these 2 seconds, the getDatas function completes its execution and prints Rohit and Shruti because Vishnu hasn't been pushed into the datas array yet.
To solve this problem, we need to understand Asynchronous Programming. In Asynchronous Programming, we have callbacks, Promises, and Async-Await.
*/

const datas = [
  { name: "Rohit", Profression: "Software Engineer" },
  { name: "Shruti", Profression: "Software Engineer" },
];

function getDatas() {
  setTimeout(() => {
    let output = "";
    datas.forEach((datas, index) => {
      output += `<li>${datas.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createdata(newdata) {
  setTimeout(() => {
    datas.push(newdata);
  }, 2000);
}

getDatas();

createdata({ name: "Vishnu", Profression: "Software Engineer" });

// Callbacks
/*
Once i have pushed data in my datas array then, I will call my callback function, which is the getData function.
*/

const datas = [
  { name: "Rohit", Profression: "Software Engineer" },
  { name: "Shruti", Profression: "Software Engineer" },
];

function getDatas() {
  setTimeout(() => {
    let output = "";
    datas.forEach((datas, index) => {
      output += `<li>${datas.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createdata(newdata, callback) {
  setTimeout(() => {
    datas.push(newdata);
    callback();
  }, 2000);
}

createdata({ name: "Vishnu", Profression: "Software Engineer" }, getDatas);

// Promises
/*
A Promise takes two things, a reject and a resolve. If everything is fine, we use resolve, and if something goes wrong, we use reject. 
We handle these reject and resolve outcomes within the Promise.
In the case of resolve, we call our getDatas function and execute it inside the then block. We can also handle errors using catch.
*/

const datas = [
  { name: "Rohit", Profression: "Software Engineer" },
  { name: "Shruti", Profression: "Software Engineer" },
];

function getDatas() {
  setTimeout(() => {
    let output = "";
    datas.forEach((datas, index) => {
      output += `<li>${datas.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createdata(newdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newdata);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("Kuch toh gadbad hai...🫣");
      }
    }, 2000);
  });
}

createdata({ name: "Vishnu", Profression: "Software Engineer" })
  .then(getDatas)
  .catch((error) => console.log(error));

// Async-Await
/*
I have made my function async. 
Now, when await is used in front of a function, it will execute, and the subsequent functions or statements will not execute until it finishes its execution. 
await works only when my function is async.
*/
const datas = [
  { name: "Rohit", Profression: "Software Engineer" },
  { name: "Shruti", Profression: "Software Engineer" },
];

function getDatas() {
  setTimeout(() => {
    let output = "";
    datas.forEach((datas, index) => {
      output += `<li>${datas.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createdata(newdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newdata);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("Kuch toh gadbad hai...🫣");
      }
    }, 2000);
  });
}

async function start() {
  await createdata({ name: "Vishnu", Profression: "Software Engineer" });
  getDatas();
}

start();
