const readlineSync = require('readline-sync');

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

function modulus(a, b) {
    return a % b;
}

function exponentiation(a, b) {
    return a ** b;
}

function showMenu() {
    console.log("\n============================");
    console.log("     SIMPLE CALCULATOR");
    console.log("============================");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Exponentiation");
    console.log("7. Quit");
}

function main() {
    let choice;

    do {
        showMenu();

        choice = Number(readlineSync.question("Select an operation (1-7): "));

        let num1, num2, result;

        switch (choice) {
            case 1:
                num1 = Number(readlineSync.question("Enter first number : "));
                num2 = Number(readlineSync.question("Enter second number: "));

                result = add(num1, num2);

                console.log(`Result: ${num1} + ${num2} = ${result.toFixed(2)}`);
                break;

            case 2:
                num1 = Number(readlineSync.question("Enter first number : "));
                num2 = Number(readlineSync.question("Enter second number: "));

                result = subtract(num1, num2);

                console.log(`Result: ${num1} - ${num2} = ${result.toFixed(2)}`);
                break;

            case 3:
                num1 = Number(readlineSync.question("Enter first number : "));
                num2 = Number(readlineSync.question("Enter second number: "));

                result = multiply(num1, num2);

                console.log(`Result: ${num1} * ${num2} = ${result.toFixed(2)}`);
                break;

            case 4:
                num1 = Number(readlineSync.question("Enter first number : "));
                num2 = Number(readlineSync.question("Enter second number: "));

                if (num2 === 0) {
                    console.log("Error: Cannot divide by zero.");
                } else {
                    result = divide(num1, num2);
                    console.log(`Result: ${num1} / ${num2} = ${result.toFixed(2)}`);
                }
                break;

            case 5:
                num1 = Number(readlineSync.question("Enter first number : "));
                num2 = Number(readlineSync.question("Enter second number: "));

                if (num2 === 0) {
                    console.log("Error: Cannot divide by zero.");
                } else {
                    result = modulus(num1, num2);
                    console.log(`Result: ${num1} % ${num2} = ${result.toFixed(2)}`);
                }
                break;

            case 6:
                num1 = Number(readlineSync.question("Enter first number : "));
                num2 = Number(readlineSync.question("Enter second number: "));

                result = exponentiation(num1, num2);

                console.log(`Result: ${num1} ** ${num2} = ${result.toFixed(2)}`);
                break;

            case 7:
                console.log("Goodbye!");
                break;

            default:
                console.log("Error: Invalid menu choice.");
        }

    } while (choice !== 7);
}

main();