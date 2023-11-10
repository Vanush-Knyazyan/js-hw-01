const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', dragger);

function dragger(event) {
  textEl.setAttribute('style', `font-size: ${inputEl.value}px`);
}
