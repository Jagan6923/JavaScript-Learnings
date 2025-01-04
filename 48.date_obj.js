// JavaScript Date Object: Practical Examples with Explanations

// Create a new Date object to represent the current date and time.
let date = new Date();

// getFullYear: Returns the full year (e.g., 2025).
console.log("Full Year:", date.getFullYear()); // Output: e.g., 2025

// getMonth: Returns the month (0-11, where 0 is January and 11 is December).
console.log("Month:", date.getMonth() + 1); // Add 1 to match human-readable month format

// getDate: Returns the day of the month (1-31).
console.log("Date:", date.getDate());

// getDay: Returns the day of the week (0-6, where 0 is Sunday and 6 is Saturday).
console.log("Day of the Week:", date.getDay());

// getHours: Returns the hour (0-23).
console.log("Hours:", date.getHours());

// getMinutes: Returns the minutes (0-59).
console.log("Minutes:", date.getMinutes());

// getSeconds: Returns the seconds (0-59).
console.log("Seconds:", date.getSeconds());

// getTime: Returns the number of milliseconds since January 1, 1970 (Epoch time).
console.log("Milliseconds since Epoch:", date.getTime());

// Setting the date and time components of the Date object.

// setFullYear: Sets the year of the date object.
date.setFullYear(2024); // Sets year to 2024
console.log("Updated Year:", date.getFullYear());

// setMonth: Sets the month (0-11).
date.setMonth(11); // Sets to December (11)
console.log("Updated Month:", date.getMonth() + 1);

// setDate: Sets the day of the month (1-31).
date.setDate(27); // Sets to the 27th day
console.log("Updated Date:", date.getDate());

// setHours: Sets the hour (0-23).
date.setHours(12); // Sets time to 12 PM
console.log("Updated Hours:", date.getHours());

// setMinutes: Sets the minutes (0-59).
date.setMinutes(30); // Sets minutes to 30
console.log("Updated Minutes:", date.getMinutes());

// setSeconds: Sets the seconds (0-59).
date.setSeconds(0); // Sets seconds to 0
console.log("Updated Seconds:", date.getSeconds());

// Formatting date and time for display.

// toLocaleDateString: Returns the date in a human-readable format based on locale.
console.log("Localized Date:", date.toLocaleDateString()); // Output: e.g., 12/27/2024

// toLocaleTimeString: Returns the time in a human-readable format based on locale.
console.log("Localized Time:", date.toLocaleTimeString()); // Output: e.g., 12:30:00 PM

// toLocaleString: Returns the date and time combined in a human-readable format.
console.log("Localized Date and Time:", date.toLocaleString()); // Output: e.g., 12/27/2024, 12:30:00 PM

// toDateString: Returns the date portion as a human-readable string.
console.log("Date String:", date.toDateString()); // Output: e.g., Fri Dec 27 2024