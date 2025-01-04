// 1. Example with Array - Iterating over elements of an array using 'forEach'
const fruits = ['apple', 'banana', 'orange'];

// Using 'forEach' to iterate over the elements of the array
fruits.forEach(function (fruit, index) {
    console.log(index);  // Logs the index of the element
    console.log(fruit);  // Logs the value of the element (array item)
});
// Output:
// 0
// apple
// 1
// banana
// 2
// orange

// Explanation:
// 'forEach' is used to iterate over the **elements** of the array.
// The callback function receives two arguments: the current element and the index of that element.
// This allows you to work with both the index and the value in each iteration.

// 2. Example with String - Iterating over each character of a string using 'forEach'
const word = "JavaScript";

// Converting the string to an array of characters and using 'forEach' to iterate
[...word].forEach(function (character, index) {
    console.log(index);  // Logs the index of the character
    console.log(character);  // Logs the character at that index
});
// Output:
// 0 J
// 1 a
// 2 v
// 3 a
// 4 S
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
// 'forEach' is used to iterate over the characters of the string.
// Since strings are not directly iterable, we first convert the string into an array using the spread operator [...word].
// The callback function receives the current character and its index in the string.

// 3. Example with Object - Iterating over the properties of an object using 'forEach'
const person = {
    name: 'Alice',
    age: 25,
    job: 'Developer'
};

// Converting object properties to an array and using 'forEach'
Object.entries(person).forEach(function ([key, value]) {
    console.log(key);   // Logs the property (key) of the object
    console.log(value); // Logs the value of that property
});
// Output:
// name
// Alice
// age
// 25
// job
// Developer

// Explanation:
// 'forEach' can be applied to arrays, but since objects are not directly iterable, we first use 'Object.entries()'
// to convert the object into an array of key-value pairs (each pair as a 2-element array).
// The callback function receives the key and value for each property.

// 4. Example with Array of Objects - Iterating over an array of objects using 'forEach'
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

// Using 'forEach' to iterate over an array of objects
users.forEach(function (user, index) {
    console.log(index); // Logs the index of the object in the array
    console.log(user.name); // Logs the name property of the object
    console.log(user.age);  // Logs the age property of the object
});
// Output:
// 0
// Alice
// 25
// 1
// Bob
// 30
// 2
// Charlie
// 35

// Explanation:
// The 'forEach' method can also iterate over an array of objects. For each iteration,
// the callback function is called with the object at the current index and the index itself.

// 5. Example with Arrow Function - Using an arrow function with 'forEach'
const numbers = [1, 2, 3, 4, 5];

// Using 'forEach' with an arrow function to iterate over the array
numbers.forEach((number, index) => {
    console.log(index);  // Logs the index of the element
    console.log(number); // Logs the value of the element (number)
});
// Output:
// 0
// 1
// 1
// 2
// 2
// 3
// 3
// 4
// 4
// 5

// Explanation:
// The 'forEach' method can be simplified with an arrow function. Arrow functions provide a more concise syntax
// and are a common pattern used in modern JavaScript for array iterations.

