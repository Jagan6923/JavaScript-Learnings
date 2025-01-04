let age = 20;
let canVote = age >= 18 ? "You can vote." : "You cannot vote.";  // Checks if age is >= 18
console.log(canVote);  // Output: "You can vote."

let temperature = 30;
let weatherMessage = temperature > 25 ? "It's hot outside!" : "The weather is fine.";  // Checks if temperature is > 25
console.log(weatherMessage);  // Output: "It's hot outside!"

let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";  // Nested ternary to determine grade
console.log(grade);  // Output: "B"

function checkEvenOdd(number) {
    return number % 2 === 0 ? "Even" : "Odd";  // Checks if number is even or odd
}

console.log(checkEvenOdd(4));  // Output: "Even"
console.log(checkEvenOdd(7));  // Output: "Odd"

let balance = 1500;
let accountType = balance > 1000 ? "Premium Account" : balance > 500 ? "Standard Account" : "Basic Account";  // Checks balance range
console.log(accountType);  // Output: "Premium Account"
