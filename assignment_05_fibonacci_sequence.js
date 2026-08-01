const readlineSync = require('readline-sync');

function generateFibonacci(n) {
    if (n <= 0) {
        console.log("Error: Number of terms must be positive.");
        return;
    }

    let fibonacci = [];
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        fibonacci.push(a);

        let next = a + b;
        a = b;
        b = next;
    }

    console.log("Fibonacci sequence: " + fibonacci.join(" "));
}

function checkFibonacci(number) {
    let a = 0;
    let b = 1;

    while (a <= number) {
        if (a === number) {
            console.log(number + " is a Fibonacci number.");
            return;
        }

        let next = a + b;
        a = b;
        b = next;
    }

    console.log(number + " is NOT a Fibonacci number.");
}


// PART A — Print First N Terms
let n = Number(readlineSync.question("How many terms? "));
generateFibonacci(n);


// PART B — Check Fibonacci Number
let number = Number(readlineSync.question("\nEnter a number to check: "));
checkFibonacci(number);