// uncurried function
function add1(a, b, c) {
    return a + b + c;
}
add1(1, 2, 3); // Output: 6

// curried function

// Definition: Currying is a process in functional programming where a function is transformed 
// into a series of functions, each taking a single argument.

// Step 1: A basic function without currying
function normalAdd(a, b) {
    return a + b;
}
console.log(normalAdd(10, 5)); // Output: 15, a simple addition function

// Step 2: Curried version of the same function
function curriedAdd(a) {
    return function (b) {
        return a + b;
    };
}

// Usage of the curried function
const add10 = curriedAdd(10); // First function call with `a=10`, returns a new function
console.log(add10(5)); // Output: 15, now calling the second function with `b=5`

// Or, call both functions in a single step
console.log(curriedAdd(20)(30)); // Output: 50

// Step 3: Real-world example of currying
function discount(rate) {
    return function (price) {
        return price - price * rate;
    };
}

const tenPercentDiscount = discount(0.1); // Creates a 10% discount function
console.log(tenPercentDiscount(100)); // Output: 90, applying the 10% discount to $100
console.log(tenPercentDiscount(200)); // Output: 180, applying the 10% discount to $200

// Step 4: Simplified currying with arrow functions
const multiply = (a) => (b) => a * b;
console.log(multiply(5)(3)); // Output: 15, curried multiplication function

// Inline explanations:
// - `curriedAdd(10)` creates a closure with `a=10`.
// - `add10(5)` accesses the closure and uses `a=10` to compute the sum.
// - The real-world example demonstrates how currying can make reusable functions like a discount calculator.
// - Using arrow functions makes the currying syntax shorter and cleaner.
