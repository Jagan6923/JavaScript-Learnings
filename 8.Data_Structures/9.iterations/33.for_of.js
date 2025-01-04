// 1. Example with Array - Iterating through an array using 'for...of'
const colors = ['red', 'blue', 'green'];

// Using 'for...of' loop to iterate over the values (elements) in the array
for (let color of colors) {
    console.log(color);  // Directly accessing the value of each element in the array
}
// Output:
// red
// blue
// green

// Explanation: 
// The 'for...of' loop iterates through the array 'colors' and directly provides the value 
// of each element in the array. It is different from 'for...in', which gives you the index.

// 2. Example with String - Iterating through a string using 'for...of'
const sentence = "JavaScript";

// Using 'for...of' loop to iterate over each character in the string
for (let char of sentence) {
    console.log(char);  // Directly accessing each character of the string
}
// Output:
// J
// a
// v
// a
// S
// c
// r
// i
// p
// t

// Explanation:
// The 'for...of' loop iterates over each character in the string 'sentence'. It directly 
// accesses each character, unlike 'for' loops which would use an index.

// 3. Example with Function Arguments - Using 'for...of' to iterate over function arguments

// Function with multiple arguments
function sum() {
    let total = 0;

    // Using 'for...of' to iterate over the 'arguments' object (which contains all function arguments)
    for (let arg of arguments) {
        total += arg;  // Adding each argument to the total sum
    }

    console.log(total);  // Prints the sum of all arguments passed to the function
}

sum(10, 20, 30, 40);  // Output: 100

// Explanation:
// In the 'sum' function, the 'arguments' object is an array-like object containing 
// all the arguments passed to the function. We use the 'for...of' loop to iterate over 
// these arguments and compute the sum of all passed values.

// 4. Example with Rest Parameters - Using 'for...of' with rest parameters (for modern JS functions)
const multiply = (...numbers) => {
    let product = 1;

    // Using 'for...of' to iterate over the rest parameters
    for (let number of numbers) {
        product *= number;  // Multiplying each number with the product
    }

    console.log(product);  // Prints the product of all numbers passed to the function
};

multiply(2, 3, 4);  // Output: 24

// Explanation:
// The 'multiply' function uses rest parameters (indicated by '...numbers') to collect 
// all the arguments passed to it into an array. The 'for...of' loop then iterates 
// over the array of numbers and multiplies them together, printing the result.

// 5. Example of Using 'for...of' with Different Data Types (Array, String, Function Arguments)
console.log("Array Example:");
const colorsArray = ['red', 'blue', 'green'];
for (let color of colorsArray) {
    console.log(color);  // Iterates over values of the array
}

console.log("\nString Example:");
const word = "JavaScript";
for (let letter of word) {
    console.log(letter);  // Iterates over characters of the string
}

console.log("\nFunction Arguments Example:");
function sumNumbers(...nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;  // Iterates over function arguments
    }
    console.log(sum);  // Outputs the sum of all arguments
}
sumNumbers(1, 2, 3, 4, 5);  // Output: 15

// Key Takeaways:
// 1. 'for...of' allows direct access to values in an iterable object (arrays, strings, etc.)
// 2. It provides a cleaner and more readable alternative to using index-based loops.
// 3. It works with any iterable object, including arrays, strings, and even function arguments (via 'arguments' or rest parameters).
