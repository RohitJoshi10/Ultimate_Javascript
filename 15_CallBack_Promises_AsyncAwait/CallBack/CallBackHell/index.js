// Callback Hell:- Nested callbacks stacked below one another forming a pyramid structure.
// This style of programming becomes difficult to understand and manage.
function getData(dataId){
    // I want that it should send my data after  2s
    setTimeout(()=>{
        console.log("data", dataId);
    }, 2000);
    
}


// We want ki phele  1 return ho then 2s k delay ho then 2 return ho then 2s ka delay ho then 3 return ho.
// eg:- Instagram:- firstly it will search for the username if found then only it will search for password.
getData(1);
getData(2);
getData(3);


// Now we can do this by this way

function getNum(num, getNextNum){
    // 2s
    setTimeout(()=>{
        console.log("number:", num);
        if(getNextNum){
            getNextNum();
        }
    }, 2000);
}

// This is too complex to understand and this nested Callback is called as callback hell.
console.log("getting data1...")
getNum(1, ()=>{
    console.log("getting data2...")
    getNum(2, ()=>{
        console.log("getting data3...")
        getNum(3, ()=>{
            console.log("getting data4...")
            getNum(4);
        });
    });
});









// // Callback Hell wale code ko ab Promise Chaning k help se krenge'
// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("data", dataId);
//             resolve("success");
//         }, 3000);
//     });
// }

// // Promis Chain
// // getData(1).then((res) => {
// //     console.log(res);
// //     getData(2).then(()=>{
// //         console.log(res);
// //     })
// // })

// console.log("getting data1...")
// getData(1)
// .then((res) => {
//     console.log("getting data2...")
//     return getData(2);
// })
// .then((res) => {
//     console.log("getting data3...")
//     return getData(3);
// })
// .then((res)=>{
//     console.log(res);
// });








// // Callback Hell wale code ko ab async-await ki help se krenge
// Asynce-Await function in getData
// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }

// async function getAllData(){
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data...");
//     await getData(3);
// }