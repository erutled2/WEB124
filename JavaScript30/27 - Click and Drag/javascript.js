/* Eric Rutledge 10/28/2024
    Adapted from https://javascript30.com/
    Click and Drag
    Modifications and changes:
    Each item div is now procedurally added as the user reaches the end of the scroll
    Div's recieve a random color
*/

const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;
let count = 0;

function newDivElement() {
    count++;
    const newDiv = document.createElement("div");
    newDiv.textContent = count;
    newDiv.style.background = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    newDiv.classList.add("item");
    newDiv.classList.add(`item${count}`);
    slider.appendChild(newDiv);
}

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
    if ((slider.scrollWidth-slider.clientWidth)-slider.scrollLeft <= 200) {
        newDivElement();
    }
});

// Initial elements
for (let i = 1; i <= 10; i++) {
    newDivElement();
}