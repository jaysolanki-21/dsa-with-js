// Guess the number game

let prompt = require('prompt-sync')();

let secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
let guess;

do {
    guess = Number(prompt('Enter your guess between 1 and 100: '));
    attempts++;

    if (guess > secretNumber) {
        console.log('Too high! Try again.');
    } else if (guess < secretNumber) {
        console.log('Too low! Try again.');
    }

} while (guess !== secretNumber);

console.log('Congratulations! You guessed the number in ' + attempts + ' attempts.');
