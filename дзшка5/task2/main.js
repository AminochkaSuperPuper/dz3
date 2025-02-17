let button = document.getElementById('button');
let counter = document.getElementById('counter');
let intervalId;

reset();

button.addEventListener("click", function(event) {
    reset();
});

function start() {
    intervalId = setInterval(() => {
        let count = parseInt(counter.textContent);
        if (count <= 0) {
            clearInterval(intervalId);
            counter.textContent = 'Время вышло';
        } else {
            counter.textContent = (count - 1).toString();
        }
    }, 1000);
}

function reset() {
    counter.textContent = 10;
    clearInterval(intervalId);
    start();
}