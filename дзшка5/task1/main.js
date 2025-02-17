let button = document.getElementById('button');
let counter = document.getElementById('counter');

button.addEventListener("click", function(event) {
    let count = parseInt(counter.textContent);
    if (count >= 15) {
        button.disabled = true;
        // document.querySelector('.button').style.disabled = true;
        alert('Превышено количество кликов!!!');
    } else {
        counter.textContent = (count + 1).toString();
    }
});