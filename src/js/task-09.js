function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

btn.addEventListener('click', changeColor);

function changeColor(event) {
  const randomColor = getRandomHexColor();
  bodyEl.setAttribute('style', `background-color: ${randomColor}`);
  colorEl.textContent = `${randomColor}`;
}
