// Boolean + Number
console.log(true + 5); 
// true is converted to 1, so 1 + 5 = 6

console.log(false + 10); 
// false is converted to 0, so 0 + 10 = 10

// Boolean + String
console.log(true + " is a truthy value");
// true is converted to "true", and then concatenated with the string " is a truthy value", so it becomes "true is a truthy value"

console.log(false + " is a falsy value");
// false is converted to "false", and then concatenated with the string " is a falsy value", so it becomes "false is a falsy value"

// Boolean + Object
console.log(true + {name: "JavaScript"}); 
// true is converted to "true", and {name: "JavaScript"} is converted to the string "[object Object]", so it becomes "true[object Object]"

console.log(false + {name: "JavaScript"}); 
// false is converted to "false", and {name: "JavaScript"} is converted to the string "[object Object]", so it becomes "false[object Object]"

// Boolean + Array
console.log(true + [1, 2, 3]); 
// true is converted to 1, and the array [1, 2, 3] is converted to "1,2,3", so it becomes "11,2,3"

console.log(false + [4, 5, 6]); 
// false is converted to 0, and the array [4, 5, 6] is converted to "4,5,6", so it becomes "04,5,6"

// Boolean + Null
console.log(true + null); 
// true is converted to 1, and null is converted to 0, so it becomes 1 + 0 = 1

console.log(false + null); 
// false is converted to 0, and null is converted to 0, so it becomes 0 + 0 = 0

// Boolean + Undefined
console.log(true + undefined); 
// true is converted to 1, and undefined is converted to NaN, so it becomes 1 + NaN = NaN

console.log(false + undefined); 
// false is converted to 0, and undefined is converted to NaN, so it becomes 0 + NaN = NaN
