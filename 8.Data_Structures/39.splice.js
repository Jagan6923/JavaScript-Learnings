// Initial array
let array = [1, 2, 3, 4, 5];

console.log("Original array:", array);

// 1. Remove elements using splice
// Removes 2 elements starting from index 1
let removedElements = array.splice(1, 2);
console.log("\nAfter removing elements:");
console.log("Modified array:", array); // [1, 4, 5]
console.log("Removed elements:", removedElements); // [2, 3]

// Reset array for next example
array = [1, 2, 3, 4, 5];

// 2. Add elements using splice
// Adds 10 and 20 at index 2 without removing anything
array.splice(2, 0, 10, 20);
console.log("\nAfter adding elements:");
console.log("Modified array:", array); // [1, 2, 10, 20, 3, 4, 5]

// Reset array for next example
array = [1, 2, 3, 4, 5];

// 3. Replace elements using splice
// Replaces 2 elements at index 1 with 100 and 200
let replacedElements = array.splice(1, 2, 100, 200);
console.log("\nAfter replacing elements:");
console.log("Modified array:", array); // [1, 100, 200, 4, 5]
console.log("Replaced elements:", replacedElements); // [2, 3]

// Reset array for next example
array = [1, 2, 3, 4, 5];

// 4. Remove all elements after a certain index
// Removes all elements from index 2 onward
array.splice(2);
console.log("\nAfter removing all elements from index 2 onward:");
console.log("Modified array:", array); // [1, 2]

// Reset array for next example
array = [1, 2, 3, 4, 5];

// 5. Use negative index to start from the end
// Removes 1 element starting from the last index (-1)
let lastRemoved = array.splice(-1, 1);
console.log("\nAfter using negative index (-1):");
console.log("Modified array:", array); // [1, 2, 3, 4]
console.log("Removed element:", lastRemoved); // [5]

// Reset array for next example
array = [1, 2, 3, 4, 5];

// 6. Combination: Add and remove simultaneously
// At index 1, remove 2 elements and add 50, 60
array.splice(1, 2, 50, 60);
console.log("\nAfter removing and adding simultaneously:");
console.log("Modified array:", array); // [1, 50, 60, 4, 5]
