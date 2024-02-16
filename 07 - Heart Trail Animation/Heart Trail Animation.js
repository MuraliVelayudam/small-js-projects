const bodyEle = document.querySelector("body");

bodyEle.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;

  const spanEle = document.createElement("span");
  bodyEle.appendChild(spanEle);

  spanEle.style.left = xPos + "px";
  spanEle.style.top = yPos + "px";

  const randomHeart = Math.ceil(Math.random()*100)

  spanEle.style.width = randomHeart+'px'
  spanEle.style.height = randomHeart+'px'

  setTimeout(() => {
    spanEle.remove();
  }, 3000);
});
