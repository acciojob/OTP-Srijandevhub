const codes = document.querySelectorAll('.code');

// Function to move focus to the next input
function moveToNextInput(currentInput, nextInput) {
  if (currentInput.value.length === 1) {
    nextInput.focus();
  }
}

// Function to move focus to the previous input
function moveToPreviousInput(currentInput, previousInput) {
  if (currentInput.value === '') {
    previousInput.focus();
  }
}

codes.forEach((input, index) => {
  // Event for typing in the input
  input.addEventListener('input', () => {
    if (input.value.length === 1 && index < codes.length - 1) {
      moveToNextInput(input, codes[index + 1]);
    }
  });

  // Event for handling backspace
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (index > 0) {
        moveToPreviousInput(input, codes[index - 1]);
      }
    }
  });

  // Set focus on the first input when the page loads
  if (index === 0) {
    input.focus();
  }
});