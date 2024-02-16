const containerEle = document.querySelector(".container")


const careers = ["YouTuber", "WebDeveloper", "Freelancer", "Instructor"]


let careerIndex = 0
let charIndex = 0



function updateText() {
    charIndex++;
    containerEle.innerHTML = `
    <h1>I am ${careers[careerIndex].slice(0, 1) === 'I' ? "an" : "a"} ${careers[careerIndex].slice(0, charIndex)}</h1>
    `

    if (charIndex === careers[careerIndex].length) {
        charIndex = 0
        careerIndex++
    }

    if (careerIndex === careers.length) {
        careerIndex = 0;
    }

    setTimeout(updateText, 400)
}

updateText()