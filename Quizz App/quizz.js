const quizData = [
    {
        question : "What is my name ",
        a: "Gaurav",
        b: "Chaurasia",
        c: "Sakshi",
        d: "Om",
        answer : "a"

    },
    {
        question : "What is my Surname ",
        a: "Pandey",
        b: "Sakshi",
        c: "Chaurasia",
        d: "Om",
        answer : "c"

    },
    {
        question : "What is my Brother's name ",
        a: "Archana",
        b: "Radha",
        c: "Sakshi",
        d: "Om",
        answer : "d"
    },
    {
        question : "What is my  Sister's name ",
        a: "Gaurav",
        b: "Nilesh",
        c: "Sakshi",
        d: "Om",
        answer : "c"
    },
    {
        question : "What is my father's name ",
        a: "Gaurav",
        b: "Sabhajeet",
        c: "Sakshi",
        d: "Om",
        answer : "b"
    }
];

const quiz = document.getElementById("quiz");
const answerELe = document.querySelectorAll(".answer");
//Getting data from questions and answerELe using ID.
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit = document.getElementById("submit");

// current question At 0 index
let currentQuiz = 0; 
let score = 0;

loadQuiz();

function loadQuiz() {
    deSelect();
    const currentQuizData  = quizData[currentQuiz];
    
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;   
}

function getSelected(){
    let answer = undefined;
    answerELe.forEach((answerEl) =>{
        if(answerEl.checked){
            answer = answerEl.id;  //It will return a true value
        }

    });
    return answer;
}

function deSelect(){
    answerELe.forEach((answerEl) =>{
       answerEl.checked = false;

    });
    
}



submit.addEventListener("click" , () =>{
    //check to see the answer
    const answer = getSelected();

    if (answer === quizData[currentQuiz].answer){
        score++;
    }

    
    if(answer ){
        currentQuiz++;
        if(currentQuiz < quizData.length ){
            loadQuiz();
        }else{
            quiz.innerHTML = `<h1>You have scored ${score}/${quizData.length} answers</h1>`
        }
    }
})


