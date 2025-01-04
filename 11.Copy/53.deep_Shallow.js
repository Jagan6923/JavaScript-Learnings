// Let's first look at a basic example for Deep Copy and Shallow Copy:

// 1. **Deep Copy**
// A deep copy creates a **completely independent** copy of the original object.
// It recursively copies all the nested objects and arrays, so changes to one object don't affect the other.

// Example of Deep Copy with Primitives (Numbers)
let a = 10;  // Primitive data type
let b = a;   // Assigning value of a to b
a = 20;      // Now we change a to 20
console.log(a, b); // Output: 20 10 (a is 20, but b remains 10 because they are independent)

// Example of Deep Copy with Objects (Object with nested properties)
let obj1 = {
    name: "John",
    age: 25
};
let obj2 = { ...obj1 };  // Using spread syntax to copy the object (shallow copy)
obj2.name = "Mark";      // Changing name in obj2 won't affect obj1
console.log(obj1, obj2);  // Output: obj1 = { name: "John", age: 25 }, obj2 = { name: "Mark", age: 25 }


// 2. **Shallow Copy**
// A shallow copy creates a **new object** but it does **not copy nested objects** or arrays. 
// Instead, it copies references to the nested objects. This means changes to nested objects will affect both the original and the copy.

let person = {
    name: "Madan",
    role: "YouTuber",
    age: 25,
    hobbies: ["Reading", "Writing", "Coding"]
};

// Using shallow copy with spread syntax
let person2 = { ...person, hobbies: [...person.hobbies] };  // We do a shallow copy, but we explicitly copy the hobbies array

// Now let's change properties to see the difference
person.name = "Rishi";  // Changes only in person, not in person2
person.hobbies[0] = "Dancing";  // This affects both person and person2 since hobbies is a reference

console.log(person);  // Output: { name: "Rishi", role: "YouTuber", age: 25, hobbies: ["Dancing", "Writing", "Coding"] }
console.log(person2); // Output: { name: "Madan", role: "YouTuber", age: 25, hobbies: ["Dancing", "Writing", "Coding"] }


// 3. **Deep Copy Using JSON Methods**
// To create a true deep copy of an object (including nested objects/arrays), we can use `JSON.parse(JSON.stringify())` method.

// If we use JSON.parse(JSON.stringify()) on the `person` object:
let person3 = JSON.parse(JSON.stringify(person));  // Deep copy of person object
console.log(person3); // Output: A completely independent copy of the person object


// Example with Nested Arrays:
let arr = [1, 2, 3, [4, 5, 6]];   // Nested array
let arr2 = [...arr];                // Shallow copy using spread syntax
let newArr = JSON.parse(JSON.stringify(arr)); // Deep copy of array using JSON methods

// Modify the original array and its nested array
arr[0] = 10;                // Change first element of arr
arr[3][0] = 40;             // Change nested array element in arr

// Modify the deep copy
newArr[3][1] = 50;          // Change a nested element in the deep copy

console.log(arr);            // Output: [10, 2, 3, [40, 5, 6]]
console.log(arr2);           // Output: [1, 2, 3, [40, 5, 6]] (shallow copy - arr2 reflects arr change)
console.log(newArr);         // Output: [1, 2, 3, [4, 50, 6]] (deep copy - newArr is independent)

// Explanation:
// 1. Shallow copy (arr2) holds a reference to the nested array, so changes to the nested array in arr will affect arr2.
// 2. Deep copy (newArr) is completely independent of the original array, so changes to the nested array in arr do not affect newArr.

//--------------------------------------------------------------

