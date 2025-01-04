// Call by value example with primitive data types (number, string, boolean)

// Primitive data types (number, string, boolean, undefined, null) are stored in the stack
// The value is copied when assigned to another variable

let x = 10;   // x holds the value 10 in the stack
let y = x;    // y gets a copy of the value from x (y = 10)

// Stack before modification: 
// x = 10
// y = 10
console.log('Before modification: x =', x, ', y =', y);

// Now, let's modify x to demonstrate that y is unaffected
x = 20;  // x is now updated to 20, but y remains unchanged because y is a copy of x

// Stack after modification:
// x = 20
// y = 10
console.log('After modification: x =', x, ', y =', y);

// To further demonstrate Call by Value, let's use a function

function changeValue(num) {
    num = num + 10;  // This modifies the local copy of num, not the original variable
    return num;      // Returns the modified value
}

// Example: Assigning another primitive value
let a = 5;  // a holds the value 5
let b = a;  // b gets a copy of a, so b also holds 5

console.log('Before function call: a =', a, ', b =', b);  // Output: a = 5, b = 5

b = changeValue(b);  // b is passed to the function, which modifies the copy of b

console.log('After function call: a =', a, ', b =', b);  // Output: a = 5, b = 15

// Key takeaway:
// 1. x and y are independent after the assignment because x's value is copied to y (Call by Value).
// 2. Even after modifying b in the function, a remains unchanged because b was passed as a copy, not as a reference.

