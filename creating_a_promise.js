/*
WHAT IS A PROMISE?

A promise is a JavaScript object that represents the eventual completion of an asynchronous operation.
It offers a cleaner approach to handling asynchronous code than callbacks.

Promises have three states:
- Pending: Initial state of the promise, meaning the async operation is ongoing.
- Fullfilled: This means the async operation has been completed successfully.
- Rejected: This means the async operation has failed.

A promise is created using the constructor Promise(), which receives a function called the 'executor' as an argument.
The executor function receives two arguments, 'resolve' and 'reject', which change the Promise to either the fullfilled or rejected state.
*/

// Creates a function which returns a Promise.
function delayedPromise() {
    return new Promise((resolve, reject) => {

        // Perform an asynchronous operation. setTimeout() is async by default.
        setTimeout(() => {
            let currentDate = new Date();

            // The data that the Promise will return.
            const data = {
                currentYear: currentDate.getFullYear(),
                currentDay: currentDate.getDate()
            };

            resolve(data); // Sets the state of the Promise to Fullfilled and returns the requested data.

        }, 2000);  // Simulates an asynchronous delay of 2 seconds.
    });
}

