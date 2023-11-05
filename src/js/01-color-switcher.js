
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyGetToWork = () => document.querySelector('body').style.backgroundColor = `${getRandomHexColor()}`
let timeUpdateColor = null;
startBtn.addEventListener('click', () => {
    bodyGetToWork();
    timeUpdateColor = setInterval(bodyGetToWork, 1000);
    startBtn.style.pointerEvents = 'none';
})
stopBtn.addEventListener('click', () => {
    clearInterval(timeUpdateColor);
    startBtn.style.pointerEvents = 'auto';
})
