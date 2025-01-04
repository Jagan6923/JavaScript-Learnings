let fruits = ["banana", "apple", "cherry"];

let newArr = fruits.map(currentEle => currentEle.toUpperCase()).sort()

console.log(newArr);


let newArr2 = fruits.map((cEle) => { return cEle == 'apple' })

console.log(newArr2);


fruits.forEach(val => console.log(val == 'apple'))// Starting with an array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// -----------------------------------------------
// Basic Chaining: map + filter
console.log("Basic Chaining: map + filter");

// Step 1: Use filter to select even numbers, then map to square them
let evenSquares = numbers
    .filter(num => num % 2 === 0)  // Filters even numbers
    .map(num => num ** 2);         // Squares each even number

console.log(evenSquares); // Output: [4, 16, 36, 64, 100]

// -----------------------------------------------
// Chaining with map + filter + reduce
console.log("\nChaining with map + filter + reduce");

// Step 2: Use filter to select numbers greater than 5, map to double them, and reduce to sum them
let sumOfDoubledNumbers = numbers
    .filter(num => num > 5)        // Filters numbers greater than 5
    .map(num => num * 2)           // Doubles each number
    .reduce((sum, num) => sum + num, 0);  // Sums all the doubled numbers

console.log(sumOfDoubledNumbers); // Output: 72 (12 + 14 + 16 + 18 + 20)

// -----------------------------------------------
// Chaining with map + filter + reduce for objects
console.log("\nChaining with map + filter + reduce for objects");

let products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 700 },
    { name: "Tablet", price: 300 },
    { name: "Smartwatch", price: 150 },
    { name: "Monitor", price: 400 }
];

// Step 3: Filter products with price > 500, map to get the product names, and reduce to get the total price
let totalPrice = products
    .filter(product => product.price > 500) // Filters products with price greater than 500
    .map(product => product.name)           // Maps to get the names of the products
    .reduce((sum, product) => sum + product.length, 0);  // Sums the lengths of the product names

console.log(totalPrice); // Output: 35 (sum of lengths of product names)

// -----------------------------------------------
// Chaining with map + filter + sort
console.log("\nChaining with map + filter + sort");

let randomNumbers = [2, 10, 8, 5, 7, 4, 1, 3, 9, 6];

// Step 4: Filter out numbers less than 5, map to double them, and then sort them in ascending order
let sortedDoubledNumbers = randomNumbers
    .filter(num => num >= 5)          // Filters numbers greater than or equal to 5
    .map(num => num * 2)              // Doubles each number
    .sort((a, b) => a - b);           // Sorts numbers in ascending order

console.log(sortedDoubledNumbers);  // Output: [10, 12, 14, 16, 18]

// -----------------------------------------------
// Advanced Chaining: Multiple transformations in one pipeline
console.log("\nAdvanced Chaining: Multiple transformations");

// Step 5: Filter even numbers, double them, sort them, and sum them
let sumOfTransformedNumbers = numbers
    .filter(num => num % 2 === 0)        // Filters even numbers
    .map(num => num * 2)                 // Doubles each number
    .sort((a, b) => a - b)               // Sorts them in ascending order
    .reduce((sum, num) => sum + num, 0); // Sums them up

console.log(sumOfTransformedNumbers); // Output: 220 (4 + 8 + 12 + 16 + 20 + 24 + 28 + 32)

// -----------------------------------------------
// Chaining with nested arrays (flattening)
console.log("\nChaining with nested arrays (flattening)");

let nestedNumbers = [[1, 2], [3, 4], [5, 6], [7, 8]];

// Step 6: Flatten the array, square each number, and sort in descending order
let flattenedAndSorted = nestedNumbers
    .flat()                              // Flattens the nested arrays
    .map(num => num ** 2)                // Squares each number
    .sort((a, b) => b - a);              // Sorts them in descending order

console.log(flattenedAndSorted); // Output: [64, 49, 36, 25, 16, 9, 4, 1]

// -----------------------------------------------
// Key Takeaways: Chaining allows you to perform multiple operations on the array in a concise manner.
console.log("\nKey Takeaways:");
console.log("1. Chaining methods allows you to perform multiple transformations in a readable manner.");
console.log("2. `map`, `filter`, and `reduce` can be combined for powerful array manipulation.");
console.log("3. Order of operations matters: method calls are executed from left to right.");
