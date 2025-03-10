/*
WHAT IS AN ASYNCHRONOUS OPERATION?

Async operations are tasks that do not block the execution of the program while they await completion.
They are typically used for tasks that involve waiting, such as making an API request.
- fetch()
- axios()

If tasks that involve waiting were to be run synchronously, they would delay execution of the main program.
In other words, the next task would not begin until the slow task is completed.

By running these tasks asynchronously, the main program is allowed to continue on to its next task while the slow one runs in the background.
*/

console.log("The program begins here.");

// setTimeout() is a function that delays execution of the code inside of it, but it runs asynchronously.
setTimeout(() => {
  console.log("While this prints after 2 seconds, it is an async operation. This means it occurs in the background and does not block execution of other code in the program.");
}, 2000);  // 2000 milliseconds = 2 seconds

console.log("This will execute immediately and will not wait on the code inside of setTimeout()");
