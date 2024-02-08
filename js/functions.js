
const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const diceImg = document.querySelector('#dice img');

let interval;

const startRolling = () => {
    interval = setInterval(() => {
        diceImg.setAttribute('src', `images/${getRandom(1, 6)}.png`);
        diceImg.style.border = '6px solid rgb(255, 242, 0)';
    }, 100);
};

const stopRolling = () => {
    clearInterval(interval);
    diceImg.style.border = '6px solid black';
};

diceImg.addEventListener('click', () => {
    startRolling();
    setTimeout(stopRolling, 1000);
})
