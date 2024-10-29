/* Eric Rutledge 10/28/2024
	Adapted from https://javascript30.com/
	JS and CSS Clock
	Modifications and changes:
	Transforms now include translation for proper positioning
    Added gears to rotate alongside the hands
    Added seconds as the total amount of seconds to avoid the rewind effect when going from 360 to 0
    Added random tick sounds whenever the second hand moves
*/

const sounds = [];

for (let i = 1; i <= 16; i++) {
    sounds.push(new Audio(`sounds/tick${i}.mp3`));
}

const secondHand = document.getElementById('second-hand');
const minsHand = document.getElementById('min-hand');
const hourHand = document.getElementById('hour-hand');
const fullGear = document.getElementById('full-gear');
const halfGear = document.getElementById('half-gear');
const smallGear = document.getElementById('small-gear');

// -1 ensures initalization will set rotations
const initialDate = new Date();
let seconds = initialDate.getSeconds() + initialDate.getMinutes()*60 + initialDate.getHours()*3600
let prevMin = -1;
let prevHour = -1;

function setDate() {
    //const now = new Date();

    sounds[Math.floor(Math.random()*sounds.length)].play(); // requires user interaction with page before being able to play

    //const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `translate(0, -50%) rotate(${secondsDegrees}deg)`;
    fullGear.style.transform = `translate(-50%, -50%) rotate(${secondsDegrees}deg)`;

    //const mins = now.getMinutes();
    const mins = Math.floor(seconds/60);
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `translate(0, -50%) rotate(${minsDegrees}deg)`;
    if (mins !== prevMin) {
        halfGear.style.transform = `translate(-50%, -50%) rotate(${-mins*45}deg)`;
        prevMin = mins;
    }

    //const hour = now.getHours();
    const hour = Math.floor(seconds/3600);
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `translate(0, -50%) rotate(${hourDegrees}deg)`;
    if (hour !== prevHour) {
        smallGear.style.transform = `translate(-50%, -50%) rotate(${hour*90}deg)`;
        prevHour = hour;
    }

    seconds++;
}

setInterval(setDate, 1000); // Updates every second

setDate(); // Initializes