let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let timer = document.getElementById('timer');
let intervalId;

timer.textContent = 0;

startButton.addEventListener('click', () => {
    intervalId = setInterval(() => {
        timer.textContent = (parseInt(timer.textContent) + 1).toString();
    }, 1000);
});

stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
});

resetButton.addEventListener('click', () => {
    clearInterval(intervalId);
    timer.textContent = 0;
});