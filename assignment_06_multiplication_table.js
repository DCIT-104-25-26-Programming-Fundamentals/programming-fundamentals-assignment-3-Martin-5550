const readlineSync = require('readline-sync');

function generateSingleTable(number) {
    if (number <= 0) {
        console.log("Error: Number must be a positive integer.");
        return;
    }

    console.log(`\nMultiplication Table for ${number}:`);

    for (let i = 1; i <= 12; i++) {
        console.log(`${number}  x  ${i}  =  ${number * i}`);
    }
}

function generateTablesUpToN(n) {
    if (n <= 0) {
        console.log("Error: Number must be a positive integer.");
        return;
    }

    for (let number = 1; number <= n; number++) {
        console.log(`\nMultiplication Table for ${number}:`);

        for (let i = 1; i <= 12; i++) {
            console.log(`${number}  x  ${i}  =  ${number * i}`);
        }

        console.log("---------------------------");
    }
}


// PART A — Single Table
let number = Number(readlineSync.question("Enter a number for multiplication table: "));
generateSingleTable(number);


// PART B — Tables from 1 to N
let n = Number(readlineSync.question("\nEnter N to generate tables from 1 to N: "));
generateTablesUpToN(n);