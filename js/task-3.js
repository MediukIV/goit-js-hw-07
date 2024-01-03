const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', handleInputChange);

function handleInputChange(e) {
  const trimmedValue = e.currentTarget.value.trim();
  textOutput.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
}