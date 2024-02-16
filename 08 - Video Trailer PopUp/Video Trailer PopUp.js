const btnEle = document.querySelector('.btn')
const closeEle = document.querySelector('.close')
const trailerEle = document.querySelector('.trailer-container')
const videoEle = document.querySelector('video')
const spanEle = document.querySelector('span')


btnEle.addEventListener("mouseover",(event)=>{
    const x = event.pageX - btnEle.offsetLeft
    const y = event.pageY - btnEle.offsetTop
    
    btnEle.style.setProperty("--xPos", x+"px")
    btnEle.style.setProperty("--yPos", y + "px")

    spanEle.style.zIndex = 0
    })

btnEle.addEventListener('click',()=>{
    trailerEle.classList.remove('active')
})

closeEle.addEventListener('click',()=>{
    trailerEle.classList.add('active')
    videoEle.pause()
    videoEle.currentTime = 0
})
