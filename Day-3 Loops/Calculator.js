//Calculator

let prompt = require('prompt-sync')();
let again;

do {
    let num1 = Number(prompt('Enter the first number: '));
    let num2 = Number(prompt('Enter the second number: '));

    let option = prompt('Enter 1 for addition, 2 for subtraction, 3 for multiplication, 4 for division: ');

    if (option === '1') {
        console.log(num1 + ' + ' + num2 + ' = ' + (num1 + num2));
    } else if (option === '2') {
        console.log(num1 + ' - ' + num2 + ' = ' + (num1 - num2));
    } else if (option === '3') {
        console.log(num1 + ' * ' + num2 + ' = ' + (num1 * num2));
    } else if (option === '4') {
        if (num2 === 0) {
            console.log('Division by zero is not allowed.');
        } else {
            console.log(num1 + ' / ' + num2 + ' = ' + (num1 / num2));
        }
    } else {
        console.log('Invalid option');
    }

    again = prompt('Do you want to perform another calculation? (yes/no): ').toLowerCase();
} while (again === 'yes');

console.log('Thank you for using the calculator!');
