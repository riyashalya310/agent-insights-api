const express=require("express");
const app=express();
app.use(express.json());

// app.use(cors({
//     origin: 'http://localhost:3000'
// }))


const jsonData=[
    {
        question: "What is the capital of France?",
        answer: "Paris",
        options: ["Paris","Rome","Berlin","Madrid"],
    },
    {
        question: "Who wrote the famous play 'Romeo and Juliet'?",
        answer: "William Shakespeare",
        options: ["William Shakespeare","Charles Dickens","Jane Austen","Leo Tolstoy"],
    },
    {
        question: "What is the chemical symbol for water?",
        answer: "H2O",
        options: ["H2O","CO2","NaCl","O2"],
    },
    {
        question: "What is the largest planet in our solar system?",
        answer: "Jupiter",
        options: ["Earth","Jupiter","Mars","Saturn"],
    },
    {
        question: "Who painted the Mona Lisa?",
        answer: "Leonardo da Vinci",
        options: ["Pablo Picasso","Vincent van Gogh","Leonardo da Vinci","Michelangelo"],
    },
    {
        question: "What is the capital of Japan?",
        answer: "Tokyo",
        options: ["Tokyo","Beijing","Seoul","Bangkok"],
    },
    {
        question: "What is the tallest mammal in the world?",
        answer: "Giraffe",
        options: ["Elephant","Giraffe","Hippopotamus","Rhinoceros"],
    },
    {
        question: "Who is known as the 'Father of Computers'?",
        answer: "Charles Babbage",
        options: ["Isaac Newton","Albert Einstein","Charles Babbage","Thomas Edison"],
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answer: "Mars",
        options: ["Venus","Mars","Jupiter","Mercury"],
    },
    {
        question: "What is the chemical symbol for gold?",
        answer: "Au",
        options: ["Au","Ag","Pt","Cu"],
    }
]

app.get('/questions',(request,response)=>{
    response.send({jsonData});
})

app.listen(3000,(request,response)=>{
    console.log("console is running")
})