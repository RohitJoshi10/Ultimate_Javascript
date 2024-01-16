// This will be give me result as--
// fetching data1....
// fetching data2....
// some data1
// success
// some data2
// success

// function asyncFunc1(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("some data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("some data2");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("fetching data1....");
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
// })

// console.log("fetching data2....");
// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// })


// But i want ki phele data 1 fetch hoye then data2
// uske liye hum chaning krenge means ki ek then k ander dursa then.

// Promise Chaning
// fetching data1....
// some data1
// success
// fetching data2....
// some data2
// success

function asyncFunc1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data1");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data2");
            resolve("success");
        }, 4000);
    });
}

// console.log("fetching data1....");
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("fetching data2....");
//     let p2 = asyncFunc2();
//     p2.then((res)=>{
//       console.log(res);
//    });
// });

// The above code in simple way can be written as:
console.log("fetching data1....");
asyncFunc1().then((res)=>{
    console.log("fetching data2....");
    asyncFunc2().then((res)=>{});
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


// Above Promis Chain can be written as this way:
// getData(1)
// .then((res) => {
//     return getData(2);
// })
// .then((res) => {
//     return getData(3);
// })
// .then((res)=>{
//     console.log(res);
// });

// callback hell
// getData(1, ()=>{
//     console.log("getting data2....");
//     getData(2, () => {
//         console.log("getting data3...");
//         getData(3, () =>{
//             console.log("getting data4...");
//             getData(4);
//         });
//     });
// });
