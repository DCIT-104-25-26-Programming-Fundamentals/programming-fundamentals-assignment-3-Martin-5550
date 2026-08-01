const readlineSync = require('readline-sync');

let students = [];

function addStudent() {
    let name = readlineSync.question("Student name: ");
    let id = Number(readlineSync.question("Student ID: "));

    let numberOfScores = Number(readlineSync.question("How many scores? "));

    let scores = [];

    for (let i = 0; i < numberOfScores; i++) {
        let score = Number(readlineSync.question(`Enter score ${i + 1}: `));
        scores.push(score);
    }

    let student = {
        name: name,
        id: id,
        scores: scores
    };

    students.push(student);

    console.log(`Student "${name}" added successfully.`);
}

function calculateAverage(scores) {
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    return sum / scores.length;
}

function displayStudents() {
    if (students.length === 0) {
        console.log("No students have been added yet.");
        return;
    }

    console.log("\nStudent Records:");

    for (let i = 0; i < students.length; i++) {
        let student = students[i];

        console.log("\nName: " + student.name);
        console.log("ID: " + student.id);
        console.log("Scores: " + student.scores.join(", "));
        console.log("Average Score: " + calculateAverage(student.scores).toFixed(2));
    }
}

function findAverageScore() {
    let id = Number(readlineSync.question("Enter student ID: "));

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            let average = calculateAverage(students[i].scores);

            console.log(
                `${students[i].name}'s average score: ${average.toFixed(2)}`
            );

            return;
        }
    }

    console.log("Error: Student ID not found.");
}

function showMenu() {
    console.log("\n================================");
    console.log("     STUDENT RECORD SYSTEM MENU");
    console.log("================================");
    console.log("1. Add student");
    console.log("2. Display all students");
    console.log("3. Calculate average score");
    console.log("4. Quit");
}

function main() {
    let choice;

    do {
        showMenu();

        choice = Number(readlineSync.question("Enter your choice (1-4): "));

        switch (choice) {
            case 1:
                addStudent();
                break;

            case 2:
                displayStudents();
                break;

            case 3:
                findAverageScore();
                break;

            case 4:
                console.log("Goodbye!");
                break;

            default:
                console.log("Error: Invalid menu choice.");
        }

    } while (choice !== 4);
}

main();