const containerEle = document.querySelector('.container')


for(let i=0;i<1000;i++){
    const colorEle = document.createElement('div');
    colorEle.classList.add('color-container')
    containerEle.appendChild(colorEle)
    
}

const colorContainerEles = document.querySelectorAll('.color-container')


function generateColor(){
    colorContainerEles.forEach((colorContainerEle)=>{
        const newColor = randomColor()
        colorContainerEle.style.backgroundColor = "#" + newColor
        colorContainerEle.innerText = "#" + newColor
    })
}

generateColor()



function randomColor(){
    let char = "0123456789abcdef"
    let len_color = 6
    let colorCode = ""

    for(let i = 0;i<len_color;i++){
        let randomNum = Math.floor(Math.random()*char.length)
        colorCode+= char.substring(randomNum,randomNum+1)
    }
    console.log(colorCode)
    return colorCode
}

randomColor()