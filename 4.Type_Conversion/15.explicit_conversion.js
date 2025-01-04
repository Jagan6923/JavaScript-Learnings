// Explicit conversion using Number()
console.log(Number("123"));
// Converts the string "123" to a number, output: 123

console.log(Number("123.45"));
// Converts the string "123.45" to a number, output: 123.45

console.log(Number("Hello"));
// Converts a non-numeric string to NaN, output: NaN

console.log(Number(true));
// Converts boolean true to 1, output: 1

console.log(Number(false));
// Converts boolean false to 0, output: 0

console.log(Number(undefined));
// Converts undefined to NaN, output: NaN

// Explicit conversion using String()
console.log(String(123));
// Converts the number 123 to a string, output: "123"

console.log(String(123.45));
// Converts the number 123.45 to a string, output: "123.45"

console.log(String(true));
// Converts boolean true to the string "true", output: "true"

console.log(String(false));
// Converts boolean false to the string "false", output: "false"

console.log(String([1, 2, 3]));
// Converts an array to string, output: "1,2,3"

// Explicit conversion using Boolean()
console.log(Boolean(0));
// Converts 0 to false, output: false

console.log(Boolean(1));
// Converts 1 to true, output: true

console.log(Boolean(""));
// Converts empty string to false, output: false

console.log(Boolean("Hello"));
// Converts non-empty string to true, output: true

console.log(Boolean([]));
// Converts an empty array to true, output: true

console.log(Boolean([1, 2, 3]));
// Converts a non-empty array to true, output: true

// Explicit conversion using parseInt()
console.log(parseInt("123"));
// Converts the string "123" to an integer, output: 123

console.log(parseInt("123.45"));
// Converts the string "123.45" to an integer, output: 123

console.log(parseInt("Hello"));
// Returns NaN because "Hello" is not a number, output: NaN

console.log(parseInt("123abc"));
// Converts the number part of the string to integer, output: 123

// Explicit conversion using parseFloat()
console.log(parseFloat("123.45"));
// Converts the string "123.45" to a floating-point number, output: 123.45

console.log(parseFloat("123abc"));
// Converts the number part of the string to a floating-point number, output: 123

console.log(parseFloat("Hello"));
// Returns NaN because "Hello" is not a number, output: NaN

// Explicit conversion using toString()
let num = 123;
console.log(num.toString());
// Converts the number 123 to a string, output: "123"

let bool = true;
console.log(bool.toString());
// Converts boolean true to string, output: "true"

// Convert array to string using join()
let arr = [1, 2, 3];
console.log(arr.join());
// Joins the array elements with commas, output: "1,2,3"
