function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  destroyBoxes();
  if (amount <= 100 && amount >= 1) {
    for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.background = getRandomHexColor();
    boxes.appendChild(div);
    }
  }
}

function destroyBoxes() {
  boxes.innerHTML = ''
}

const boxes = document.querySelector('#boxes');
const controls = document.querySelector('#controls');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const input = controls.querySelector('input');

createButton.addEventListener('click', () => {
  createBoxes(Number(input.value));
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});


