// 1. **Basic Arrow Function** (No parameters)
const sayHelloArrow = () => "Hello, World!";
// Explanation: The arrow function doesn't need the function keyword and the return is implicit for single expressions.

console.log(sayHelloArrow()); // Output: Hello, World!

// 2. **Arrow Function with Parameters**
const addArrow = (a, b) => a + b;
// Explanation: This arrow function accepts two parameters, and the return is implicit since there's only one expression.

console.log(addArrow(5, 3)); // Output: 8

// 3. **Arrow Function with Multiple Statements (Explicit Return)**
const multiplyAndLogArrow = (a, b) => {
    const result = a * b;
    console.log(result);
    return result; // Explicit return in case of multiple statements.
};

console.log(multiplyAndLogArrow(4, 5)); // Output: 20

// 4. **Arrow Function with Single Parameter (Implicit Return)**
const squareArrow = a => a * a;
// Explanation: Since there's only one parameter, parentheses are optional. The return is implicit.

console.log(squareArrow(4)); // Output: 16

// 5. **Arrow Function with No Parameters**
const greetArrow = () => "Good Morning!";
// Explanation: Arrow functions can also have no parameters, and the return is implicit for a single expression.

console.log(greetArrow()); // Output: Good Morning!

// 6. **Lexical `this` Binding in Arrow Functions**
function Person(name) {
    this.name = name;
    // Regular function uses its own 'this' and could be lost in certain contexts (like setTimeout).
    this.greetRegular = function () {
        console.log("Hello, " + this.name);
    };
    // Arrow function lexically binds 'this' from the surrounding context.
    this.greetArrow = () => {
        console.log("Hello, " + this.name);
    };
}

const person = new Person("Alice");
person.greetRegular(); // Output: Hello, Alice
person.greetArrow();   // Output: Hello, Alice

// 7. **Arrow Function and setTimeout (Lexical this)**
function PersonWithTimeout(name) {
    this.name = name;

    // Regular function loses 'this' context inside setTimeout
    setTimeout(function () {
        console.log("Regular function: " + this.name); // 'this' is undefined in setTimeout
    }, 1000);

    // Arrow function retains 'this' context from the outer scope
    setTimeout(() => {
        console.log("Arrow function: " + this.name); // 'this' correctly refers to 'PersonWithTimeout'
    }, 1000);
}

const personWithTimeout = new PersonWithTimeout("Bob");
// Output after 1 second:
// Arrow function: Bob
// Regular function: undefined (or throws an error in strict mode)
