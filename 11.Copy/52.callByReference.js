// Call by Reference example with non-primitive data types (object, array)
// Reference, address, and pointer are terms used interchangeably to describe how non-primitive data types work in memory.

// Non-primitive data types like arrays and objects are stored in the heap memory
// When you assign them to another variable, both variables point to the same memory location (reference)

let obj1 = {        // An object is created and stored in the heap
    name: "John",   // obj1 holds a reference to the object
    age: 25
}

let arr = [1, 2, 3, 4, 5];  // Array is created and stored in the heap

let arr1 = arr;    // arr1 now holds a reference to the same array as arr

arr1.push(6);      // Modifying arr1 will affect arr because both are referencing the same array in memory
console.log('arr:', arr);  // Output: arr: [1, 2, 3, 4, 5, 6]
console.log('arr1:', arr1);  // Output: arr1: [1, 2, 3, 4, 5, 6]

// Both arr and arr1 refer to the same array in memory, so changes made via one variable are reflected in the other.

console.log('obj1 before modification:', obj1);  // Output: obj1 before modification: { name: 'John', age: 25 }

// Assigning obj1 to obj2 means obj2 now holds a reference to the same object as obj1.
let obj2 = obj1;   // obj2 points to the same object as obj1 in the heap

obj2.name = "Mark"; // Modifying obj2 will also modify obj1 since both reference the same object in memory

console.log('obj1 after modification:', obj1);  // Output: obj1 after modification: { name: 'Mark', age: 25 }
// obj1 has changed because obj2 is a reference to the same object.

console.log('obj2:', obj2);  // Output: obj2: { name: 'Mark', age: 25 }
// obj2 also reflects the change because it points to the same memory location as obj1.
