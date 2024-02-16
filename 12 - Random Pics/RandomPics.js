const mainEle = document.querySelector(".main-container");
const btnEle = document.querySelector(".btn");

btnEle.addEventListener("click", () => {
  num = 10;
  updateImage();
});

function updateImage() {
  for (let i = 0; i < num; i++) {
    const imageEle = document.createElement("img");
    imageEle.src = `https://picsum.photos/200/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    mainEle.appendChild(imageEle);
  }
}
