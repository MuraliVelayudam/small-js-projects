const nextEle = document.querySelector(".next");
const prevEle = document.querySelector(".prev");
const imageEle = document.querySelector(".image-container");
const allimgEle = document.querySelectorAll("img");

let currentImage = 1;
let timeout;
nextEle.addEventListener("click", () => {
  currentImage++;
  clearTimeout(timeout);
  updateImage();
});

prevEle.addEventListener("click", () => {
  currentImage--;
  clearTimeout(timeout);
  updateImage();
});

updateImage();

function updateImage() {
  if (currentImage > allimgEle.length) {
    currentImage = 1;
  } else if (currentImage < 1) {
    currentImage = allimgEle.length;
  }
  imageEle.style.transform = `translateX(-${(currentImage - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currentImage++;
    updateImage();
  }, 3000);
}
