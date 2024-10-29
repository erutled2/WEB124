/* Eric Rutledge 10/28/2024
    Adapted from https://javascript30.com/
    Fun with HTML5 Canvas
    Modifications and changes:
  Changed const canvas from using querySelector to getElementById
  canvas.height now accounts for the 50 pixel option bar
  Changed defaults for strokeStyle and lineWidth
  Removed hue changing
  background color, brush size, and brush color are now set by the inputs
*/

//const canvas = document.querySelector('#draw');
const canvas = document.getElementById('draw')
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;
canvas.height = window.innerHeight - 50;
// ctx.strokeStyle = '#BADA55';
ctx.strokeStyle = '#ff0000';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
//ctx.lineWidth = 100;
ctx.lineWidth = 50;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
/*let hue = 0;
let direction = true;*/

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  //ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  /*hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }*/

}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

const inputs = document.querySelectorAll('.options input');

function handleUpdate() {
  if (this.name == "background") {
    document.body.style.backgroundColor = this.value;
  } else if (this.name == "size") {
    ctx.lineWidth = this.value;
  } else if (this.name == "color") {
    ctx.strokeStyle = this.value;
  } else {
    console.log("Unknown option \"" + this.name + "\" with value of: " + this.value);
  }
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));