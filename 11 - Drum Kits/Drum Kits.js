const kits = ["Snare","Kick","Crash","Tom",]

const containerEle = document.querySelector(".container")


kits.forEach((kit) => {
    const btnEle = document.createElement("button");
    btnEle.classList.add('btn')
    containerEle.appendChild(btnEle)
    btnEle.innerText = kit
    btnEle.style.backgroundImage = "url(Pic/"+kit+".png)"

    const audioEle = document.createElement("audio")
    containerEle.appendChild(audioEle)
    audioEle.src = "Audio/"+kit+".mp3"


    btnEle.addEventListener('click',()=>{
        audioEle.play()
    })
    window.addEventListener('keydown',(event)=>{
        if (event.key === kit.slice(0,1).toLowerCase()){
            audioEle.play()
            btnEle.style.transform = "scale(.9)"

            setTimeout(()=>{
                    btnEle.style.transform = "scale(1)"
            },100)
        }
    })
})
