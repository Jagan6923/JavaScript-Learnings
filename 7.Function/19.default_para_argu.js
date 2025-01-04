// Function with default parameters
function greet(name = "Guest", age = "Unknown") {
    // If no argument is passed for 'name', it defaults to "Guest".
    // If no argument is passed for 'age', it defaults to "Unknown".
    console.log(`Hello, ${name}! Your age is ${age}.`);
}

// Call the function without arguments
greet();
// Output: "Hello, Guest! Your age is Unknown."
// Explanation: Both 'name' and 'age' used their default values.

// Call the function with one argument
greet("Alice");
// Output: "Hello, Alice! Your age is Unknown."
// Explanation: 'name' is overridden to "Alice", 'age' uses its default value.

// Call the function with both arguments
greet("Bob", 25);
// Output: "Hello, Bob! Your age is 25."
// Explanation: Both default parameters are overridden by provided arguments.

// Function with default parameter for calculating total price
function calculateTotal(price = 100, taxRate = 0.1) {
    // 'price' defaults to 100 if not provided.
    // 'taxRate' defaults to 0.1 (10%) if not provided.
    const total = price + price * taxRate; // Calculate total including tax
    console.log(`Total price: $${total}`);
}

// Call without arguments
calculateTotal();
// Output: "Total price: $110"
// Explanation: Defaults are used: price = 100, taxRate = 0.1

// Call with one argument
calculateTotal(200);
// Output: "Total price: $220"
// Explanation: 'price' is overridden to 200, 'taxRate' uses default 0.1

// Call with both arguments
calculateTotal(200, 0.2);
// Output: "Total price: $240"
// Explanation: Both arguments override defaults: price = 200, taxRate = 0.2

// Default arguments (values supplied during the function call)
function multiply(a = 1, b = 1) {
    // If no arguments or 'undefined' is passed, both default to 1
    return a * b;
}

// Using default arguments
const result1 = multiply();
// result1 = 1
// Explanation: Defaults are used: a = 1, b = 1

const result2 = multiply(5);
// result2 = 5
// Explanation: 'a' is overridden to 5, 'b' uses its default value of 1

const result3 = multiply(5, 10);
// result3 = 50
// Explanation: Both arguments override the defaults: a = 5, b = 10

console.log(`Results: ${result1}, ${result2}, ${result3}`);
// Output: "Results: 1, 5, 50"

// Function demonstrating combining default parameters and default arguments
function introduce(name = "Anonymous", profession = "unknown") {
    console.log(`Hello, my name is ${name} and I am a ${profession}.`);
}

// Using default parameters
introduce();
// Output: "Hello, my name is Anonymous and I am a unknown."
// Explanation: Both parameters use default values.

// Providing default arguments during function call
introduce("Emma");
// Output: "Hello, my name is Emma and I am a unknown."
// Explanation: 'name' is overridden, 'profession' uses default.

introduce("John", "developer");
// Output: "Hello, my name is John and I am a developer."
// Explanation: Both arguments override the defaults.
