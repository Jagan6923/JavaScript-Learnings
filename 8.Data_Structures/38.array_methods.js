// **Array Methods with Examples and Explanations**

let array = [5, 1, 4, 3, 2];

// **1. push(): Add elements to the END of the array**
array.push(6, 7);
console.log("After push:", array); // Outputs: [5, 1, 4, 3, 2, 6, 7]

// **2. pop(): Remove the LAST element of the array**
let poppedElement = array.pop();
console.log("Popped element:", poppedElement); // Outputs: 7
console.log("After pop:", array); // Outputs: [5, 1, 4, 3, 2, 6]

// **3. shift(): Remove the FIRST element of the array**
let shiftedElement = array.shift();
console.log("Shifted element:", shiftedElement); // Outputs: 5
console.log("After shift:", array); // Outputs: [1, 4, 3, 2, 6]

// **4. unshift(): Add elements to the BEGINNING of the array**
array.unshift(10, 11);
console.log("After unshift:", array); // Outputs: [10, 11, 1, 4, 3, 2, 6]

// **5. splice(): Add/Remove elements at a specific index**
// Removing 2 elements from index 3
let splicedOut = array.splice(3, 2);
console.log("Spliced out elements:", splicedOut); // Outputs: [4, 3]
console.log("After splice (removal):", array); // Outputs: [10, 11, 1, 2, 6]

// Adding elements at index 2
array.splice(2, 0, 20, 30);
console.log("After splice (addition):", array); // Outputs: [10, 11, 20, 30, 1, 2, 6]

// **6. concat(): Merge two or more arrays**
let newArray = array.concat([40, 50]);
console.log("After concat:", newArray); // Outputs: [10, 11, 20, 30, 1, 2, 6, 40, 50]

// **7. slice(): Extract a portion of the array into a new array**
// Extracting from index 1 to 4 (end index not included)
let slicedArray = newArray.slice(1, 4);
console.log("Sliced array:", slicedArray); // Outputs: [11, 20, 30]

// **8. flat(): Flatten nested arrays into a single array**
let nestedArray = [1, [2, [3, [4]]]];
console.log("Before flat:", nestedArray); // Outputs: [1, [2, [3, [4]]]]
console.log("After flat (1 level):", nestedArray.flat(1)); // Outputs: [1, 2, [3, [4]]]
console.log("After flat (Infinity levels):", nestedArray.flat(Infinity)); // Outputs: [1, 2, 3, 4]

// **9. fill(): Fill elements in an array with a static value**
let filledArray = new Array(5).fill(0);
console.log("Filled array:", filledArray); // Outputs: [0, 0, 0, 0, 0]

// Filling a portion of an existing array
array.fill(9, 1, 4); // Fills with 9 from index 1 to 3 (4 not included)
console.log("After fill:", array); // Outputs: [10, 9, 9, 9, 6]

// **10. reverse(): Reverse the order of elements in the array**
let reversedArray = array.reverse();
console.log("Reversed array:", reversedArray); // Outputs: [6, 9, 9, 9, 10]

// **11. toString(): Convert array to a comma-separated string**
let arrayToString = array.toString();
console.log("Array to string:", arrayToString); // Outputs: "6,9,9,9,10"

// **12. sort(): Sort the elements of the array**
// Default sort (lexical comparison, not numeric)
let sortedArray = array.sort();
console.log("Sorted array (default):", sortedArray); // Outputs: [10, 6, 9, 9, 9]

// Sorting numerically (with a compare function)
sortedArray = array.sort((a, b) => a - b);
console.log("Sorted array (numeric):", sortedArray); // Outputs: [6, 9, 9, 9, 10]

// **Chaining Methods**
let chainedResult = [5, 3, 8, 1, 2]
    .sort((a, b) => a - b) // Sort numerically
    .reverse() // Reverse order
    .slice(0, 3); // Get top 3 largest numbers
console.log("Chained result:", chainedResult); // Outputs: [8, 5, 3]


let arr = [1, 2, 3, 4, 5]
let joined = arr.join("0")
console.log("Joined array:", joined) // Outputs: 1,2,3,4,5