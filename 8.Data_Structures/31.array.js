// Step 1: Creating an Array
// Array can be created using square brackets or Array constructor.

// 1. Direct Declaration (Basic and most used method)
const basicArray = [10, 20, 30, 40, 50]; // Array of numbers
console.log("Basic Array:", basicArray); // Output: [10, 20, 30, 40, 50]

// 2. Using the Array Constructor
const constructedArray = new Array(5); // Creates an array with 5 empty slots
console.log("Constructed Array with empty slots:", constructedArray); // Output: [ <5 empty items> ]

const constructedArrayWithValues = new Array(10, 20, 30); // Initializes with values
console.log("Constructed Array with values:", constructedArrayWithValues); // Output: [10, 20, 30]

// 3. Generating Array using Array.from()
const arrayFrom = Array.from("Hello"); // Converts a string into an array
console.log("Array from String:", arrayFrom); // Output: ['H', 'e', 'l', 'l', 'o']

// Step 2: Types of Arrays
// JavaScript arrays are flexible and can hold different types of values.

// 1. Homogeneous Array (Single Data Type)
const numbersArray = [1, 2, 3, 4, 5]; // Contains only numbers
console.log("Numbers Array:", numbersArray); // Output: [1, 2, 3, 4, 5]

// 2. Heterogeneous Array (Mixed Data Types)
const mixedArray = [10, "JavaScript", true, null];
console.log("Mixed Array:", mixedArray); // Output: [10, 'JavaScript', true, null]

// 3. Nested Arrays (Multidimensional)
const nestedArray = [[1, 2], [3, 4], [5, 6]];
console.log("Nested Array:", nestedArray); // Output: [[1, 2], [3, 4], [5, 6]]

// Step 3: Array Rules and Features
// - Arrays are zero-indexed: First element is at index 0.
console.log("First Element:", basicArray[0]); // Output: 10

// - Arrays can be modified even if declared with 'const'.
basicArray[2] = 99; // Modifying the third element
console.log("Modified Basic Array:", basicArray); // Output: [10, 20, 99, 40, 50]

// - Length of the array includes empty slots.
console.log("Length of Constructed Array:", constructedArray.length); // Output: 5

// Step 4: Important Array Methods
// 1. Adding Elements
basicArray.push(60); // Adds an element at the end
console.log("After Push:", basicArray); // Output: [10, 20, 99, 40, 50, 60]

// 2. Removing Elements
basicArray.pop(); // Removes the last element
console.log("After Pop:", basicArray); // Output: [10, 20, 99, 40, 50]

// 3. Iterating Over Arrays
console.log("Iterating using for-of loop:");
for (let value of basicArray) {
  console.log(value); // Outputs each value
}

// 4. Mapping Values
const squaredArray = numbersArray.map(num => num * num); // Returns a new array with squared values
console.log("Squared Array:", squaredArray); // Output: [1, 4, 9, 16, 25]

// 5. Filtering Values
const filteredArray = numbersArray.filter(num => num > 2); // Returns a new array with values greater than 2
console.log("Filtered Array:", filteredArray); // Output: [3, 4, 5]

// Step 5: Sparse Arrays
const sparseArray = [10, , 30]; // Array with missing index (undefined)
console.log("Sparse Array:", sparseArray); // Output: [10, <1 empty item>, 30]

// Iterating over sparse arrays
console.log("Iterating over Sparse Array:");
sparseArray.forEach((value, index) => {
  console.log(`Index: ${index}, Value: ${value}`);
});
// Output:
// Index: 0, Value: 10
// Index: 2, Value: 30

// Step 6: Advanced Operations
// Sorting
const unsortedArray = [50, 10, 40, 30, 20];
const sortedArray = unsortedArray.sort((a, b) => a - b); // Sorts numerically
console.log("Sorted Array:", sortedArray); // Output: [10, 20, 30, 40, 50]

// Reducing
const sum = numbersArray.reduce((acc, num) => acc + num, 0); // Sums up all elements
console.log("Sum of Numbers Array:", sum); // Output: 15
