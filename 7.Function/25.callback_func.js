function function1(callback) {
    console.log("Function 1 - Higher Order Function");
    callback();  // Invoking the callback (function2)
}

function function2() {
    console.log("Function 2 - Callback");
}

// Now calling function1 with function2 as the callback
function1(function2);  // Output: Function 1 - Higher Order Function, Function 2 - Callback


function add(callback, a, b) {
    console.log(a + b);  // Adds the numbers a and b
    callback(4, 4);      // Calling the callback function (subs) with arguments
}

function subs(num1, num2) {
    console.log(num1 + num2);  // Adds the numbers num1 and num2
}

add(subs, 20, 40);


function processOrder(orderDetails, callback) {
    console.log("Processing Order:", orderDetails);
    // Simulating order processing time
    setTimeout(() => {
        console.log("Order Processed!");
        callback();  // Calling the callback function after order processing
    }, 2000);
}

function sendEmail() {
    console.log("Sending Confirmation Email...");
}

// Use callback to send the email after the order is processed
processOrder("Order #123", sendEmail);