/*

// 1. **Primitive Data Type Copy (Call by Value)**
// When copying primitive data types (numbers, strings, booleans), we are always making a copy of the value.

// Example with Primitive Data Type (number)
let a = 10;
let b = a;  // b is a copy of a
a = 20;     // Changing a does not affect b
console.log(a, b);  // Output: 20 10 (a is 20, b is 10)

// Example with Primitive Data Type (string)
let str1 = "Hello";
let str2 = str1;   // str2 is a copy of str1
str1 = "Goodbye";  // Changing str1 does not affect str2
console.log(str1, str2);  // Output: Goodbye Hello (str1 is Goodbye, str2 remains Hello)


// 2. **Shallow Copy**
// A shallow copy creates a new object, but it **does not** recursively copy nested objects or arrays. It copies **references** to nested objects/arrays.

// Example of Shallow Copy with Object (Using Spread Syntax)
let person = {
    name: "Madan",
    role: "YouTuber",
    age: 25,
    hobbies: ["Reading", "Writing", "Coding"]
};

// Using spread syntax for shallow copy
let person2 = { ...person };

// Modifying the top-level property of person2 won't affect person
person2.name = "Rishi";  
console.log(person.name, person2.name);  // Output: Madan Rishi (person2 has its own name, person remains unchanged)

// However, if you modify a nested object/array, it will affect both person and person2, as they share the reference to `hobbies`.
person2.hobbies[0] = "Dancing";  
console.log(person.hobbies, person2.hobbies);  // Output: [ 'Dancing', 'Writing', 'Coding'] [ 'Dancing', 'Writing', 'Coding' ] 
// Changes to nested array 'hobbies' are reflected in both objects since it's a shallow copy

// To fix this issue, you can manually copy the nested objects (deep copy for nested arrays):
let person3 = { ...person, hobbies: [...person.hobbies] };
person3.hobbies[0] = "Swimming";  // Changes only in person3
console.log(person.hobbies, person3.hobbies);  // Output: [ 'Dancing', 'Writing', 'Coding'] [ 'Swimming', 'Writing', 'Coding' ]


// 3. **Deep Copy**
// A deep copy creates a completely new copy of the object, including nested objects/arrays. Any changes made to the new object will not affect the original object.

// Example of Deep Copy with Objects and Arrays (Using JSON methods)
let arr = [1, 2, 3, [4, 5, 6]];
let arr2 = JSON.parse(JSON.stringify(arr));  // Creating a deep copy using JSON methods

arr[0] = 10;          // Modify the top-level array element
arr[3][0] = 40;       // Modify a nested array element

console.log(arr);      // Output: [10, 2, 3, [40, 5, 6]]
console.log(arr2);     // Output: [1, 2, 3, [4, 5, 6]] (arr2 is unaffected because it's a deep copy)


// 4. **Deep Copy using Custom Methods**
// Sometimes JSON methods don't work if the object contains functions, undefined, or circular references.
// In that case, we can use other methods like `Object.assign()` for shallow copies or implement our own deep copy logic for more complex scenarios.

function deepCopy(obj) {
    let copy;

    if (Array.isArray(obj)) {
        copy = [];  // If it's an array, create a new array
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepCopy(obj[i]);  // Recursively copy each element
        }
    } else if (typeof obj === "object" && obj !== null) {
        copy = {};  // If it's an object, create a new object
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = deepCopy(obj[key]);  // Recursively copy each property
            }
        }
    } else {
        copy = obj;  // For primitive types, simply return the value (no copy needed)
    }

    return copy;
}

// Example of Deep Copy with a Custom Method
let original = {
    name: "Alice",
    hobbies: ["Reading", "Traveling"],
    address: { city: "New York", zip: 10001 }
};

let deepCopiedObject = deepCopy(original);

deepCopiedObject.hobbies[0] = "Cooking";  // Changes only in deepCopiedObject, not in original
deepCopiedObject.address.city = "Los Angeles";  // Same for address

console.log(original);         // Output: { name: 'Alice', hobbies: [ 'Reading', 'Traveling' ], address: { city: 'New York', zip: 10001 } }
console.log(deepCopiedObject); // Output: { name: 'Alice', hobbies: [ 'Cooking', 'Traveling' ], address: { city: 'Los Angeles', zip: 10001 } }


// 5. **Summary of Key Concepts:**

/* 
    1. **Shallow Copy** (using spread syntax, Object.assign):
        - Copies the top-level properties.
        - Nested objects/arrays still refer to the same memory location.
        - Changes in nested objects/arrays will affect both the original and copied object.

    2. **Deep Copy** (using JSON methods or custom deep copy function):
        - Creates a fully independent copy, including nested objects/arrays.
        - Changes to nested objects/arrays in the copied object do not affect the original.
        - Use deep copy for objects with nested structures to maintain independence.

    3. **When to Use:**
        - Use **shallow copy** when you only need a copy of the top-level object and can share references for nested objects/arrays.
        - Use **deep copy** when you need a completely independent copy, especially for objects/arrays with nested structures.
*/
