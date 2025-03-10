/*
There are at least two ways to make HTTP requests to an API in JavaScript:
- fetch()
- axios()

fetch() vs axios():

fetch():
- A built-in JavaScript function that is native to modern browsers. It returns a Promise.
- Does not throw errors for HTTP error status like error 404.
- Response status must be checked manually through 'response.ok' or 'response.status'
- Does not automatically convert response data to JSON. This must be done manually.

axios():
- A third-party library which needs to be manually installed in your application. It returns a Promise.
- Automatically rejects the Promise if it encounters an HTTP error status like 404.
- No need to manually check for errors in the response via 'response.ok' or 'response.status'

Remember that fetch() and axios() both return Promises.
This means that when utilizing them, we should implement proper techniques for handling Promises.
*/


// EXAMPLE #1: Handling fetch() Promise with .then() and .catch()
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => {
        // If response is not ok, throw an error to be caught in the .catch() block
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Converts the response to .json() and passes it down to the next operation in the .then() / .catch() chain through the 'data' variable.
    })
    .then(data => {
        // Log the random dog image URL
        console.log('Random Dog Image URL:', data.message);
    })
    .catch(error => {
        // Handle any errors from fetch or JSON parsing
        console.error('There was a problem with the fetch operation:', error);
    });

// EXAMPLE #2: Handling fetch() Promise with async/await
async function getRandomDogImage() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');

        // If response is not ok, throw an error to be caught in the .catch() block
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Log the random dog image URL
        console.log('Random Dog Image URL:', data.message);
    } catch (error) {
        // Handle any errors that occur during the fetch operation
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Call the function
getRandomDogImage();
