// String with a number
let str = "The number is: ";
let num = 10;
let result1 = str + num;  // Implicit conversion of number to string (10 becomes "10")
console.log(result1);  // Output: "The number is: 10"

// String with a boolean
let bool = true;
let result2 = str + bool;  // Implicit conversion of boolean to string (true becomes "true")
console.log(result2);  // Output: "The number is: true"

// String with null
let nullValue = null;
let result3 = str + nullValue;  // Implicit conversion of null to string ("null" becomes "null")
console.log(result3);  // Output: "The number is: null"

// String with undefined
let undefinedValue = undefined;
let result4 = str + undefinedValue;  // Implicit conversion of undefined to string ("undefined" becomes "undefined")
console.log(result4);  // Output: "The number is: undefined"

// String with an object
let obj = { name: "Alice", age: 25 };
let result5 = str + obj;  // Implicit conversion of object to string (calls obj.toString() which returns "[object Object]")
console.log(result5);  // Output: "The number is: [object Object]"

// String with an array
let arr = [1, 2, 3];
let result6 = str + arr;  // Implicit conversion of array to string (joins array elements with commas)
console.log(result6);  // Output: "The number is: 1,2,3"

// String with a function
let func = function () { return "Hello, World!"; };
let result7 = str + func;  // Implicit conversion of function to string (calls func.toString() which returns the function's source code)
console.log(result7);  // Output: "The number is: function() { return 'Hello, World!'; }"

// String with NaN
let nanValue = NaN;
let result8 = str + nanValue;  // Implicit conversion of NaN to string ("NaN" becomes "NaN")
console.log(result8);  // Output: "The number is: NaN"
