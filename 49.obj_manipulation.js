// Prototype is a blueprint for creating objects
let person = { name: "Johny", age: 25 }; // Base object
console.log(person);

// Object.create() Method
// Creates a new object with the specified prototype
let newObj = Object.create(person);
newObj.location = "Bangalore"; // Adding a new property
// 'person' becomes the prototype of 'newObj'

console.log(newObj.__proto__); // Accessing the prototype using __proto__
console.log(Object.getPrototypeOf(newObj)); // Recommended way to get the prototype
console.log(newObj); // Output the new object

// Edge Case: Modifying the prototype affects all objects created from it
person.name = "Updated Johny";
console.log(newObj.name); // Output: "Updated Johny" (Inherited from the prototype)

// Object.assign() Method
// Copies properties from one or more objects into a target object
let person1 = { name: "Mark", age: 30 };
let newObj1 = Object.assign(person1, { role: "Admin", country: "USA" });
console.log(person1); // Modified target object
console.log(newObj1); // Same as person1 (target object itself)

// Edge Case: Nested objects are shallow copied
let nestedObj = { details: { height: 180 } };
let copiedObj = Object.assign({}, nestedObj);
copiedObj.details.height = 190;
console.log(nestedObj.details.height); // Output: 190 (Shallow copy)

// Object.entries() Method
// Converts an object into an array of [key, value] pairs
let employee = { name: "John", age: 25, role: "Developer" };
let entries = Object.entries(employee);
entries.push(["location", "Bangalore"]); // Adding a new key-value pair as an array
console.log(entries);

// Object.fromEntries() Method
// Converts an array of [key, value] pairs back into an object
let fromEntries = Object.fromEntries(entries);
console.log(fromEntries);

// Edge Case: Duplicate keys in the array
let duplicateEntries = [["key", "value1"], ["key", "value2"]];
let duplicateObj = Object.fromEntries(duplicateEntries);
console.log(duplicateObj); // Output: { key: "value2" } (Last entry overwrites previous)

// Object.keys() Method
// Returns an array of the object's keys
let keys = Object.keys(employee);
console.log(keys);

// Object.values() Method
// Returns an array of the object's values
let values = Object.values(employee);
console.log(values);

// Object.freeze() Method
// Prevents modifications to the object (no add, delete, or update allowed)
let person2 = { name: "John", age: 30 };
Object.freeze(person2);
person2.name = "Mark"; // Ignored in strict mode, silently fails otherwise
console.log(person2);

// Object.isFrozen() Method
// Checks if an object is frozen
console.log(Object.isFrozen(person2)); // Output: true

// Edge Case: Freezing a nested object
let nestedFrozen = { details: { age: 30 } };
Object.freeze(nestedFrozen);
nestedFrozen.details.age = 35; // Allowed (freeze is shallow)
console.log(nestedFrozen.details.age); // Output: 35

// Object.seal() Method
// Prevents adding or removing properties but allows modifying existing properties
let person3 = { name: "John", age: 30 };
Object.seal(person3);
person3.name = "Mark"; // Allowed
person3.role = "Developer"; // Ignored in strict mode, silently fails otherwise
console.log(person3);

// Edge Case: Checking if an object is sealed
console.log(Object.isSealed(person3)); // Output: true
delete person3.name; // Fails (property cannot be deleted)
console.log(person3);

// Recap: Object.freeze vs Object.seal
// freeze: Prevents any modifications
// seal: Prevents adding/removing properties but allows updates
