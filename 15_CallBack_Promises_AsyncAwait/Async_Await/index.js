// The thing is, chaining promises together just like callbacks can get pretty bulky and confusing. 
// That's why Async and Await was brought about.

// async function always return a promise.
// async function myFunc(){...}
// await pauses the execution of its surrounding async function until the promise is settled.
// eg:-
// async function hello(){
//     console.log("hello");
// }

// Example of async-await function
// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("Weather data");
//              resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData(){
//     await api(); // 1st Call
//     await api(); // 2nd Call
    
// }



// Asynce-Await function in getData
function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

// Await ko normally execute nhi kr skte thy so islye usko ek async function mai dala humne jo ki getAllData() hai.
async function getAllData(){
       await getData(1);
       await getData(2);
       await getData(3);
}