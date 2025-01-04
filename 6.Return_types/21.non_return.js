// Function to print a welcome message
function greet(name) {
    console.log(`Hello, ${name}!`); // Logs a message to the console
}

greet("Alice"); // Output: Hello, Alice!
greet("Bob"); // Output: Hello, Bob!

// Function to display today's date
function showDate() {
    let today = new Date(); // Create a new Date object
    console.log(`Today's date is: ${today.toDateString()}`); // Logs the date
}

showDate(); // Logs the current date, e.g., "Today's date is: Mon Dec 27 2024"
