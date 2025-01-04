// Number with a string
let num1 = 25;
let str1 = " apples";
let result1 = num1 + str1;  // Implicit conversion of number to string (25 becomes "25") and then concatenates with " apples"
console.log(result1);  // Output: "25 apples"

// Number with a boolean
let num2 = 50;
let bool1 = true;
let result2 = num2 + bool1;  // Implicit conversion of boolean true to number (true becomes 1), so 50 + 1 = 51
console.log(result2);  // Output: 51

let bool2 = false;
let result3 = num2 + bool2;  // Implicit conversion of boolean false to number (false becomes 0), so 50 + 0 = 50
console.log(result3);  // Output: 50

// Number with null
let num3 = 10;
let nullValue = null;
let result4 = num3 + nullValue;  // Implicit conversion of null to 0, so 10 + 0 = 10
console.log(result4);  // Output: 10

// Number with undefined
let num4 = 100;
let undefinedValue = undefined;
let result5 = num4 + undefinedValue;  // Implicit conversion of undefined to NaN (Not-a-Number), so 100 + NaN = NaN
console.log(result5);  // Output: NaN

// Number with an object
let num5 = 30;
let obj = { name: "Object" };
let result6 = num5 + obj;  // Implicit conversion of object to string ("[object Object]"), so 30 + "[object Object]" becomes "30[object Object]"
console.log(result6);  // Output: "30[object Object]"

// Number with an array
let num6 = 10;
let arr = [5, 10, 15];
let result7 = num6 + arr;  // Implicit conversion of array to string ("5,10,15"), so 10 + "5,10,15" becomes "10" + "5,10,15" = "105,10,15"
console.log(result7);  // Output: "105,10,15"

// Number with a function
let num7 = 5;
let func = function () { return "Hello"; };
let result8 = num7 + func;  // Implicit conversion of function to string (calls func.toString()), so 5 + "function() { return 'Hello'; }" becomes "5function() { return 'Hello'; }"
console.log(result8);  // Output: "5function() { return 'Hello'; }"

// Number with NaN
let num8 = 20;
let nanValue = NaN;
let result9 = num8 + nanValue;  // Implicit conversion of NaN to NaN, so 20 + NaN = NaN
console.log(result9);  // Output: NaN





/*
console.log(10 + [1, 2]);
Step-by-Step Breakdown:
[1, 2] is an array.

Arrays are objects in JavaScript, and when they are involved in string concatenation or addition operations, JavaScript will convert the array to a string.
When JavaScript encounters the + operator between a number (10) and an array ([1, 2]), it first converts the array to a string.

The default behavior for arrays when converted to a string is that array elements are joined with commas. So, the array [1, 2] gets converted to the string "1,2".
Now, the operation is:

10 + "1,2"
Since one of the operands is a string ("1,2"), JavaScript performs string concatenation (not addition, because of the string).

The number 10 is converted to a string ("10") and then concatenated with the string "1,2".
The final result is the string: "101,2".

*/