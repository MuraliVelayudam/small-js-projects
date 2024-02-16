const imageEle = document.getElementById('bg-image')


window.addEventListener('scroll',()=>{
    updateImage()
})

function updateImage(){
    imageEle.style.opacity = 1 - window.pageYOffset/700
    imageEle.style.backgroundSize = 160 - window.pageYOffset/12 +"%"
}