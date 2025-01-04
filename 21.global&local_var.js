// Global variables
var a = 10; // 'a' is a global variable, can be accessed anywhere in the code
var b = 20; // 'b' is a global variable, can be accessed anywhere in the code
var c = 30; // 'c' is a global variable, can be accessed anywhere in the code

// Function to demonstrate local variables with the addition operator
function addNumbers() {
    // Local variables (only accessible within this function)
    let x = 5; // 'x' is a local variable, can only be accessed inside this function
    let y = 15; // 'y' is a local variable, can only be accessed inside this function

    // Adding global and local variables
    let result = a + b + c + x + y; // Addition of global variables a, b, c, and local variables x, y
    console.log("Sum inside function: " + result); // Logs the sum inside the function
}

// Call the function to add the numbers
addNumbers(); // This will use global 'a', 'b', 'c' and local 'x', 'y' to calculate the sum

// Trying to access the local variables outside the function will result in an error
// console.log(x); // Uncommenting this will throw an error: Uncaught ReferenceError: x is not defined
// console.log(y); // Uncommenting this will throw an error: Uncaught ReferenceError: y is not defined

// Accessing and using the global variables directly outside the function
let globalSum = a + b + c; // Addition of only global variables 'a', 'b', and 'c'
console.log("Sum outside function: " + globalSum); // Logs the sum of the global variables



/*

// Global variables
var a = 10; // 'a' is a global variable, can be accessed anywhere in the code
var b = 20; // 'b' is a global variable, can be accessed anywhere in the code
var c = 30; // 'c' is a global variable, can be accessed anywhere in the code

// First block: Outer block
{
    console.log("First Block: Outer Block");
    console.log("Global variables a, b, c:", a, b, c); // Accessing global variables in the outer block

    // Second block: Inner block
    {
        console.log("Second Block: Inner Block");
        let x = 5; // 'x' is a local variable inside the inner block
        let y = 15; // 'y' is a local variable inside the inner block
        
        // Adding global and local variables inside the second block
        let result1 = a + b + c + x + y; // Global a, b, c and local x, y are added together
        console.log("Sum in Second Block: " + result1); // Logs the sum inside the second block

        // Third block: Innermost block
        {
            console.log("Third Block: Innermost Block");
            let z = 25; // 'z' is a local variable inside the innermost block
            
            // Adding global and local variables inside the third block
            let result2 = a + b + c + x + y + z; // Global a, b, c and local x, y, z are added together
            console.log("Sum in Third Block: " + result2); // Logs the sum inside the third block
        }
    }
}

// Accessing global variables outside the blocks
let globalSum = a + b + c; // Adding global variables a, b, c outside of any block
console.log("Sum outside all blocks: " + globalSum); // Logs the sum of global variables outside of any block


*/


/*

// Global scope
var a = 10; // 'a' is declared in the global scope
var b = 20; // 'b' is declared in the global scope
var c = 30; // 'c' is declared in the global scope

console.log("Global Scope: a =", a, "b =", b, "c =", c); // Accessing global variables

// Function scope
function myFunction() {
    var x = 5; // Local variable inside myFunction()
    console.log("Inside Function: x =", x);
    console.log("Accessing global variables inside function: a =", a, "b =", b, "c =", c); // Accessing global variables
    
    // Attempting arithmetic operations inside the function
    var sum = a + b + c + x;
    console.log("Sum inside function:", sum);
    
    // Nested function scope
    function nestedFunction() {
        var y = 10; // Local variable inside nestedFunction()
        console.log("Inside Nested Function: y =", y);
        
        // Arithmetic operations inside nested function
        var nestedSum = a + b + c + x + y;
        console.log("Sum inside nested function:", nestedSum);
    }
    
    nestedFunction(); // Call nested function
}

myFunction(); // Call myFunction()

// Trying to access local variables from outside their scope (will throw error)
console.log(x); // Error: x is not defined
console.log(y); // Error: y is not defined

*/