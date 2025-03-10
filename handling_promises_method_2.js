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
HANDLING PROMISES (METHOD #2): async/await
- This is a more modern approach which some people consider more readable than the former one.
- 'async' functions always return a Promise.
- 'await' pauses execution of the function until the Promise is resolved.
*/

async function getData() {
    try {
        const data = await delayedPromise();  // Wait for the Promise to resolve.
        console.log("Data received:", data);   // Log data after the promise is resolved/fullfilled.
    } catch (error) {
        console.log("Error occurred:", error);  // Log error if the promise is rejected.
    }
}

getData();
console.log("This will execute immediately.");

// await getData();
// console.log("This will execute only after getData() has resolved."); // Due to getData() being async, it returns a Promise.

