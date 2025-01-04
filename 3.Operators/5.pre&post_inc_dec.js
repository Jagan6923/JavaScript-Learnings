let a = 5, b = 3, c = 8, d = 2;

// Pre-increment
let result1 = ++a + b * c;  // a is incremented first, then added to the result of b * c
console.log(result1); // Output: 45 (6 + 3 * 8)

// Post-increment
let result2 = a++ + b * d;  // a is used first in addition, then incremented after
console.log(result2); // Output: 11 (6 + 3 * 2)
console.log(a); // Output: 7 (a was incremented after the operation)

// Using multiple increments in one expression
let result3 = a++ + ++b * c--; // a is used first, then incremented; b is incremented first, then multiplied by c, then c is decremented
console.log(result3); // Output: 23 (7 + 4 * 8)
console.log(a); // Output: 8 (a was incremented after the operation)
console.log(b); // Output: 5 (b was incremented before the multiplication)
console.log(c); // Output: 7 (c was decremented after the multiplication)

// Combining addition, subtraction, and multiplication
let result4 = --a * b + c++ - d;  // a is decremented first, then multiplied by b, c is used first and incremented after, d is subtracted
console.log(result4); // Output: 28 (7 * 5 + 7 - 2)
console.log(a); // Output: 7 (a was decremented first)
console.log(b); // Output: 5 (b remains unchanged)
console.log(c); // Output: 8 (c was incremented after the operation)
