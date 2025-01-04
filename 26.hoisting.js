// Example of Hoisting

// Using `var`
console.log(myVar);  // Output: undefined (hoisted, but initialized as undefined)
// `myVar` is hoisted to the top of the scope but not initialized until the line it is declared.
// So, trying to access it before the declaration gives `undefined`.

var myVar = "Hello, world!";  // `myVar` is declared and initialized
// After this line, `myVar` is assigned the string "Hello, world!".
// The value is available for use after this line.


// Using `let` (Temporal Dead Zone)
try {
    console.log(myLet);  // Throws a ReferenceError: Cannot access 'myLet' before initialization
} catch (error) {
    console.log(error.message);  // Output: Cannot access 'myLet' before initialization
}
// With `let`, the variable is hoisted, but it is not initialized until the line it is declared.
// Trying to access `myLet` before its declaration results in a ReferenceError due to the Temporal Dead Zone.

let myLet = "This is let";
// Now `myLet` is declared and initialized, and it can be accessed from here onward.


// Using `const` (Temporal Dead Zone)
try {
    console.log(myConst);  // Throws a ReferenceError: Cannot access 'myConst' before initialization
} catch (error) {
    console.log(error.message);  // Output: Cannot access 'myConst' before initialization
}
// Same behavior as `let`: `const` is hoisted, but not initialized until the line it is declared.
// Accessing it before declaration throws a ReferenceError.

const myConst = "This is const";
// Now `myConst` is declared and initialized, and it can be accessed from here onward.


