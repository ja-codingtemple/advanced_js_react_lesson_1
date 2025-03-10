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

/*
HANDLING PROMISES (METHOD #1): Chaining .then() and .catch()
- This is the most common and traditional approach.
- .then() is called when a Promise resolves successfully (state: Fullfilled)
- .catch() is called then a Promise encounters an error and is rejected (state: Rejected)
*/

// Call the function which returns a Promise.
delayedPromise()
    .then(data => {
        console.log(data);  // Prints any returned data to the console. (This occurs after 2 seconds)
    })
    .catch(error => {
        console.log(error);  // Prints any errors to the console.
    });

console.log("This will execute immediately.");