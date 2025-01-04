// Array Destructuring: Basic example
let array = [1, 2, 3, 4, 5];
// Extract the first three elements into variables
let [x, y, z] = array;
console.log(x, y, z); // Output: 1 2 3
// Remaining values can be ignored or left

// Array Destructuring: Using rest operator
let [first, second, ...remaining] = array; // 'remaining' collects all leftover elements
console.log(first, second); // Output: 1 2
console.log(remaining); // Output: [3, 4, 5]

// Nested Array Destructuring
let nestedArray = [[10, 20], [30, 40], [50, 60]];
// Extract values from nested arrays
let [[a, b], [c, d], [e, f]] = nestedArray;
console.log(a, b, c, d, e, f); // Output: 10 20 30 40 50 60

// Skipping values while destructuring
let array2 = [1, 2, 3, 4, 5];
let [firstValue, , thirdValue] = array2; // Skip the second element
console.log(firstValue, thirdValue); // Output: 1 3

// Default values in Array Destructuring
let array3 = [1];
let [val1, val2 = 10] = array3; // 'val2' gets default value 10 if not present in array
console.log(val1, val2); // Output: 1 10

// Object Destructuring: Basic example
let person = { name: "Alice", age: 25, job: "Engineer" };
// Extract properties into variables
let { name, age, job } = person;
console.log(name, age, job); // Output: Alice 25

// Object Destructuring: Rename variables
let { name: personName, job: personJob } = person; // Rename 'name' to 'personName'
console.log(personName, personJob); // Output: Alice Engineer

// Object Destructuring: Default values
let person2 = { name: "Bob" };
let { name: n, age: personAge = 30 } = person2; // 'age' gets default value 30 if not present
console.log(n, personAge); // Output: Bob 30

// Nested Object Destructuring
let student = {
    info: { firstName: "John", lastName: "Doe" },
    scores: { math: 95, science: 89 }
};
let {
    info: { firstName, lastName },
    scores: { math, science }
} = student;

console.log(firstName, lastName, math, science); // Output: John Doe 95 89
let { info, scores } = student;
console.log(info, scores);


// Mixed Array and Object Destructuring
let complexData = [{ id: 1, name: "Item1" }, { id: 2, name: "Item2" }];
let [{ id: firstId, name: firstNameInArray }, { id: secondId }] = complexData;
console.log(firstId, firstNameInArray, secondId); // Output: 1 Item1 2

// Using Rest Operator with Object Destructuring
let user = { id: 101, username: "john_doe", email: "john@example.com" };
// Extract 'username' and collect the rest into 'details'
let { username, ...details } = user;
console.log(username); // Output: john_doe
console.log(details); // Output: { id: 101, email: 'john@example.com' }

// Destructuring Function Parameters
function greet({ name, age }) {
    // Destructure 'name' and 'age' from the argument
    console.log(`Hello, ${name}. You are ${age} years old.`);
}
let ourUser = { name: "Alice", age: 25 }
greet(ourUser); // Output: Hello, Alice. You are 25 years old.

// Destructuring with Default Values in Function Parameters
function introduce({ name = "Guest", age = "unknown" } = {}) {
    // Provide default values for the entire object and individual properties
    console.log(`I am ${name}, age ${age}.`);
}
introduce(); // Output: I am Guest, age unknown.
introduce({ name: "Bob" }); // Output: I am Bob, age unknown.
introduce({ age: 30 }); // Output: I am Guest, age 30.
// let [a, b, c, d, e] = arr;
// console.log(a, b, c, d, e);


// let myObj = { name: undefined, age: 30, city: "New York" };
// let { name = "Guest", age = 69, city } = myObj;
// console.log(name, age, city);