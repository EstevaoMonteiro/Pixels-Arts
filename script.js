const color = document.getElementsByClassName('color');
const pixel = document.querySelector('#pixel-board');
const clearBoard = document.getElementById('clear-board');
const resetBoard = document.getElementsByClassName('pixel');
const SelectedOn = document.querySelector('#color-palette');
const generateBoard = document.getElementById('generate-board');

function SelectedTarget(start) {
  for (let index = 0; index < color.length; index += 1) {
    color[index].classList.remove('selected');
    start.target.classList.add('selected');
  }
}

SelectedOn.addEventListener('click', SelectedTarget);

function paintPixel(event) {
  const changeColor = document.querySelector('.selected');
  const element = event.target;
  element.style.backgroundColor = changeColor.id;
}
pixel.addEventListener('click', paintPixel);

function repaint() {
  for (let index = 0; index < resetBoard.length; index += 1) {
    resetBoard[index].style.backgroundColor = 'white';
  }
}

clearBoard.addEventListener('click', repaint);

function pixelLimit() {
  let pixelSum = document.getElementById('board-size').value;
  if (pixelSum === '') {
    alert('Board inválido!');
  } else if (pixelSum < 5) {
    pixelSum = 5;
  } else if (pixelSum > 50) {
    pixelSum = 50;
  }
  return pixelSum;
}

function pixelPlus() {
  pixel.innerHTML = '';
  const Limitation = pixelLimit();
  for (let index = 0; index < Limitation * Limitation; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.className = 'pixel';
    pixel.appendChild(createDiv);
  }
}
generateBoard.addEventListener('click', pixelPlus);
