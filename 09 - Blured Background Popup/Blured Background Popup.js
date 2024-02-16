const containerEle = document.querySelector('.main-container')
const btnEle = document.querySelector(".btn")
const popEle = document.querySelector(".popup-container")
const closeEle = document.querySelector('.close')




btnEle.addEventListener("mouseover",(event)=>{
const x = event.pageX - btnEle.offsetLeft
const y = event.pageY - btnEle.offsetTop

btnEle.style.setProperty("--xPos",x+'px')
btnEle.style.setProperty("--yPos",y+'px')
})

btnEle.addEventListener("click",()=>{
containerEle.classList.add('active')
popEle.classList.remove("active")
})

closeEle.addEventListener('click', (event)=>{
    popEle.classList.add("active")
    containerEle.classList.remove('active')
})