// Await ko normally execute nhi kr skte thy so islye usko ek async function mai dala humne jo ki getAllData() hai.
// Now the Problem is that for calling the getData function i need to call getAllData function
// So, to resolve this unnessary function call we use IIFE
// IIFE funciton normal function he hote hai and inka koi naam ni hota.
// And ye ek baar he likhe jate hai and jaha likhe jate hai udhr he execute ho jate hai.
// eg:- (func)();


function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

// Without IIFE
async function getAllData(){
       await getData(1);
       await getData(2);
       await getData(3);
}


// With IIFE
(async function (){
       await getData(1);
       await getData(2);
       await getData(3);
}) ();
