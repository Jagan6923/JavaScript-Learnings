// JavaScript is a single-threaded language, which means it executes one task at a time.
// It uses the call stack, web APIs, callback queue, and event loop to manage asynchronous tasks effectively.

function f1() {
    console.log("First Function"); // Logs immediately because it's synchronous.
}

function f2() {
    console.log("Second Function"); // Logs after 2 seconds because of setTimeout.
}

function f3() {
    console.log("Third Function"); // Logs immediately because it's synchronous.
}

// Execution starts here.
f1(); // Executes immediately and logs: "First Function".

// setTimeout is asynchronous. It delegates the callback function (f2) to the Web API environment
// with a delay of 2000ms (2 seconds).
setTimeout(f2, 2000);

// After setTimeout is handed off, f3 is called synchronously and logs: "Third Function".
f3();

// How the asynchronous code works:
// 1. `setTimeout` is handled by the browser's Web API (not the JavaScript engine).
// 2. After 2 seconds, the Web API moves the `f2` function to the callback queue.
// 3. The event loop checks if the call stack is empty. If it is, the event loop moves the callback (f2)
//    from the callback queue to the call stack for execution.

// Understanding the Key Concepts:
// Call Stack: The JavaScript execution context follows a Last In, First Out (LIFO) principle.
// Web APIs: Provided by the browser to handle asynchronous tasks like setTimeout, setInterval, etc.
// Callback Queue: Functions waiting to be executed after their Web API delay is completed.
// Event Loop: Continuously checks if the call stack is empty. If it is, it pushes callbacks from the
//             callback queue into the call stack for execution.

// Priority Queues in JavaScript:
// 1. Microtask Queue (First Priority): Includes Promises (`.then`, `.catch`) and Mutation Observers.
// 2. Macro Task Queue (Second Priority): Includes tasks like `setTimeout` and `setInterval`.

// Microtask Queue Example:
Promise.resolve().then(() => {
    console.log("Promise resolved - Microtask Queue"); // This executes before setTimeout.
});

// Macro Task Example:
setTimeout(() => {
    console.log("Macro task - setTimeout"); // Executes after microtasks.
}, 0);

// Final Execution Order Explanation:
// 1. Call Stack executes f1() and f3() synchronously.
// 2. The Web API processes setTimeout and moves f2 to the callback queue after 2 seconds.
// 3. The Microtask Queue executes first (Promise in this case).
// 4. The Event Loop pushes tasks from the callback queue (like f2) to the call stack only after the stack is empty.




// Event loop
// Micro task queue - first priority
// 1. Promise - then catch

// Macro task queue - second priority
// 1. setTimeout - function run after some time
// 2. setInterval - function repeat continuously after some time



/*
Call Stack:
The call stack is where JavaScript keeps track of function execution. Functions are added to the stack as they are called and removed when they are completed (Last In, First Out - LIFO).

Web APIs:
Certain functions, like setTimeout, setInterval, or fetching data from a server, are provided by the browser or runtime environment (Node.js). These are handled outside of the call stack.

Callback Queue:
When a Web API completes its task (e.g., after a timer expires), the callback function is sent to the Callback Queue. These tasks are processed in a First In, First Out (FIFO) manner.

Event Loop:
The Event Loop constantly checks if the Call Stack is empty. If it’s empty, it picks tasks from the Callback Queue or the Microtask Queue and pushes them onto the Call Stack.

Microtask Queue:
Microtasks (e.g., Promise.then, MutationObserver) have higher priority than Macrotasks (e.g., setTimeout). The Event Loop processes all Microtasks before moving to Macrotasks.

Macro Task Queue:
Tasks like setTimeout, setInterval, or I/O callbacks are handled in the Macro Task Queue.

*/