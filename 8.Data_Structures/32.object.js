// Step 1: Creating an Object
// An object is a collection of key-value pairs, where keys are strings and values can be any data type.

const person = {
    name: "John Doe", // Key-value pair where key is 'name' and value is 'John Doe'
    age: 30,          // Key-value pair where key is 'age' and value is 30
    isEmployed: true,  // Key-value pair where key is 'isEmployed' and value is a boolean true
    greet: function () { // Method inside the object
        console.log(`Hello, my name is ${this.name}.`); // Accessing object property using 'this'
    }
};

console.log(person); // Logs the entire object
// Output: { name: 'John Doe', age: 30, isEmployed: true, greet: [Function: greet] }

// Step 2: Accessing Object Properties
// 1. Using dot notation
console.log("Name:", person.name); // Output: Name: John Doe
console.log("Age:", person.age);   // Output: Age: 30

// 2. Using bracket notation
console.log("Employment Status:", person["isEmployed"]); // Output: Employment Status: true

// Step 3: Modifying Object Properties
person.age = 31; // Modifying the 'age' property
person["isEmployed"] = false; // Modifying the 'isEmployed' property using bracket notation

console.log("Updated Person:", person);
// Output: Updated Person: { name: 'John Doe', age: 31, isEmployed: false, greet: [Function: greet] }

// Step 4: Adding New Properties
person.country = "USA"; // Adding a new property 'country'
console.log("Person with Country:", person);
// Output: Person with Country: { name: 'John Doe', age: 31, isEmployed: false, greet: [Function: greet], country: 'USA' }

// Step 5: Deleting Properties
delete person.isEmployed; // Deleting the 'isEmployed' property
console.log("Person after deletion:", person);
// Output: Person after deletion: { name: 'John Doe', age: 31, greet: [Function: greet], country: 'USA' }

// Step 6: Object Methods (Functions inside objects)
person.greet(); // Calling the 'greet' method inside the object
// Output: Hello, my name is John Doe.

// Step 7: Object Constructor
// Objects can also be created using the Object constructor
const car = new Object(); // Creating an empty object using Object constructor
car.make = "Toyota";       // Adding properties to the object
car.model = "Corolla";
car.year = 2020;

console.log("Car Object:", car);
// Output: Car Object: { make: 'Toyota', model: 'Corolla', year: 2020 }

// Step 8: Nested Objects
const employee = {
    id: 101,
    name: "Alice",
    department: {
        name: "HR",
        location: "New York"
    }
};

console.log("Employee Department:", employee.department);
// Output: Employee Department: { name: 'HR', location: 'New York' }

// Accessing nested object properties
console.log("Employee Department Location:", employee.department.location);
// Output: Employee Department Location: New York

// Step 9: Object Destructuring
// Destructuring allows easy extraction of multiple properties from an object
const { name, age, country } = person; // Extracting values from 'person' object into variables
console.log(name, age, country); // Output: John Doe 31 USA

// Step 10: Looping Over Object Properties
// Using 'for...in' loop to iterate through object keys
console.log("Iterating over Person Object:");
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John Doe
// age: 31
// greet: [Function: greet]
// country: USA

// Step 11: Object.freeze() (Immutability)
const frozenPerson = Object.freeze({
    name: "Jane",
    age: 25
});

frozenPerson.age = 30; // This won't modify the object because it's frozen
console.log("Frozen Person:", frozenPerson);
// Output: Frozen Person: { name: 'Jane', age: 25 }
// The 'age' property remains 25 despite modification attempt

// Step 12: Object Sealing
// Object.seal() allows modification of existing properties but prevents adding new ones
const sealedPerson = Object.seal({
    name: "Mark",
    age: 40
});

sealedPerson.age = 42; // Valid modification
sealedPerson.country = "Canada"; // Cannot add new property 'country'
console.log("Sealed Person:", sealedPerson);
// Output: Sealed Person: { name: 'Mark', age: 42 }
// 'country' property is not added because of sealing

// Step 13: Checking if Property Exists (hasOwnProperty)
console.log(person.hasOwnProperty("name")); // Output: true (Property exists)
console.log(person.hasOwnProperty("isEmployed")); // Output: false (Property doesn't exist after deletion)

// Step 14: Object.keys() and Object.values()
// Object.keys() returns an array of the object's property names
const keys = Object.keys(person);
console.log("Object Keys:", keys); // Output: [ 'name', 'age', 'greet', 'country' ]

// Object.values() returns an array of the object's property values
const values = Object.values(person);
console.log("Object Values:", values); // Output: [ 'John Doe', 31, [Function: greet], 'USA' ]
