// Global Scope Example
var globalVar = "I am a global variable"; // var in global scope
let globalLet = "I am a global let variable"; // let in global scope
const globalConst = "I am a global constant"; // const in global scope

console.log(globalVar); // Output: I am a global variable
console.log(globalLet); // Output: I am a global let variable
console.log(globalConst); // Output: I am a global constant

// Function Scope Example
function functionScopeExample() {
    var functionVar = "I am a function-scoped var"; // var is function-scoped
    let functionLet = "I am a function-scoped let"; // let is block-scoped within the function
    const functionConst = "I am a function-scoped const"; // const is block-scoped within the function

    console.log(functionVar); // Output: I am a function-scoped var
    console.log(functionLet); // Output: I am a function-scoped let
    console.log(functionConst); // Output: I am a function-scoped const
}

// Call the function to see function scope in action
functionScopeExample();
// console.log(functionVar); // Error: functionVar is not defined
// console.log(functionLet); // Error: functionLet is not defined
// console.log(functionConst); // Error: functionConst is not defined

// Block Scope Example
if (true) {
    var blockVar = "I am a block-scoped var"; // var is not truly block-scoped, leaks to the function or global scope
    let blockLet = "I am a block-scoped let"; // let is block-scoped
    const blockConst = "I am a block-scoped const"; // const is block-scoped

    console.log(blockVar); // Output: I am a block-scoped var
    console.log(blockLet); // Output: I am a block-scoped let
    console.log(blockConst); // Output: I am a block-scoped const
}

// var leaks outside the block
console.log(blockVar); // Output: I am a block-scoped var

// let and const do not leak outside the block
// console.log(blockLet); // Error: blockLet is not defined
// console.log(blockConst); // Error: blockConst is not defined


function checking() {
    if (true) {
        var blockVar = "I am a JEYARAMAN";
    }
    console.log(blockVar);
}

checking();

console.log(window.location.href);
