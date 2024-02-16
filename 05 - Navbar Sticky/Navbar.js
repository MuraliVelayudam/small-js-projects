const navbarEle = document.querySelector('.navbar')
const bottomEle = document.querySelector('.bottom-container')

window.addEventListener('scroll',()=>{
if (window.scrollY > bottomEle.offsetTop - navbarEle.offsetHeight -50){
    navbarEle.classList.add('active')
}else {
    navbarEle.classList.remove('active')
}
})