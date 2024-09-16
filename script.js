const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    input.addEventListener('input', (event) => {
        if (index < inputs.length - 1 && event.target.value) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keyup', (event) => {
        if (event.key === 'Backspace' && !input.value && index - 1 >= 0) {
            inputs[index - 1].focus();
        }
    });
});