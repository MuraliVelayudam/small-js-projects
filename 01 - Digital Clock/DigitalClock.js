let hourEle = document.getElementById("hours");
let minuesEle = document.getElementById("minutes");
let secondsEle = document.getElementById("seconds");
let ampmELe = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let ampm = "AM";

  if (h > 12) {
    h -= 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEle.innerText = h;
  minuesEle.innerText = m;
  secondsEle.innerText = s;
  ampmELe.innerText = ampm;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
