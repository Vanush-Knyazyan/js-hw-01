const inputEl = document.querySelector('#validation-input');
const dataLength = inputEl.getAttribute('data-length');

console.log(dataLength);

inputEl.addEventListener('blur', checkDataLengthInput);

function checkDataLengthInput(event) {
  if (Number(inputEl.dataset.length) === Number(inputEl.value.length)) {
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.add('invalid');
  }
}
