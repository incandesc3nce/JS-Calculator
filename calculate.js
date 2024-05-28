import { add } from './operations/add.js';
import { subtract } from './operations/subtract.js';
import { multiply } from './operations/multiply.js';
import { divide } from './operations/divide.js';

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