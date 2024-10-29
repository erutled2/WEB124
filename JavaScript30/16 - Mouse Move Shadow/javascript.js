/* Eric Rutledge 10/28/2024
    Adapted from https://javascript30.com/
    Mouse Move Shadow
    Modifications and changes:
	Everything now has a color changing effect (This was a terrible idea)
*/
const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500; // 500px
let colorTracker = 0;

function getColorValue(divider) {
    return Math.sin(colorTracker/divider)*255;
}

function shadow(e) {
    colorTracker++;
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    document.body.style.backgroundColor = `rgb(${Math.sin((x+y)/500)*255}, ${255-Math.sin((x+y)/250)*255},${255-Math.sin((x+y)/1000)*255})`

    /*text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;*/
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(${getColorValue(20)},${getColorValue(40)},${getColorValue(50)},0.7),
    ${-xWalk}px ${yWalk}px 0 rgba(${getColorValue(30)},${getColorValue(60)},${getColorValue(120)},0.7),
    ${yWalk}px ${-xWalk}px 0 rgba(${getColorValue(100)},${getColorValue(50)},${getColorValue(25)},0.7),
    ${-yWalk}px ${xWalk}px 0 rgba(${getColorValue(50)},${getColorValue(100)},${getColorValue(75)},0.7)
  `;

}

hero.addEventListener('mousemove', shadow);