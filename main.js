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
    let result = '0';
    switch (oper) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case 'x':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
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
let prevValue = 0;
let currValue = 0;
let oper = '';
let isDoingOperation = false;

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
    prevValue = 0;
    currValue = 0;
    oper = '';
    isDoingOperation = false;

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

//floating point
const float = document.querySelector('#float');

float.addEventListener('click', () => {
    if (!displayValue.includes('.')) displayValue += '.';
    updateDisplay(displayValue);
});

// operations

const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#subtract');
const multBtn = document.querySelector('#multiply');
const divBtn = document.querySelector('#divide');
const equalBtn = document.querySelector('#equal');


const checkOperationStatus = (doingOperation) => {
    if (isDoingOperation) {
        currValue = parseFloat(displayValue);
        prevValue = calculate(prevValue, oper, currValue);
    } else {
        prevValue = parseFloat(displayValue);
    }
};

const startOperation = (operation) => {
    checkOperationStatus(isDoingOperation);
    oper = operation;
    
    isDoingOperation = true;

    displayValue = '0';
    updateDisplay(displayValue);
};


addBtn.addEventListener('click', () => {
    startOperation('+');
});

subBtn.addEventListener('click', () => {
    startOperation('-');
});

multBtn.addEventListener('click', () => {
    startOperation('x');
});

divBtn.addEventListener('click', () => {
    startOperation('/');
});

equalBtn.addEventListener('click', () => {
   currValue = parseFloat(displayValue);
   displayValue = calculate(prevValue, oper, currValue);
   displayValue = displayValue.toString().length > 8 ? displayValue.toFixed(8) : displayValue;
   updateDisplay(displayValue);
   
   prevValue = 0; currValue = 0;
   isDoingOperation = false;
});