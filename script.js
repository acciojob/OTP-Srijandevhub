//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.code-container .code');

    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (input.value.length > 0) {
                input.value = input.value.slice(0, 1);  // Ensure only one character
                // Move to the next input field
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                if (input.value === '' && index > 0) {
                    // Move focus to the previous input field
                    inputs[index - 1].focus();
                } else {
                    input.value = '';  // Clear the current input field
                }
            }
        });

        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const pasteData = e.clipboardData.getData('text');
            const digits = pasteData.match(/\d/g);
            if (digits) {
                for (let i = 0; i < digits.length && index + i < inputs.length; i++) {
                    inputs[index + i].value = digits[i];
                }
                if (index + digits.length < inputs.length) {
                    inputs[index + digits.length].focus();
                }
            }
        });

        input.addEventListener('focus', () => {
            input.select();  // Auto-select the text when focusing
        });
    });
});