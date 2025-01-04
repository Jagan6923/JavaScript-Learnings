// Spread Operator in Arrays: Unpacks array elements into a new array
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];  // Spread the elements of 'numbers' and add 4 and 5
console.log(newNumbers);  // Output: [1, 2, 3, 4, 5]

// Spread Operator in Objects: Unpacks object properties into a new object
const person = { name: "Alice", age: 25 };
const employee = { ...person, job: "Developer" };  // Spread 'person' properties and add 'job'
console.log(employee);  // Output: { name: 'Alice', age: 25, job: 'Developer' }

// Spread Operator in Function Calls: Passes array elements as individual arguments
const numbers2 = [10, 20, 30, 40];
function sum(a, b, c, d) {
    return a + b + c + d;
}
console.log(sum(...numbers2));  // Output: 100, spreading array values as arguments

// Rest Operator in Function Parameters: Collects remaining arguments into an array
function addAll(...args) {
    return args.reduce((acc, num) => acc + num, 0);  // Collects all arguments into 'args' and sums them
}
console.log(addAll(1, 2, 3, 4, 5));  // Output: 15

// Rest Operator in Array Destructuring: Collects remaining elements into an array
const numbers3 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers3;  // 'first' and 'second' are extracted, 'rest' collects the remaining elements
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(rest);   // Output: [3, 4, 5]

// Rest Operator in Object Destructuring: Collects remaining properties into an object
const user = { name: "John", age: 30, job: "Engineer" };
const { name, ...userDetails } = user;  // 'name' is extracted, 'userDetails' collects remaining properties
console.log(name);        // Output: John
console.log(userDetails); // Output: { age: 30, job: 'Engineer' }
