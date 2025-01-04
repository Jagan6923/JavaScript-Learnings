// Promises and Async/Await in JavaScript:

// A Promise represents the eventual completion (or failure) of an asynchronous operation.
// Async/Await is syntactic sugar for working with Promises, making asynchronous code easier to read and write.

// Creating a Promise:
let newPromise = new Promise((resolve, reject) => {
    let dataReceived = false; // Change this value to true to simulate a successful operation.

    if (dataReceived) {
        resolve("Data received"); // If data is received, resolve the promise.
    } else {
        // If data is not received, reject the promise with an error object.
        reject(new Error("Search proper data")); // `Error` provides a descriptive error message.
    }
});

// Explanation of Async/Await:
// 1. `async` keyword makes a function return a Promise.
// 2. `await` pauses the execution of the async function until the Promise is resolved or rejected.
// 3. Using `try...catch` allows handling of resolved and rejected Promises in a cleaner way compared to `.then()` and `.catch()`.

// Defining an asynchronous function:
async function execute() {
    try {
        // `await` pauses execution until `newPromise` is resolved.
        let message = await newPromise;

        // Simulating another awaited operation (could be another API call or async task).
        let newMsg = await newPromise;

        // Logging the resolved values of the Promises.
        console.log(message); // Logs: "Data received" if resolved.
        console.log(`Next message: ${newMsg}`); // Logs the same value as `message` in this case.
    } catch (error) {
        // Handling rejected Promises (error cases).
        console.log(error.message); // Logs the error message: "Search proper data".
    } finally {
        // The `finally` block executes irrespective of success or failure of the Promise.
        console.log("Finally block"); // Logs: "Finally block".
    }
}

// Calling the async function:
execute(); // Executes the async function and handles the Promise's outcomes.

// This synchronous console log is executed before the asynchronous operations complete.
console.log("Last line");

// Execution Flow:
// 1. The `execute` function starts running. Since it's asynchronous, it does not block the next lines.
// 2. `newPromise` is executed inside `execute`, and its resolution or rejection determines the flow.
// 3. The synchronous `console.log("Last line")` is printed immediately after `execute` is called.
// 4. Once the Promise settles (either resolved or rejected), the `try...catch` block handles the result.

// Key Points:
// - Promises are still asynchronous even when used with `async/await`. The code outside `await` continues to run.
// - Use `try...catch` to handle both resolved and rejected states of Promises when using `await`.
// - The `finally` block is optional but useful for cleanup tasks like hiding a loading spinner or closing resources.
