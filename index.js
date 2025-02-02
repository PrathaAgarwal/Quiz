const ques = [
    {
        question: "Which city was declared as India's first 'Smart City' in 2024?",
        options: ["Indore", "Bhopal", "Varanasi", "Chandigarh"],
        correctAnswer: "Indore"
    },
    {
        question: "Which Indian state became the first to achieve 100% vaccination coverage in 2024?",
        options: ["Kerala", "Maharashtra", "Himachal Pradesh", "Uttarakhand"],
        correctAnswer: "Himachal Pradesh"
    },
    {
        question: "Which country signed a Free Trade Agreement (FTA) with India in 2024 to boost bilateral trade?",
        options: ["Japan", "Australia", "United States", "United Kingdom"],
        correctAnswer: "Australia"
    },
    {
        question: "What is the GDP growth forecast for India in 2024 as per the IMF?",
        options: ["4.5%", "5.2%", "6.1%", "7.5%"],
        correctAnswer: "6.1%"
    },
    {
        question: "Which river basin in India was recently designated a UNESCO World Heritage Site in 2024?",
        options: ["Godavari", "Kaveri", "Mahanadi", "Brahmaputra"],
        correctAnswer: "Brahmaputra"
    },
    {
        question: "In 2024, which state became the first in India to legalize cryptocurrency trading?",
        options: ["Goa", "Telangana", "Karnataka", "Kerala"],
        correctAnswer: "Telangana"
    },
    {
        question: "What was the official economic growth rate of India in the fiscal year 2024?",
        options: ["5.5%", "6.3%", "7.0%", "8.2%"],
        correctAnswer: "6.3%"
    },
    {
        question: "Who became the Chief Economic Advisor (CEA) of India in 2024?",
        options: ["V. Anantha Nageswaran", "Krishna Vemuri", "Arvind Subramanian", "Shaktikanta Das"],
        correctAnswer: "V. Anantha Nageswaran"
    },
    {
        question: "Which Indian state has the highest number of UNESCO World Heritage Sites as of 2024?",
        options: ["Madhya Pradesh", "Rajasthan", "Uttarakhand", "Tamil Nadu"],
        correctAnswer: "Rajasthan"
    },
    {
        question: "In 2024, which Indian company became the first to reach a market capitalization of $1 trillion?",
        options: ["Reliance Industries", "Tata Consultancy Services", "Infosys", "HDFC Bank"],
        correctAnswer: "Reliance Industries"
    },
    {
        question: "Which historic event took place in India in 2024 to mark 75 years of independence?",
        options: ["Grand Independence Day Parade at Red Fort", "Launch of National Freedom Memorial", "Inauguration of National Museum of Indian History", "New Delhi Global Leaders Summit"],
        correctAnswer: "Launch of National Freedom Memorial"
    },
    {
        question: "Which Indian state has the largest number of official languages as of 2024?",
        options: ["Nagaland", "Mizoram", "Sikkim", "Goa"],
        correctAnswer: "Nagaland"
    },
    {
        question: "In 2024, India signed a major trade agreement with which continent to strengthen its economic ties?",
        options: ["Europe", "Africa", "Asia", "South America"],
        correctAnswer: "Africa"
    },
    {
        question: "In 2024, which Indian state launched a new 'Green Energy Policy' to become the leader in renewable energy generation?",
        options: ["Gujarat", "Maharashtra", "Tamil Nadu", "Rajasthan"],
        correctAnswer: "Gujarat"
    },
    {
        question: "Which historic Indian monument was declared the 'Most Visited Cultural Monument' in India in 2024?",
        options: ["Taj Mahal", "Qutub Minar", "Red Fort", "Gateway of India"],
        correctAnswer: "Taj Mahal"
    }
];
let index=0;
let score = 0;
const start = document.getElementById("startb");
start.addEventListener("click", startQuiz);
function startQuiz(){
    console.log("button clcked");
    startTimer();
    window.location.href="./quiz.html";
}
let timeLeft=720;
let timer= document.getElementById("timer");
function startTimer(){
const t= setInterval(function(){
    if (timeLeft<0){
        alert("oops! time out");
        localStorage.setItem("quizScore", score);
        window.location.href="result.html";
        clearInterval(t);
    }else{
        const m= Math.floor(timeLeft/60);
        const s= timeLeft%60;
        timer.textContent = `${m}:${s < 10 ? '0' + s : s}`;

        timeLeft--;
    }
}, 1000);
}


function showQues(){
    if (index< ques.length){
    const cur = ques[index];
    const quizcon=document.getElementById("quiz");
    quizcon.innerHTML=`
    <h1>${cur.question}</h1><div class="alloptions">
    <button class="option" onclick="check('${cur.options[0]}')"> ${cur.options[0]}</button>
    <button class="option" onclick="check('${cur.options[1]}')"> ${cur.options[1]}</button>
    <button class="option" onclick="check('${cur.options[2]}')"> ${cur.options[2]}</button>
    <button class="option" onclick="check('${cur.options[3]}')"> ${cur.options[3]}</button></div> `
    }
    else{
        localStorage.setItem("quizScore", score);
        window.location.href = "result.html";
    }
}
function check(selected){
    if (selected === ques[index].correctAnswer){
        score++;
    }else{

    }
    index++;
    showQues();
}

var cursor = document.querySelector(".cursor"); 
var main= document.querySelector(".main");
main.addEventListener("mousemove", function(dets){
    console.log("event listener added");
    gsap.to(cursor,{
         x:dets.x,
         y:dets.y,
         duration:0.1,
         ease: "power1.out",
    })
 });