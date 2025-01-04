// Starting with an array of fruits
let fruits = ["apple", "banana", "cherry"];

// -----------------------------------------------
// Basic forEach Example: Iterating over an array
console.log("Basic forEach Example:");
fruits.forEach(function (fruit, index, array) {
    console.log(`Fruit: ${fruit}, Index: ${index}, Array: ${array}`);
});
// Output:
// Fruit: apple, Index: 0, Array: [ 'apple', 'banana', 'cherry' ]
// Fruit: banana, Index: 1, Array: [ 'apple', 'banana', 'cherry' ]
// Fruit: cherry, Index: 2, Array: [ 'apple', 'banana', 'cherry' ]

// -----------------------------------------------
// Basic map Example: Creating a new array with transformed values
console.log("\nBasic map Example:");
let transformedFruits = fruits.map(function (fruit) {
    return fruit.toUpperCase();  // Transforms each fruit to uppercase
});
console.log(transformedFruits); // Output: [ 'APPLE', 'BANANA', 'CHERRY' ]

// -----------------------------------------------
// Using Arrow Function in forEach
console.log("\nArrow Function in forEach:");
fruits.forEach((fruit, index) => {
    console.log(`Fruit: ${fruit}, Index: ${index}`);
});
// Output:
// Fruit: apple, Index: 0
// Fruit: banana, Index: 1
// Fruit: cherry, Index: 2

// -----------------------------------------------
// Using Arrow Function in map
console.log("\nArrow Function in map:");
let uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercaseFruits); // Output: [ 'APPLE', 'BANANA', 'CHERRY' ]

// -----------------------------------------------
// Advanced: Chaining map with filter and reduce
console.log("\nAdvanced Chaining: map, filter, and reduce:");
let numbers = [1, 2, 3, 4, 5, 6];

// Chaining map, filter, and reduce to find the sum of squares of even numbers
let sumOfEvenSquares = numbers
    .filter(num => num % 2 === 0)  // Filters even numbers
    .map(num => num ** 2)           // Squares each even number
    .reduce((sum, num) => sum + num, 0);  // Sums all squared numbers

console.log(sumOfEvenSquares); // Output: 56 (4 + 16 + 36)

// -----------------------------------------------
// Key Differences between forEach and map
console.log("\nKey Differences:");
console.log("1. forEach does not return a new array, it's used for side effects.");
console.log("2. map returns a new array with transformed values.");

// -----------------------------------------------
// Using forEach and map with external variables
console.log("\nUsing forEach and map with external variables:");

let sum = 0; // External variable

// Using forEach to calculate the sum (side effect)
numbers.forEach(num => {
    sum += num;
});
console.log(`Sum using forEach: ${sum}`); // Output: 21

// Using map to create a new array with transformed values
let squaredNumbers = numbers.map(num => num ** 2);
console.log(`Squared numbers using map: ${squaredNumbers}`); // Output: [ 1, 4, 9, 16, 25, 36 ]

// -----------------------------------------------
// Final Example: Iterating over objects with map
console.log("\nIterating over objects using map:");
let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];

// Using map to get product names in uppercase
let productNames = products.map(product => product.name.toUpperCase());
console.log(productNames); // Output: [ 'LAPTOP', 'PHONE', 'TABLET' ]
