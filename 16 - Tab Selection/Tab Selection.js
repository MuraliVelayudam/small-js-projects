const tabsEle = document.querySelector('.tabs')
const btnEle = document.querySelectorAll('button')
const contentEle = document.querySelectorAll('.content')

tabsEle.addEventListener('click', (event) => {
    const id = event.target.dataset.id

    if (id){
        btnEle.forEach((btn)=>{
            btn.classList.remove("live")
        })
        event.target.classList.add("live")
        contentEle.forEach((content)=>{
            content.classList.remove("live")
        })
        const element = document.getElementById(id)
        element.classList.add("live")
    }



})