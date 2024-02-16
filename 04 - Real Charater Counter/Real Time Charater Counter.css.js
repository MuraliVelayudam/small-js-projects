const textAreaEle = document.getElementById("textArea");
const totalCounterEle = document.getElementById("total-Counter");
const remainingCounterEle = document.getElementById("remaining-Counter");

textAreaEle.addEventListener("keyup",()=>{
    updateCounter()
})

updateCounter()

function updateCounter(){
    totalCounterEle.innerText = textAreaEle.value.length
    remainingCounterEle.innerText = textAreaEle.getAttribute('maxLength') - textAreaEle.value.length
}