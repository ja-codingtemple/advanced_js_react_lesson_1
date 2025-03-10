/*
WHAT IS A SYNCHRONOUS OPERATION?

A synchronous operation is one that is executed sequentially (i.e. in the order in which it appears in the code)
Tasks further down in the code will not be executed until those defined above it have finished running.
*/

// Here, we define a function which will print messages to the console after a specified number of miliseconds.
function delayTask(ms) {
    console.log("Now, the slow task begins.");

    const start = Date.now();
    while (Date.now() - start < ms) {
        // Delay program.
    }

    console.log("Now, the slow task is complete.");
}


// This code will run immediately.
console.log("This occurs first.");

// This function will begin running after, but it will take 3000 miliseconds to finish running.
delayTask(3000);

// This will run after delayTask() is finished executing.
console.log("This code was blocked by the slow task. It did not run until the slow task finished executing.");