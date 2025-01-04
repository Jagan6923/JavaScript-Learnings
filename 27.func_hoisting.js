// Example of function hoisting in JavaScript

// Calling the function before its declaration (Hoisting works for function declarations)
console.log(myFunction(5, 10)); // Output: 15, because function declarations are hoisted with their body

// Function declaration - hoisted to the top of the scope
function myFunction(a, b) {
    return a + b;
}

// Calling the function expression before its declaration (Does not work for function expressions)
try {
    console.log(myFunctionExpression(5, 10)); // TypeError: myFunctionExpression is not a function
} catch (error) {
    console.log(error); // Will catch and log the error
}

// Function expression - hoisted only the variable, not the function body
var myFunctionExpression = function (a, b) {
    return a * b;
};

// Function expressions are not hoisted with the function body, so it causes an error when called before definition
 