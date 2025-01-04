// Promise: A Promise is an object in JavaScript used to handle asynchronous operations.
// It represents a value that may be available now, in the future, or never.
// States of a Promise:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully, and resolve() is called.
// 3. Rejected: The operation failed, and reject() is called.

// Creating a Promise:
let newPromise = new Promise((resolve, reject) => {
    let dataReceived = false; // Change this value to simulate success or failure.

    if (dataReceived) {
        resolve("Data Received"); // If data is received, resolve the promise.
    } else {
        reject("Data Not Received"); // If data is not received, reject the promise.
    }
});

// Using `.then()`, `.catch()`, and `.finally()` to handle promise outcomes:
newPromise
    .then((message) => {
        // Executes if the promise is resolved (fulfilled).
        console.log("Success: ", message); // Logs the resolved message.
        return "Next Success " + message; // Return a new value for the next `.then()` in the chain.
    })
    .then((nextMessage) => {
        // Executes if the previous `.then()` returned successfully.
        console.log("Next Success: ", nextMessage); // Logs the returned value.
    })
    .catch((error) => {
        // Executes if the promise is rejected.
        console.log("Failure: ", error); // Logs the rejection reason.
    })
    .finally(() => {
        // Executes regardless of the promise's outcome (fulfilled or rejected).
        console.log("Promise Completed"); // Useful for cleanup tasks.
    });

// Comparison: Callback-based approach for the same operation.
// This approach demonstrates the "callback hell" problem and how promises solve it.

function fetchProfile(successCallback, errorCallback) {
    let dataReceived1 = true; // Change this value to simulate success or failure.

    if (dataReceived1) {
        successCallback("Data Received"); // If data is received, call the success callback.
    } else {
        errorCallback("Data Not Received"); // If data is not received, call the error callback.
    }
}

// Nested callbacks example:
fetchProfile(
    (message) => {
        // Success callback for the first operation.
        console.log("Success1: ", message);

        // Fetching more data inside the success callback (leads to nesting).
        fetchProfile(
            (nextMessage) => {
                // Success callback for the second operation.
                console.log("Next Success: ", nextMessage);
            },
            (nextError) => {
                // Error callback for the second operation.
                console.log("Next Failure: ", nextError);
            }
        );
    },
    (error) => {
        // Error callback for the first operation.
        console.log("Failure1: ", error);
    }
);

// Explanation:
// Promises avoid the nesting problem seen with callbacks (known as "callback hell").
// They allow cleaner, chainable syntax using `.then()` and `.catch()`.
// The `.finally()` method is used for actions that should execute irrespective of the outcome.

// Key Advantages of Promises:
// 1. Better readability and maintainability.
// 2. Chainable methods for sequential async tasks.
// 3. Error handling using `.catch()` simplifies debugging.
