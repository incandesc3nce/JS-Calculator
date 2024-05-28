import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

export function calculate(a, oper, b) {
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

export function percentage(a) {
    return a / 100;
}