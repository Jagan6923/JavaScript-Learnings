let a = true, b = false, c = true, d = false;

// Logical AND (&&)
let result1 = a && b;  // Returns true only if both a and b are true
console.log(result1); // Output: false (true && false)

// Logical OR (||)
let result2 = a || b;  // Returns true if either a or b is true
console.log(result2); // Output: true (true || false)

// Logical NOT (!)
let result3 = !a;  // Returns true if a is false, and false if a is true
console.log(result3); // Output: false (NOT true)

// AND operation with multiple conditions
let result4 = a && c && d;  // Returns true only if all conditions are true
console.log(result4); // Output: false (true && true && false)

// OR operation with multiple conditions
let result5 = a || c || d;  // Returns true if any one of the conditions is true
console.log(result5); // Output: true (true || true || false)

// NOT with complex conditions
let result6 = !(a && b);  // Returns true if (a AND b) is false
console.log(result6); // Output: true (NOT (true && false))

// Combining AND, OR, and NOT
let result7 = !(a || b) && c;  // First negates (a OR b), then ANDs with c
console.log(result7); // Output: true (NOT (true || false) AND true)
