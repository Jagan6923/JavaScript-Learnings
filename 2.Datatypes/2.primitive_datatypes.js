// Primitive Data Types

// String: A sequence of characters
let name = "Alice"; // Primitive data type
console.log(name); // Output: Alice
console.log(typeof name); // Output: string

// Number: Any numeric value (Integer or floating point)
let age = 25; // Primitive data type
console.log(age); // Output: 25
console.log(typeof age); // Output: number

// Boolean: Represents true or false
let isActive = true; // Primitive data type
console.log(isActive); // Output: true
console.log(typeof isActive); // Output: boolean

// Undefined: A variable that has been declared but not assigned a value
let notDefined; // Undefined by default
console.log(notDefined); // Output: undefined
console.log(typeof notDefined); // Output: undefined

// Null: Represents an intentional absence of value
let noValue = null; // Primitive data type
console.log(noValue); // Output: null
console.log(typeof noValue); // Output: object (this is a known bug in JavaScript)

// Symbol: A unique and immutable value (introduced in ES6)
let symbol1 = Symbol('id'); // Primitive data type
let symbol2 = Symbol('id'); // Different symbol with the same description
console.log(symbol1 === symbol2); // Output: false (each Symbol is unique)
console.log(typeof symbol1); // Output: symbol

// BigInt: Represents integers that are too large for the Number type (introduced in ES11)
let bigNumber = 1234567890123456789012345678901234567890n; // Primitive data type
console.log(bigNumber); // Output: 1234567890123456789012345678901234567890n
console.log(typeof bigNumber); // Output: bigint
