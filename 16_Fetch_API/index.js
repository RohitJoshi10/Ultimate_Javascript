// The Fetch API provides an interface for fetching(sending/receiving) resources.
// It uses Request and Response objects.
// The fetch method is used to fetch a resource(data).
// let promise = fetch(url,[options])
// If we don't specify any options in the fetch method than it by default consisder that request as GET request.
// Phele jo data aata tha wo XML formate mai aata tha but ab zaydatar data JSON ki form mai aata hai.

// const URL = "https://cat-fact.herokuapp.com/facts";

// const getFacts = async () =>{
//      console.log("Getting Data....");
//      let response = await fetch(URL);
//      console.log(response); // JSON formate but not actual JS object.
// }

// AJAX is Asynchronous JS & XML
// JSON is JavaScript Object Notation
// json() method: It is aysnchronous method and returns a second promise that resolves with the result of parsing the response body text as JSON. (Input is JSON, output is JS object).
// AJAJ is Asynchronous Javascript and JSON.

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const button = document.querySelector("#btn");

const getFacts = async () =>{
     console.log("Getting Data....");
     let response = await fetch(URL);
     console.log(response); // JSON formate but not actual JS object.
     let data = await response.json();
    //  console.log(data[0].text);
    factPara.innerText = data[0].text;
}

btn.addEventListener("click", getFacts);



// Doing the same thing using Promise Chaining
// function getFacts(){
//     fetch(URL).then((response) =>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//         factPara.innerText = data[0].text;
//     })
// }

// btn.addEventListener("click", getFacts);


// Requests & Response

// HTTP Verbs:- It tells us about which type of requestion we are sending.
// Response Status Code 200 successful, 404 page not found
// click here: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// HTTP response headers also contain details about the 
// responses, such as content type, HTTP status code etc.
// Headers means ki kuch extra info jo hum request k sath behj rhe hai ya fir jo hume response k sath aari h.