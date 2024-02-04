// DOM Targetting
let targetCover = document.querySelector(".target-cover");


// Event Listeners
document.addEventListener("mousemove", (e) => {
    targetCover.style.left = (e.clientX - 35) + 'px'; 
    targetCover.style.top = (e.clientY - 35) + 'px'; 
});

document.addEventListener("mousedown", (e) => {
    targetCover.style.transform = "scale(0.9)";
});

document.addEventListener("mouseup", (e) => {
    targetCover.style.transform = "scale(1)";
});