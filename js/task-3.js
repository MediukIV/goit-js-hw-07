const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', handleInputChange);

function handleInputChange(e) {
  textOutput.textContent = e.currentTarget.value;
  if (e.currentTarget.value.trim() === '') {
    textOutput.textContent = 'Anonymous';
  }
}