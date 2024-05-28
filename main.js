function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}


function calculate(a, oper, b) {
    let result;
    switch (oper) {
        case '+':
            result = add(a, b);
        case '-':
            result = subtract(a, b);
        case 'x':
            result = multiply(a, b);
        case '/':
            result = divide(a, b);
    }
    return result;
}

function percentage(a) {
    return a / 100;
}

function addDigit(digit, value) {
    if (value === '0' || (value === '0' && digit === '0')) return digit;
    if (value.length === 8) return value;
    return value + digit;
}
function updateDisplay(value) {
    const display = document.querySelector('#display');
    display.textContent = value;
}

let displayValue = '0';

// populate display with digits
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');

const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');

const zero = document.querySelector('#zero');

seven.addEventListener('click', () => {
    displayValue = addDigit('7', displayValue);
    updateDisplay(displayValue);
});
eight.addEventListener('click', () => {
    displayValue = addDigit('8', displayValue);
    updateDisplay(displayValue);
});
nine.addEventListener('click', () => {
    displayValue = addDigit('9', displayValue);
    updateDisplay(displayValue);
});

four.addEventListener('click', () => {
    displayValue = addDigit('4', displayValue);
    updateDisplay(displayValue);
});
five.addEventListener('click', () => {
    displayValue = addDigit('5', displayValue);
    updateDisplay(displayValue);
});
six.addEventListener('click', () => {
    displayValue = addDigit('6', displayValue);
    updateDisplay(displayValue);
});

one.addEventListener('click', () => {
    displayValue = addDigit('1', displayValue);
    updateDisplay(displayValue);
});
two.addEventListener('click', () => {
    displayValue = addDigit('2', displayValue);
    updateDisplay(displayValue);
});
three.addEventListener('click', () => {
    displayValue = addDigit('3', displayValue);
    updateDisplay(displayValue);
});

zero.addEventListener('click', () => {
    displayValue = addDigit('0', displayValue);
    updateDisplay(displayValue);
});

// clear
const clearBtn = document.querySelector('#clear');

clearBtn.addEventListener('click', () => {
    displayValue = '0';
    updateDisplay(displayValue);
});

//negative
const negBtn = document.querySelector('#negative');

negBtn.addEventListener('click', () => {
    if (displayValue === '0') return;
    
    if (displayValue.charAt(0) === '-') {
        displayValue = displayValue.slice(1);
    } else {
        displayValue = '-' + displayValue;
    }
    
    updateDisplay(displayValue);
});

//percentage
const percent = document.querySelector('#percent');

percent.addEventListener('click', () => {
    let result = percentage(parseFloat(displayValue));
    if (result.toString().length > 8) result = result.toFixed(7);
    displayValue = result;
    updateDisplay(displayValue);
});