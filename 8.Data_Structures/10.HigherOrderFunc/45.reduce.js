// Step 1: Understanding the `reduce` Function
// The `reduce` function processes an array and reduces it to a single value.
// It takes a callback function with two primary arguments:
// - `accumulator` (acc): Holds the accumulated result from previous iterations.
// - `currentValue` (currVal): Represents the current element being processed.
// It also takes an optional `initialValue`, which initializes the accumulator.

// Step 2: Example 1 - Sum of Numbers in an Array
// Let's start with a simple array of numbers.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original Array:", numbers); // Output: [1, 2, ..., 10]

// Traditional Loop Approach
// Here we manually sum the array elements using a `for` loop.
let totalUsingLoop = 0;
for (let i = 0; i < numbers.length; i++) {
    totalUsingLoop += numbers[i]; // Add each element to the total.
}
console.log("Total Using Loop:", totalUsingLoop); // Output: 55

// Using `reduce`
// We achieve the same result using `reduce` in a more concise way.
let totalUsingReduce = numbers.reduce((acc, currVal) => {
    return acc + currVal; // Add the current value to the accumulator.
}, 0); // Initial value of `acc` is set to 0.
console.log("Total Using Reduce:", totalUsingReduce); // Output: 55

// Step 3: Example 2 - Calculating Total Salaries from an Array of Objects
// Now, consider an array of employee objects with salaries.
let employees = [
    { id: 1, name: "John", salary: 25000 },
    { id: 2, name: "Jane", salary: 30000 },
    { id: 3, name: "Alice", salary: 28000 },
    { id: 4, name: "Bob", salary: 32000 }
];

// Using `reduce` to Calculate Total Salaries
let totalSalary = employees.reduce((acc, currVal) => {
    return acc + currVal.salary; // Add the salary of the current employee to the accumulator.
}, 0); // Initial value of `acc` is 0.
console.log("Total Salary:", totalSalary); // Output: 115000

// Step 4: Example 3 - Finding the Maximum Value in an Array
// The `reduce` function can also be used to find the maximum value.
let maxNumber = numbers.reduce((max, currVal) => {
    return currVal > max ? currVal : max; // Compare current value with max and return the larger one.
}, numbers[0]); // Initialize `max` with the first element of the array.
console.log("Maximum Number:", maxNumber); // Output: 10

// Step 5: Example 4 - Grouping Data with `reduce`
// Group employees by salary range (e.g., below 30k, above/equal 30k).
let salaryGroups = employees.reduce((groups, employee) => {
    let range = employee.salary < 30000 ? "Below 30K" : "30K and Above";
    if (!groups[range]) {
        groups[range] = []; // Initialize the group if it doesn't exist.
    }
    groups[range].push(employee); // Add the employee to the appropriate group.
    return groups; // Return the updated groups object.
}, {}); // Initial value of `groups` is an empty object.
console.log("Salary Groups:", salaryGroups);
/*
Output:
{
  "Below 30K": [
    { id: 1, name: "John", salary: 25000 },
    { id: 3, name: "Alice", salary: 28000 }
  ],
  "30K and Above": [
    { id: 2, name: "Jane", salary: 30000 },
    { id: 4, name: "Bob", salary: 32000 }
  ]
}
*/

// Step 6: Using a Function for Reusability
// Wrap the reduce logic in reusable functions.

// Function to sum array values
function sumArray(arr) {
    return arr.reduce((acc, currVal) => acc + currVal, 0);
}

// Function to calculate total salaries
function calculateTotalSalary(employeeArray) {
    return employeeArray.reduce((acc, currVal) => acc + currVal.salary, 0);
}

// Function to find the maximum number
function findMaxNumber(arr) {
    return arr.reduce((max, currVal) => (currVal > max ? currVal : max), arr[0]);
}

console.log("Sum Using Function:", sumArray(numbers)); // Output: 55
console.log("Total Salary Using Function:", calculateTotalSalary(employees)); // Output: 115000
console.log("Max Using Function:", findMaxNumber(numbers)); // Output: 10
