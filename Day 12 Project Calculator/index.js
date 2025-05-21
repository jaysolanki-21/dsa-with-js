const prompt = require('prompt-sync')();

let sign;

while (sign !== "exit") {
    sign = prompt("Enter Sign like + - * / or type 'exit' to quit: ");
    console.log("You entered:", sign);

    if (sign === "exit") {
        break;
    } else if (sign !== "+" && sign !== "-" && sign !== "*" && sign !== "/") {
        console.log("Invalid sign character");
        continue;
    } else {
        const num1 = Number(prompt("Enter number 1: "));
        const num2 = Number(prompt("Enter number 2: "));

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Invalid number");
            continue;
        }

        let result;
        if (sign === "+") {
            result = num1 + num2;
        } else if (sign === "-") {
            result = num1 - num2;
        } else if (sign === "*") {
            result = num1 * num2;
        } else if (sign === "/") {
            if (num2 === 0) {
                console.log("Cannot divide by zero.");
                continue;
            }
            result = num1 / num2;
        }

        console.log(`Result: ${result}`);
    }
}

console.log("Goodbye!");