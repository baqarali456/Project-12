const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const question = document.getElementById('question');
const input = document.getElementById('input');
const form = document.getElementById('form');
const scores = document.getElementById('score');
const btn = document.querySelector('.btn');

question.innerText = `What is ${num1} Multiply by ${num2}?`

const correctanswer = num1 * num2;
let score = localStorage.getItem('score');
// if(!score){
//     score = 0;
// }
scores.innerHTML = `score: ${score}`

form.addEventListener("submit", ()=>{
    let userans = input.value;
    userans = Number.parseInt(userans);

    if(userans === correctanswer){
        score++;
        console.log(score)
        updatelocal();
    }
    else{
        score--;
        console.log(score)
        updatelocal();
    }
    
    
});
function updatelocal(){
   localStorage.setItem('score',score);
}


