//sortSomeEvery.js


let arr = [10, 5, 100, 30, 6, 2]
// sort accept two parameters a,b for comparison
// how it sort means a-b
// a-b => postive => swap
// a-b => negative => no swap
// a-b => 0 => no swap
// b-a => positive => no swap
// b-a => negative => swap

// a-b=> 10-5=> 5=> swap => [5,10,100,30,6,2]
// a-b=> 10-100=> -90=> no swap => [5,10,100,30,6,2]
// a-b=> 100-30=> 70=> swap => [5,10,30,100,6,2]
// a-b=> 100-6=> 94=> swap => [5,10,30,6,100,2]
// a-b=> 100-2=> 98=> swap => [5,10,30,6,2,100]
// a-b=> 10-5=> 5=> swap => [5,10,30,6,2,100]
//.. this goes on till the array is sorted

let newArr = arr.sort((a, b) => { return a - b })
console.log(newArr)


let arr1 = [10, 20, 30, 1, 4, true, '100A']

let decendSort = arr1.sort((a, b) => { return b - a })
console.log(decendSort)

// 100A - 30 => NaN so it will be last

// some and every

let arr2 = [1, 2, 3, 4, 5]
let value = arr2.some((ele, index, array) => {
    return ele % 2 == 0
})

// some => return true if any one element is true
let value1 = arr2.every((ele, index, array) => {
    return ele % 2 == 0
})
// every => return true if all elements are true
console.log(value);
console.log(value1);

// Step 1: Creating an Array
// An array is a collection of values. Here we have an array of numbers.
let numbers = [10, 5, 100, 30, 6, 2];
console.log("Original Array:", numbers); // Output: [10, 5, 100, 30, 6, 2]

// Step 2: Sorting the Array (Ascending Order)
// The `sort` function rearranges the elements in the array.
// To sort numbers in ascending order, we provide a function `(a, b)`.
// If `a - b` is:
//   - Positive, the elements are swapped.
//   - Negative or zero, the elements stay in the same position.
let ascendingOrder = numbers.sort((a, b) => {
    return a - b; // Subtracting `a` from `b` determines the order.
});
console.log("Sorted Array (Ascending):", ascendingOrder); // Output: [2, 5, 6, 10, 30, 100]

// Step 3: Sorting the Array (Descending Order)
// For descending order, we reverse the logic by using `b - a`.
let descendingOrder = numbers.sort((a, b) => {
    return b - a; // Subtracting `b` from `a` determines the reverse order.
});
console.log("Sorted Array (Descending):", descendingOrder); // Output: [100, 30, 10, 6, 5, 2]

// Step 4: Checking a Condition with `some`
// The `some` function checks if *any one* element meets the condition.
// Let's check if the array has any even numbers.
let hasEven = numbers.some((num) => {
    return num % 2 === 0; // If a number is divisible by 2, it's even.
});
console.log("Has Even Number:", hasEven); // Output: true (e.g., 100, 30 are even)

// Step 5: Checking a Condition with `every`
// The `every` function checks if *all elements* meet the condition.
// Let's check if all numbers are positive.
let allPositive = numbers.every((num) => {
    return num > 0; // If a number is greater than 0, it's positive.
});
console.log("All Positive Numbers:", allPositive); // Output: true (all elements are > 0)

// Step 6: Using Functions for Reusability
// To make the code reusable, let's wrap these operations in functions.

// Function to sort numbers
function sortArray(arr, order = "asc") {
    return arr.sort((a, b) => (order === "asc" ? a - b : b - a));
}

// Function to check if any element meets a condition
function checkSome(arr, condition) {
    return arr.some(condition);
}

// Function to check if all elements meet a condition
function checkEvery(arr, condition) {
    return arr.every(condition);
}

// Step 7: Using the Functions
let myArray = [10, 20, 5, 15, -5, 0];
console.log("Original Array:", myArray);

console.log("Sorted (Ascending):", sortArray(myArray, "asc"));
console.log("Sorted (Descending):", sortArray(myArray, "desc"));

let hasNegative = checkSome(myArray, (num) => num < 0); // Check if any number is negative
console.log("Has Negative Number:", hasNegative); // Output: true (-5 is negative)

let allNonZero = checkEvery(myArray, (num) => num !== 0); // Check if all numbers are non-zero
console.log("All Non-Zero Numbers:", allNonZero); // Output: false (0 is in the array)
