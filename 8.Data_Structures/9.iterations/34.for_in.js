// 1. Example with Array - Iterating over indices of an array using 'for...in'
const colors = ['red', 'blue', 'green'];

// Using 'for...in' loop to iterate over the indices (keys) of the array
for (let index in colors) {
    console.log(index);  // Logs the index of each element in the array
    console.log(colors[index]);  // Logs the value at that index (array element)
}
// Output:
// 0
// red
// 1
// blue
// 2
// green

// Explanation:
// The 'for...in' loop iterates over the **indexes** of the array, not the values. 
// It's mainly used for **enumerating properties** in objects. When working with arrays,
// this loop gives you the index, and you can access the value by referencing the index.

// 2. Example with String - Iterating over indices of a string using 'for...in'
const word = "JavaScript";

// Using 'for...in' loop to iterate over the indices (keys) of the string
for (let index in word) {
    console.log(index);  // Logs the index of each character in the string
    console.log(word[index]);  // Logs the character at that index
}
// Output:
// 0
// J
// 1
// a
// 2
// v
// 3
// a
// 4
// S
// 5
// c
// 6
// r
// 7
// i
// 8
// p
// 9
// t

// Explanation:
// Just like with arrays, the 'for...in' loop on a string iterates over the **indices** of the string. 
// It's useful when you need to access the position of each character, and then you can access 
// the character by indexing the string.

// 3. Example with Function Arguments - Iterating over function arguments using 'for...in'
function displayArgs() {
    // Iterating over the 'arguments' object using 'for...in'
    for (let index in arguments) {
        console.log(index);  // Logs the index (position) of each argument
        console.log(arguments[index]);  // Logs the value at that index
    }
}

displayArgs(10, 20, 30);  // Output:
// 0
// 10
// 1
// 20
// 2
// 30

// Explanation:
// The 'arguments' object is an array-like object in functions that contains all the arguments passed
// to the function. 'for...in' can be used to iterate over the indices of the 'arguments' object, 
// which allows access to the individual values passed to the function.

// 4. Example with Object - Iterating over properties of an object using 'for...in'
const person = {
    name: "Alice",
    age: 25,
    job: "Developer"
};

// Using 'for...in' loop to iterate over the properties of the object
for (let key in person) {
    console.log(key);  // Logs the property name (key) of the object
    console.log(person[key]);  // Logs the value of the property
}
// Output:
// name
// Alice
// age
// 25
// job
// Developer

// Explanation:
// The 'for...in' loop is ideal for iterating over the **keys** (property names) of an object.
// In each iteration, the key is logged, and by accessing `person[key]`, you can retrieve the associated value.

// 5. Example using 'for...in' with an Array of Objects - Iterating over an array of objects
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

// Using 'for...in' loop to iterate over the array of objects by indices
for (let index in users) {
    console.log(index);  // Logs the index of the object in the array
    console.log(users[index].name);  // Logs the 'name' property of each object in the array
}
// Output:
// 0
// Alice
// 1
// Bob
// 2
// Charlie

// Explanation:
// 'for...in' iterates over the indices of the array (like with normal arrays), and you can access
// the individual object and its properties using the index.

