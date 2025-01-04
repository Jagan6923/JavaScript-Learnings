// Using var
// Declaration and Initialization
var x = 10; // Declared and initialized

console.log(x); // Output: 10

// Re-declaration (allowed in var)
var x = 20; // Re-declaring and re-initializing

console.log(x); // Output: 20

// Re-initialization (allowed in var)
x = 30; // Re-initializing without re-declaring

console.log(x); // Output: 30


// Using let
// Declaration and Initialization
let y = 10; // Declared and initialized

console.log(y); // Output: 10

// Re-declaration (NOT allowed with let, it will throw an error)
try {
    let y = 20; // Error: Identifier 'y' has already been declared
} catch (error) {
    console.log(error); // Output: SyntaxError: Identifier 'y' has already been declared
}

// Re-initialization (allowed with let)
y = 20; // Re-initializing (value changes)

console.log(y); // Output: 20


// Using const
// Declaration and Initialization (must be initialized at declaration)
const z = 10; // Declared and initialized

console.log(z); // Output: 10

// Re-declaration (NOT allowed with const, it will throw an error)
try {
    const z = 20; // Error: Identifier 'z' has already been declared
} catch (error) {
    console.log(error); // Output: SyntaxError: Identifier 'z' has already been declared
}

// Re-initialization (NOT allowed with const, it will throw an error)
try {
    z = 30; // Error: Assignment to constant variable
} catch (error) {
    console.log(error); // Output: TypeError: Assignment to constant variable
}
