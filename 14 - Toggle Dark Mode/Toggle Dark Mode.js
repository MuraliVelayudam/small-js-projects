const inputEle = document.querySelector(".input");
const bodyEle = document.querySelector("body");
const modeEle = document.querySelector(".mode");

inputEle.checked = JSON.parse(localStorage.getItem("dark"))

function updateMode() {
  if (inputEle.checked) {
    bodyEle.style.background = "#212121";
    modeEle.innerText = "Dark Mode";
    modeEle.style.color = "white";
  } else {
    bodyEle.style.background = "white";
    modeEle.innerText = "Light Mode";
    modeEle.style.color = "black";
  }
}

inputEle.addEventListener("input", () => {
  updateMode();
  updateStorage()
});


function updateStorage(){
  localStorage.setItem("dark",JSON.stringify(inputEle.checked))
}
