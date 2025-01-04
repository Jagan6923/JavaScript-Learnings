// Defining variables
let firstName = "John";
let lastName = "Doe";
let age = 30;
let city = "New York";
let job = "Developer";

// Using template literals for string interpolation
let introduction = `Hello, my name is ${firstName} ${lastName}. I am ${age} years old and I live in ${city}. I work as a ${job}.`;

console.log(introduction);
// Output: "Hello, my name is John Doe. I am 30 years old and I live in New York. I work as a Developer."

// Multi-line string using template literals
let multiLineString = `
This is a string
that spans multiple lines
without the need for escape characters.`;

console.log(multiLineString);
// Output:
// "This is a string
// that spans multiple lines
// without the need for escape characters."

// Using template literals to embed expressions directly
let x = 5;
let y = 10;
let sum = `The sum of ${x} and ${y} is ${x + y}.`;

console.log(sum);
// Output: "The sum of 5 and 10 is 15."

// Using template literals to call functions within the string
function getGreeting(name) {
    return `Hello, ${name}!`;
}

let greeting = `${getGreeting(firstName)} Welcome to the world of JavaScript!`;
console.log(greeting);
// Output: "Hello, John! Welcome to the world of JavaScript."

// Using template literals for dynamic HTML creation (useful for web development)
let htmlContent = `
<div>
  <h1>${firstName} ${lastName}</h1>
  <p>Age: ${age}</p>
  <p>Location: ${city}</p>
  <p>Job: ${job}</p>
</div>`;

console.log(htmlContent);
// Output: Dynamic HTML string with embedded data

