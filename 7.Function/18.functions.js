// 1. Function Declaration
function greet(name) {
    // 'name' is a parameter; the function takes input
    return `Hello, ${name}!`; // Returns a greeting message
}
console.log(greet("Alice")); // Calls the function and logs "Hello, Alice!"

// 2. Function Expression
const add = function (a, b) {
    // Anonymous function assigned to a variable 'add'
    return a + b; // Returns the sum of a and b
};
console.log(add(5, 3)); // Calls the function and logs 8

// 3. Arrow Function
const multiply = (a, b) => {
    // Arrow function syntax
    return a * b; // Returns the product of a and b
};
console.log(multiply(4, 3)); // Logs 12

// Simplified Arrow Function (single expression)
const divide = (a, b) => a / b; // No curly braces needed for single-line return
console.log(divide(10, 2)); // Logs 5

// 4. Default Parameters
function greetWithDefault(name = "Guest") {
    // Default value is "Guest" if no argument is provided
    return `Welcome, ${name}!`;
}
console.log(greetWithDefault()); // Logs "Welcome, Guest!"
console.log(greetWithDefault("Bob")); // Logs "Welcome, Bob!"

// 5. Rest Parameters
function sum(...numbers) {
    // Rest parameters gather all arguments into an array
    return numbers.reduce((total, num) => total + num, 0); // Calculates the sum
}
console.log(sum(1, 2, 3, 4)); // Logs 10

// 6. Function with Return
function square(num) {
    return num * num; // Returns the square of the number
}
console.log(square(5)); // Logs 25

// 7. Function Without Return (void function)
function logMessage(message) {
    console.log(`Message: ${message}`); // Just logs a message, no return value
}
logMessage("Hello World!"); // Logs "Message: Hello World!"

// 8. Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("This is an IIFE!"); // Runs immediately after being defined
})(); // Logs "This is an IIFE!"

// 9. Higher-Order Function
function applyOperation(a, b, operation) {
    // Takes another function as a parameter
    return operation(a, b); // Executes the passed function
}
console.log(applyOperation(5, 3, add)); // Logs 8 (uses the 'add' function)
console.log(applyOperation(5, 3, multiply)); // Logs 15 (uses the 'multiply' function)

// 10. Callback Function
function performTask(taskName, callback) {
    console.log(`Starting ${taskName}...`); // Logs the task name
    callback(); // Executes the callback function
}
performTask("Data Fetching", () => {
    console.log("Task Completed!"); // Logs when the task is done
});

// 11. Anonymous Function
setTimeout(function () {
    // A function without a name
    console.log("This runs after 2 seconds."); // Logs after 2 seconds
}, 2000);

// 12. Nested Functions
function outerFunction(outerValue) {
    // Outer function scope
    function innerFunction(innerValue) {
        // Inner function has access to outer scope
        return `Outer: ${outerValue}, Inner: ${innerValue}`;
    }
    return innerFunction; // Returns the inner function
}
const inner = outerFunction("Outside");
console.log(inner("Inside")); // Logs "Outer: Outside, Inner: Inside"

// 13. Recursive Function
function factorial(n) {
    if (n === 0) return 1; // Base case: factorial of 0 is 1
    return n * factorial(n - 1); // Recursive case
}
console.log(factorial(5)); // Logs 120 (5 * 4 * 3 * 2 * 1)

// 14. Generator Function
function* numberGenerator() {
    // A function that can pause and resume
    yield 1; // Pauses here and returns 1
    yield 2; // Pauses here and returns 2
    yield 3; // Pauses here and returns 3
}
const gen = numberGenerator();
console.log(gen.next().value); // Logs 1
console.log(gen.next().value); // Logs 2
console.log(gen.next().value); // Logs 3
console.log(gen.next().value); // Logs undefined (no more values)

// 15. Arrow Function with this (context demonstration)
const person = {
    name: "John",
    regularFunction: function () {
        console.log(this.name); // 'this' refers to the person object
    },
    arrowFunction: () => {
        console.log(this.name); // 'this' refers to the global context
    },
};
person.regularFunction(); // Logs "John"
person.arrowFunction(); // Logs undefined
