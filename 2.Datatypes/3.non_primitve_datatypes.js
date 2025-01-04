// Non-Primitive Data Types

// Object: A collection of key-value pairs (can store different data types)
let person = {
    name: "John",
    age: 30,
    isActive: true
}; // Non-primitive data type
console.log(person); // Output: { name: 'John', age: 30, isActive: true }
console.log(typeof person); // Output: object

// Array: A collection of elements, often of the same data type
let fruits = ["apple", "banana", "cherry"]; // Non-primitive data type (array)
console.log(fruits); // Output: [ 'apple', 'banana', 'cherry' ]
console.log(typeof fruits); // Output: object (arrays are objects in JavaScript)

// Function: A block of reusable code
function greet(name) {
    return "Hello " + name;
} // Non-primitive data type (function)
console.log(greet("Alice")); // Output: Hello Alice
console.log(typeof greet); // Output: function

// Modifying Non-Primitive Data Types
person.name = "David"; // Modifying the property of an object
fruits[0] = "orange"; // Modifying the array element
console.log(person); // Output: { name: 'David', age: 30, isActive: true }
console.log(fruits); // Output: [ 'orange', 'banana', 'cherry' ]
