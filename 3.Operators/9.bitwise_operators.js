let a = 5;  // Binary: 0101
let b = 3;  // Binary: 0011

// Bitwise AND (&)
let result1 = a & b;  // Performs bitwise AND on a and b: 0101 & 0011 = 0001 (1 in decimal)
console.log(result1); // Output: 1

// Bitwise OR (|)
let result2 = a | b;  // Performs bitwise OR on a and b: 0101 | 0011 = 0111 (7 in decimal)
console.log(result2); // Output: 7

// Bitwise XOR (^)
let result3 = a ^ b;  // Performs bitwise XOR on a and b: 0101 ^ 0011 = 0110 (6 in decimal)
console.log(result3); // Output: 6

// Bitwise NOT (~)
let result4 = ~a;  // Performs bitwise NOT on a: Inverts bits of 0101 to 1010 (In decimal, it's -6)
console.log(result4); // Output: -6 (Inverts all bits of a)

// Left Shift (<<)
let result5 = a << 1;  // Shifts bits of a to the left by 1: 0101 << 1 = 1010 (10 in decimal)
console.log(result5); // Output: 10

// Right Shift (>>)
let result6 = a >> 1;  // Shifts bits of a to the right by 1: 0101 >> 1 = 0010 (2 in decimal)
console.log(result6); // Output: 2

// Unsigned Right Shift (>>>)
let result7 = a >>> 1;  // Shifts bits of a to the right by 1, treating the number as unsigned: 0101 >>> 1 = 0010 (2 in decimal)
console.log(result7); // Output: 2
