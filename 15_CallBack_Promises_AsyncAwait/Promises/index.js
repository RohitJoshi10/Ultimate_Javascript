// A promise, in our context, is something which will take some time to do. There are two possible outcomes of a promise:
// We either run and resolve the promise, or
// Some error occurs along the line and the promise is rejected
// Promises came along to solve the problems of callback functions. 
// A promise takes in two functions as parameters. That is, resolve and reject. Remember that resolve is success, and reject is for when an error occurs.

// Promises is for "eventual" completion of task. It is an object in JS.
// It is a solution to callback hell.
// It takes two parameter resolve and reject
// resolve & reject are callbacks provided by JS.
// let promise = new Promise((resolve, reject)=>{...})

// Promise have 3 states:- pending, fulfilled(resolved), rejected.
// eg:- amazon se abhi kuch message ni aya ki oder deliver hora h ya ni so this is pending state.
//      amazon se order aa gya so this is fulldilled state.
//      amazon ne order cancle kr dia so this is rejected state.
// Pending: the result is undefined.
// Resolved: the result is a value(fulfilled)  resolve(result)
// Rejected: the result is an error object     reject(error)
// NOTE:- Promise has state(pending, fulfilled) & some result (result for resolve & error for reject)

let oldpromise = new Promise((resolve, reject)=>{
    console.log("I am a promise");
    resolve("Success");
})

// Promise hum banate nhi hai. Basically jab hum API se kuch request krte hai toh wo hume ek promise retun krta hai. API directly data nhi dete wo promise deta hai.
// And hum bas uss Promise ko handle krte hai.

function getData(dataId, getNextData){
     return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("Sucessfully compeleted")
            if(getNextData){
                getNextData();
            }
        }, 5000);
     })
}


// Now Promise ko resolve ya fir reject hum toh nhi krnege wo toh koi aur krega.
// Hamara kaam ye hai ki hum promise ko kaise use krenge.
// Ab Promise hume return hua ya toh wo fulfilled hoga ya fir reject hoga.
// Dono he case mai hume kuch kaam karana hai. 
// So, usss case mai hum use krte hai then and catch ka.
// then use hota hai jab promise fullfilled ho jaye.
// catch use hota hai jab promise reject ho jaye.

// Promise:- .then() & .catch()
// promise.then( (res) => {..})
// promise.catch( (err) =. {..})

const getPromise = () =>{
   return new Promise((resolve, reject) =>{
        console.log("I am a Promise");
        resolve("success");
        reject("error")
    })
    
}


let promise = getPromise();
promise.then((res)=>{
    console.log("Promise resolved successfully", res);
});
promise.catch((err)=>{
    console.log("Promise get rejected",err);
});