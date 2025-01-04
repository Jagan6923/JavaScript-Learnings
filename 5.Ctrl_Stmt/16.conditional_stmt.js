// 1. If Statement
let x = 10;
if (x > 5) {
    console.log("x is greater than 5");  // Since x is 10, it satisfies the condition, so this will be executed
}

// 2. If-Else Statement
let y = 3;
if (y > 5) {
    console.log("y is greater than 5");
} else {
    console.log("y is not greater than 5");  // Since y is 3, the else block will be executed
}

// 3. If-Else If-Else Statement
let z = 7;
if (z > 10) {
    console.log("z is greater than 10");
} else if (z === 7) {
    console.log("z is equal to 7");  // Since z is 7, this condition will be true
} else {
    console.log("z is less than 7");
}

// 4. Switch Statement
let day = 3;
let dayName;
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";  // Since day is 3, this block will be executed
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}
console.log(dayName);  // Output: Wednesday

// 5. Ternary Operator
let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";  // Since age is 18, "Adult" will be assigned to result
console.log(result);  // Output: Adult

// 6. Logical AND (&&) with Conditional Statements
let a = 5;
let b = 10;
if (a > 3 && b < 20) {
    console.log("Both conditions are true");  // Since both conditions are true, this will be executed
}

// 7. Logical OR (||) with Conditional Statements
let p = 5;
let q = 20;
if (p > 10 || q < 30) {
    console.log("At least one condition is true");  // Since q < 30, this will be executed
}

// 8. Negation with Conditional Statements
let isRaining = false;
if (!isRaining) {
    console.log("It's not raining");  // Since isRaining is false, !false makes it true, so this will be executed
}
