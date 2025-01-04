/*
// mathUtils.js

// 1. Named Export - Used when you want to export multiple values from a module.
// You can export variables, functions, or objects this way.

export const PI = 3.14159;  // Exporting a constant

// Named export for a function
export function calculateCircleArea(radius) {
    return PI * radius * radius;
}

// Named export for another function
export function calculateCircumference(radius) {
    return 2 * PI * radius;
}

// 2. Default Export - Used when you want to export a single main value from a module.
// A module can have only one default export.

export default function describeCircle(radius) {
    return `A circle with radius ${radius} has:
    - Area: ${calculateCircleArea(radius)}
    - Circumference: ${calculateCircumference(radius)}`;
}


--------------------------


// main.js

// 1. Importing Named Exports
import { PI, calculateCircleArea, calculateCircumference } from './mathUtils.js';  // Importing specific named exports

console.log("Value of PI:", PI);  // Accessing the constant
console.log("Area of circle with radius 5:", calculateCircleArea(5));  // Using the named function
console.log("Circumference of circle with radius 5:", calculateCircumference(5));  // Using another named function

// 2. Importing Default Export
import describeCircle from './mathUtils.js';  // Importing the default export (can be named anything)

console.log(describeCircle(5));  // Using the default exported function

// 3. Combining Named and Default Exports
// A module can have both default and named exports. You can import both in one statement.

import describeCircle, { PI, calculateCircleArea } from './mathUtils.js';  // Importing both default and named exports

console.log(PI);  // Using the named export (PI)
console.log(calculateCircleArea(5));  // Using the named export (calculateCircleArea)
console.log(describeCircle(5));  // Using the default export (describeCircle)

// Edge Cases and Best Practices

// 1. Case Sensitivity
// Import names are case-sensitive. If you misspell an import name, it will throw an error.
import { pi } from './mathUtils.js';  // This will fail because 'pi' does not exist, it's 'PI'.

// 2. Mixing Named and Default Imports
// You can combine both named and default imports, but they must be imported in a specific way.
import describeCircle, { PI } from './mathUtils.js';  // This is correct.

import describeCircle, PI from './mathUtils.js';  // This will throw an error because 'PI' is a named export.

// 3. Circular Dependencies
// If two modules depend on each other, it could lead to circular dependencies. This is generally best to avoid.

import { foo } from './moduleB.js';  // Importing from B
import { bar } from './moduleA.js';  // Importing from A (this will create a circular dependency if A imports B)

// Solution: Refactor code to break the dependency cycle if necessary.

// 4. Default Export and Named Export in Same Module
// A module can have both, but only one default export.

export default function describeCircle(radius) {  // Default export
    return `Circle with radius ${radius}`;
}

export const PI = 3.14159;  // Named export

// 5. Node.js Compatibility
// In Node.js, by default, we use CommonJS syntax (require and module.exports). 
// However, with the ".mjs" extension or "type": "module" in package.json, ES6 modules can be used.

const describeCircle = require('./mathUtils.js');  // CommonJS way of importing


*/