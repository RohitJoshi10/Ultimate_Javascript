const quizData = [
{
    question: "Which of the following is the client side langage ?",
    a: "Java",
    b: "C",
    c: "Pyhton",
    d: "JavaScript",
    correct: "d"
},
{
    question: "In what year was JavaScript launched ?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "Non of the above",
    correct: "b"
},
{
    question: "What is the correct syntax to create a JavaScript variable?",
    a: "var variable_name;",
    b: "let variable_name;",
    c: "const variable_name;",
    d: "All of the above",
    correct: "d"
},
{
    question: "What is the purpose of the document.write() method?",
    a: "To write a message to the console",
    b: "To write a message to the status bar",
    c: "To write a message to the document",
    d: "To write a message to the user",
    correct: "c"
}

]

let index = 0;
let correct = 0;
let incorrect = 0;
let total = quizData.length;

let questionBox = document.querySelector("#questionBox");
let allInputs = document.querySelectorAll("input[type='radio']");
let submit = document.querySelector("#submit");

const loadQuestions = () =>{
    if(index == total) return quizEnd();
    reset();
    const data = quizData[index];
    questionBox.innerHTML = `${index+1} ${data.question}`;
    allInputs[0].nextElementSibling.innerText = data.a;
    allInputs[1].nextElementSibling.innerText = data.b;
    allInputs[2].nextElementSibling.innerText = data.c;
    allInputs[3].nextElementSibling.innerText = data.d;

}

submit.addEventListener("click", () =>{
    const data = quizData[index];
    const ans = getAnswer();
    if(ans === data.correct){
        correct++;
    }else{
        incorrect++;
    }
    index++;
    loadQuestions();
})

const getAnswer = () =>{
    let ans;
    allInputs.forEach(
        (inputE1) => {
            if(inputE1.checked){
                ans = inputE1.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputE1) => {
            inputE1.checked = false;
        }
    )
}

const quizEnd = () => {
    document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100">Congratulations🎉 You have scored ${correct} out of ${total}</h3>
    </div>
    `
}
loadQuestions(index);
