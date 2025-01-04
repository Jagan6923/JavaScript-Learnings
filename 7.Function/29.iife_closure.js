// normal function
function normalFunc() {
    console.log("Executed when called");
}
normalFunc();

// immediately invoked function expression (IIFE)
(function (username, age) {
    console.log("Self Executing Function, Hello " + username + " Your age is " + age);
})('Alice', 25);


//closure 
function outerFunction(outerVariable) {
    // This variable is part of the outer function
    return function innerFunction(innerVariable) {
        // Inner function accesses outerVariable and its own variable
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    };
}

// Create a closure by calling the outerFunction
const closureFunc = outerFunction("Hello");

// Now, call the inner function
closureFunc("World");
// Output:
// Outer Variable: Hello
// Inner Variable: World
