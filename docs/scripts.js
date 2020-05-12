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