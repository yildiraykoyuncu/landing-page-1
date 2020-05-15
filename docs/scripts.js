const panelsOpenBtn = document.querySelector(".panels-open-btn");
const panelsCloseBtn = document.querySelector(".panels-close-btn");
const navPanels = document.querySelectorAll(".nav-panels");

panelsOpenBtn.addEventListener("click", () => {
    // add visible class
    navPanels.forEach(el => {
        el.classList.add("visible")
    })
});

panelsCloseBtn.addEventListener("click", () => {
    // remove visible class
    navPanels.forEach(el => {
        el.classList.remove("visible");
    })
});

const randomVisibility = () => {
    return Math.random() < 0.5 ? "visibility: hidden" : "visibility: visible"
};

const text = document.getElementById("text");
const textArr = text.innerText.split("");
const newEl = document.createElement("h1")
newEl.classList.add("text1");
newEl.classList.add("overlay");
newEl.innerHTML = `${textArr.map(letter => `<span style="${randomVisibility()}">${letter}</span>`).join("")}`

document.getElementById("wrapper1").appendChild(newEl);