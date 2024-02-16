const formELe = document.getElementById('form')
const inputEle = document.getElementById('input')
const scoreEle = document.getElementById('score')
const questionEle = document.getElementById('question')

const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

questionEle.innerText = `What is ${num1} multiply by ${num2}?`
const correntAns = num1*num2

let score = JSON.parse(localStorage.getItem('score'))
if (!score){
    score = 0
}
scoreEle.innerText =`Score: ${score}`

formELe.addEventListener('submit',()=>{
    const userInput = +inputEle.value

    if (userInput === correntAns){
        score++
        updateScore()
    }
    else{
        score--
        updateScore()
    }
})

let updateScore =()=> localStorage.setItem('score',JSON.stringify(score))




