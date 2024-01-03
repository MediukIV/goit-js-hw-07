function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  destroyBoxes();
  for (let i = 0; i < amount; i++) {
    if (amount <= 100 && amount >= 1) {
    const div = document.createElement('div');
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.background = getRandomHexColor();
    div.style.marginRight = `16px`;
    document.querySelector('#boxes').appendChild(div);
    }
  }
}

function destroyBoxes() {
  let boxes = document.querySelector('#boxes');
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}

const controls = document.querySelector('#controls');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const input = controls.querySelector('input');

// const divBoxesEl = document.getElementById('boxes');
// divBoxesEl.style.display = 'flex';
// divBoxesEl.style.flexWrap = 'wrap';
// divBoxesEl.style.alignItems = 'flex-start';
// divBoxesEl.style.marginTop = '30px';
// divBoxesEl.style.rowGap = '16px';
// divBoxesEl.style.backgroundColor = '#F6F6FE';
// divBoxesEl.style.padding = '32px';
// divBoxesEl.style.margin = '24px';

createButton.addEventListener('click', () => {
  createBoxes(Number(input.value));
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});


