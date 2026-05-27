// 1. DOM Element Selection
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultText = document.getElementById('resultText');

// Helper function to safely read, parse, and validate values
function getInputs() {
    const val1 = num1Input.value;
    const val2 = num2Input.value;

    // Extension Challenge: Input Validation Check
    if (val1 === '' || val2 === '') {
        resultText.textContent = "Error: Empty Field!";
        resultText.style.color = "#ff3333";
        return null;
    }

    // Reset text color to white if values are valid
    resultText.style.color = "#ffffff";

    // Type Conversion via parseFloat to prevent "5 + 3 = 53" string concatenation
    return {
        n1: parseFloat(val1),
        n2: parseFloat(val2)
    };
}

// 2. Event Handling & DOM Manipulation for Operations

// Addition Button
document.getElementById('addBtn').addEventListener('click', function() {
    const inputs = getInputs();
    if (inputs !== null) {
        const sum = inputs.n1 + inputs.n2;
        resultText.textContent = 'Result: ' + sum;
    }
});

// Subtraction Button (Extension Challenge)
document.getElementById('subBtn').addEventListener('click', function() {
    const inputs = getInputs();
    if (inputs !== null) {
        const difference = inputs.n1 - inputs.n2;
        resultText.textContent = 'Result: ' + difference;
    }
});

// Multiplication Button (Extension Challenge)
document.getElementById('mulBtn').addEventListener('click', function() {
    const inputs = getInputs();
    if (inputs !== null) {
        const product = inputs.n1 * inputs.n2;
        resultText.textContent = 'Result: ' + product;
    }
});

// Division Button (Extension Challenge)
document.getElementById('divBtn').addEventListener('click', function() {
    const inputs = getInputs();
    if (inputs !== null) {
        if (inputs.n2 === 0) {
            resultText.textContent = "Error: Cannot divide by 0";
            resultText.style.color = "#ff3333";
        } else {
            const quotient = inputs.n1 / inputs.n2;
            resultText.textContent = 'Result: ' + quotient;
        }
    }
});

// Keyboard Enter Key Support (Extension Challenge)
window.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        // Defaults to triggering the addition execution setup automatically
        document.getElementById('addBtn').click();
    }
});