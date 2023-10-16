const counter = document.getElementById('numero');
const decreaseButton = document.querySelector('.buttons .btn:nth-child(1)');
const resetButton = document.querySelector('.buttons .btn:nth-child(2)');
const increaseButton = document.querySelector('.buttons .btn:nth-child(3)');

let count = 0;

function decrease() {
  count--;
  counter.textContent = count;
}

function reset() {
  count = 0;
  counter.textContent = count;
}

function increase() {
  count++;
  counter.textContent = count;
}

decreaseButton.addEventListener('click', decrease);
resetButton.addEventListener('click', reset);
increaseButton.addEventListener('click', increase);