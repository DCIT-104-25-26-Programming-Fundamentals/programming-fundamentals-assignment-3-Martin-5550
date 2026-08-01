const readlineSync = require('readline-sync');

function readMatrix(rows, cols) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let row = readlineSync.question(`Enter row ${i + 1}: `)
            .split(' ')
            .map(Number);

        matrix.push(row);
    }

    return matrix;
}

function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join('\t'));
    }
}

function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let transpose = [];

    for (let i = 0; i < cols; i++) {
        let row = [];

        for (let j = 0; j < rows; j++) {
            row.push(matrix[j][i]);
        }

        transpose.push(row);
    }

    return transpose;
}

function addMatrices(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        let row = [];

        for (let j = 0; j < matrixA[i].length; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }

        result.push(row);
    }

    return result;
}

function multiplyMatrices(matrixA, matrixB) {
    let rowsA = matrixA.length;
    let colsA = matrixA[0].length;
    let colsB = matrixB[0].length;

    let result = [];

    for (let i = 0; i < rowsA; i++) {
        let row = [];

        for (let j = 0; j < colsB; j++) {
            let sum = 0;

            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }

            row.push(sum);
        }

        result.push(row);
    }

    return result;
}


// PART A: Matrix Transpose
console.log("\nPART A: Matrix Transpose");

let rows = Number(readlineSync.question("Enter number of rows: "));
let cols = Number(readlineSync.question("Enter number of columns: "));

let matrix = readMatrix(rows, cols);

console.log("\nOriginal Matrix:");
displayMatrix(matrix);

console.log("\nTransposed Matrix:");
displayMatrix(transposeMatrix(matrix));


// PART B: Matrix Addition
console.log("\nPART B: Matrix Addition");

let rowsAdd = Number(readlineSync.question("Enter number of rows: "));
let colsAdd = Number(readlineSync.question("Enter number of columns: "));

console.log("Enter Matrix A:");
let matrixA = readMatrix(rowsAdd, colsAdd);

console.log("Enter Matrix B:");
let matrixB = readMatrix(rowsAdd, colsAdd);

console.log("\nMatrix A + Matrix B:");
displayMatrix(addMatrices(matrixA, matrixB));


// PART C: Matrix Multiplication
console.log("\nPART C: Matrix Multiplication");

let rowsA = Number(readlineSync.question("Enter rows of Matrix A: "));
let colsA = Number(readlineSync.question("Enter columns of Matrix A: "));

console.log("Enter Matrix A:");
let multiplyA = readMatrix(rowsA, colsA);

let rowsB = Number(readlineSync.question("Enter rows of Matrix B: "));
let colsB = Number(readlineSync.question("Enter columns of Matrix B: "));

if (colsA !== rowsB) {
    console.log("Error: Number of columns in Matrix A must equal number of rows in Matrix B.");
} else {
    console.log("Enter Matrix B:");
    let multiplyB = readMatrix(rowsB, colsB);

    console.log("\nMatrix A x Matrix B:");
    displayMatrix(multiplyMatrices(multiplyA, multiplyB));
}