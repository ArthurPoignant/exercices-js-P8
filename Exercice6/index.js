let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        // Check for division by zero before evaluating
        if (display.value.includes('/0')) {
            throw new Error('Division by zero');
        }
        let result = eval(display.value);
        if (!isFinite(result)) {
            throw new Error('Division by zero');
        }
        display.value = result;
    } catch (error) {
        if (error.message === 'Division by zero') {
            display.value = 'Division by zero is not allowed';
        } else {
            display.value = 'Error';
        }
    }
}
