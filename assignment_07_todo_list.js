const readlineSync = require('readline-sync');

let tasks = [];

function addTask() {
    let task = readlineSync.question("Enter task: ");

    tasks.push(task);

    console.log(`Task added: "${task}"`);
}

function viewTasks() {
    if (tasks.length === 0) {
        console.log("Your task list is empty.");
        return;
    }

    console.log("Your Tasks:");

    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
    }
}

function deleteTask() {
    if (tasks.length === 0) {
        console.log("No tasks available to delete.");
        return;
    }

    viewTasks();

    let taskNumber = Number(readlineSync.question("Enter task number to delete: "));

    if (taskNumber < 1 || taskNumber > tasks.length) {
        console.log("Error: Invalid task number.");
        return;
    }

    let removedTask = tasks[taskNumber - 1];

    tasks.splice(taskNumber - 1, 1);

    console.log(`Task "${removedTask}" has been removed.`);
}

function showMenu() {
    console.log("\n============================");
    console.log("     TO-DO LIST MENU");
    console.log("============================");
    console.log("1. Add task");
    console.log("2. View tasks");
    console.log("3. Delete task");
    console.log("4. Quit");
}

function main() {
    let choice;

    do {
        showMenu();

        choice = Number(readlineSync.question("Enter your choice (1-4): "));

        switch (choice) {
            case 1:
                addTask();
                break;

            case 2:
                viewTasks();
                break;

            case 3:
                deleteTask();
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