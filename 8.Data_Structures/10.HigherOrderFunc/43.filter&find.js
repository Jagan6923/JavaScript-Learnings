// Array of objects for demonstration
let users = [
    { id: 1, name: "John", age: 28, active: true },
    { id: 2, name: "Jane", age: 34, active: false },
    { id: 3, name: "Alice", age: 22, active: true },
    { id: 4, name: "Bob", age: 30, active: true },
    { id: 5, name: "Charlie", age: 29, active: false }
];

// -----------------------------------------------
// Example 1: Using filter to find all users who are active
console.log("Using filter to find all active users:");

let activeUsers = users.filter(user => user.active);

console.log(activeUsers);
// Output: 
// [
//   { id: 1, name: "John", age: 28, active: true },
//   { id: 3, name: "Alice", age: 22, active: true },
//   { id: 4, name: "Bob", age: 30, active: true }
// ]

// -----------------------------------------------
// Example 2: Using find to find the first user who is active
console.log("\nUsing find to find the first active user:");

let firstActiveUser = users.find(user => user.active);

console.log(firstActiveUser);
// Output: { id: 1, name: "John", age: 28, active: true }

// -----------------------------------------------
// Example 3: filter vs find - Key differences
console.log("\nfilter vs find - Key differences");

// filter: Returns all matching elements in an array
let allActiveUsers = users.filter(user => user.active);
console.log("Using filter:", allActiveUsers);
// Output: 
// [
//   { id: 1, name: "John", age: 28, active: true },
//   { id: 3, name: "Alice", age: 22, active: true },
//   { id: 4, name: "Bob", age: 30, active: true }
// ]

// find: Returns only the first matching element
let firstActiveUserWithFind = users.find(user => user.active);
console.log("Using find:", firstActiveUserWithFind);
// Output: { id: 1, name: "John", age: 28, active: true }

// Example with non-matching condition (no active users):
let inactiveUser = users.find(user => !user.active);
console.log("\nUsing find on a non-matching condition:", inactiveUser);
// Output: { id: 2, name: "Jane", age: 34, active: false }

// Example with filter on non-matching condition (no active users):
let allInactiveUsers = users.filter(user => !user.active);
console.log("Using filter on non-matching condition:", allInactiveUsers);
// Output: 
// [
//   { id: 2, name: "Jane", age: 34, active: false },
//   { id: 5, name: "Charlie", age: 29, active: false }
// ]

// -----------------------------------------------
// Example 4: Using filter with multiple conditions
console.log("\nUsing filter with multiple conditions");

let filteredUsers = users.filter(user => user.age > 25 && user.active);
console.log(filteredUsers);
// Output:
// [
//   { id: 1, name: "John", age: 28, active: true },
//   { id: 4, name: "Bob", age: 30, active: true }
// ]

// -----------------------------------------------
// Example 5: Using find with multiple conditions
console.log("\nUsing find with multiple conditions");

let foundUser = users.find(user => user.age > 25 && user.active);
console.log(foundUser);
// Output: { id: 1, name: "John", age: 28, active: true }

// -----------------------------------------------
// Key Takeaways:
console.log("\nKey Takeaways:");
console.log("1. `filter` returns an array with all matching elements.");
console.log("2. `find` returns only the first matching element.");
console.log("3. `filter` can be used when you want to extract all elements matching a condition, while `find` is useful for finding the first match.");
console.log("4. Both `filter` and `find` return `undefined` or an empty array if no match is found.");


// -----------------------------------------------
// filter function signature: filter(callback(value, index, array))
// find function signature: find(callback(value, index, array))

// filter returns an array of all elements that satisfy the condition
// find returns only the first element that satisfies the condition