let arr = [21032, 2323, 121, 31, 1233, 3, 23, 2, "&", " "]
let sortedArr = arr.sort();
console.log(sortedArr);


// Initial array
let array = [10, 20, 30, 10, 40, 50, 10];

console.log("Original array:", array);

// 1. Using indexOf()
// Finds the first occurrence of 10
let firstIndex = array.indexOf(10);
console.log("\nUsing indexOf() - First occurrence of 10:");
console.log("Index:", firstIndex); // Output: 0

// Finds the first occurrence of 40
let indexOf40 = array.indexOf(40);
console.log("\nUsing indexOf() - First occurrence of 40:");
console.log("Index:", indexOf40); // Output: 4

// Searches for a value that does not exist
let indexOf60 = array.indexOf(60);
console.log("\nUsing indexOf() - Searching for 60 (not present):");
console.log("Index:", indexOf60); // Output: -1

// 2. Using indexOf() with a start index
// Starts searching from index 2
let indexFrom2 = array.indexOf(10, 2);
console.log("\nUsing indexOf() - Searching for 10 starting from index 2:");
console.log("Index:", indexFrom2); // Output: 3

// 3. Using lastIndexOf()
// Finds the last occurrence of 10
let lastIndex = array.lastIndexOf(10);
console.log("\nUsing lastIndexOf() - Last occurrence of 10:");
console.log("Index:", lastIndex); // Output: 6

// Searches for 40 from the end
let lastIndexOf40 = array.lastIndexOf(40);
console.log("\nUsing lastIndexOf() - Last occurrence of 40:");
console.log("Index:", lastIndexOf40); // Output: 4

// 4. Using lastIndexOf() with a start index
// Starts searching backwards from index 5
let lastIndexFrom5 = array.lastIndexOf(10, 5);
console.log("\nUsing lastIndexOf() - Searching for 10 starting backwards from index 5:");
console.log("Index:", lastIndexFrom5); // Output: 3

// 5. Searching for a value that does not exist
let lastIndexOf60 = array.lastIndexOf(60);
console.log("\nUsing lastIndexOf() - Searching for 60 (not present):");
console.log("Index:", lastIndexOf60); // Output: -1
