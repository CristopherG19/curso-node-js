export function sum(a, b) {
    return a + b;
}

export function rest(a, b) {
    return a - b;
}

export function mult(a, b) {
    return a * b;
}

export function div(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}