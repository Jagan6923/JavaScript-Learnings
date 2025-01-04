let a = 5, b = 3, c = 8;

// Simple assignment (=)
let result1 = a = b;  // Assigns the value of b (3) to a
console.log(result1); // Output: 3 (a becomes 3)
console.log(a); // Output: 3 (a is now 3)

// Add and assign (+=)
let result2 = a += b;  // Adds b to a (a = a + b)
console.log(result2); // Output: 6 (3 + 3)
console.log(a); // Output: 6 (a is now 6)

// Subtract and assign (-=)
let result3 = a -= c;  // Subtracts c from a (a = a - c)
console.log(result3); // Output: -2 (6 - 8)
console.log(a); // Output: -2 (a is now -2)

// Multiply and assign (*=)
let result4 = a *= b;  // Multiplies a by b (a = a * b)
console.log(result4); // Output: -6 (-2 * 3)
console.log(a); // Output: -6 (a is now -6)

// Divide and assign (/=)
let result5 = a /= b;  // Divides a by b (a = a / b)
console.log(result5); // Output: -2 (-6 / 3)
console.log(a); // Output: -2 (a is now -2)

// Modulus and assign (%=)
let result6 = a %= c;  // Assigns the remainder of a divided by c (a = a % c)
console.log(result6); // Output: -2 (-2 % 8)
console.log(a); // Output: -2 (a remains -2)

// Exponentiation and assign (**=)
let result7 = a **= b;  // Raises a to the power of b (a = a ** b)
console.log(result7); // Output: -8 (-2 ** 3)
console.log(a); // Output: -8 (a is now -8)
