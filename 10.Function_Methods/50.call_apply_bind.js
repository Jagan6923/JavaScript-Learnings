// The employee object with a method `introYourSelf`
let employee = {
    name: "John",
    age: 25,
    role: "Developer",
    salary: 50000,
    introYourSelf: function (a, b) {
        console.log(a + b + this.salary); // `this.salary` refers to the employee object's salary
        console.log(this.name);          // `this.name` refers to the employee object's name
    }
};

// Testing the method
employee.introYourSelf(10, 20); // Output: 5030 (10 + 20 + 50000), "John"

// The employee1 object with an arrow function as `introYourSelf`
var salary = 69; // Global salary variable
let employee1 = {
    name: "John",
    age: 25,
    role: "Developer",
    salary: 50000,
    introYourSelf: (a, b) => {
        console.log(a + b + this.salary); // `this` refers to the global object in arrow functions
    }
};

// Testing the arrow function method
employee1.introYourSelf(20, 3); // Output: NaN, as `this.salary` refers to undefined in the global context

// Explanation:
// In arrow functions, `this` does not refer to the object itself but to the enclosing lexical scope (global in this case).

// The person and person1 objects with `introYourSelf` using `call`, `apply`, and `bind`
let person = {
    pname: "Ram",
/*************  ✨ Codeium Command ⭐  *************/
    /**
     * Prints the person name and the sum of a and b to console
     * and returns the sum of a and b
     * @param {number} a - number to add
     * @param {number} b - number to add
     * @returns {number} sum of a and b
     */
/******  918d36e6-21fd-41fa-ac58-d039035c38a4  *******/    plname: "Jannu",
};

let person1 = {
    pid: 1,
    pname: "Nandha",
    plname: "Banu",
    introYourSelf: function (a, b) {
        console.log(this.pname + " " + this.plname + " " + (a + b));
        return a + b;
    }
};

// Using `call` to change the context of `this`
person1.introYourSelf.call(person, 20, 30); // Output: "Ram Jannu 50"

// Direct invocation of `introYourSelf` without changing context
person1.introYourSelf(1, 2); // Output: "Nandha Banu 3"

// Using `apply` to change the context of `this` (arguments passed as an array)
person1.introYourSelf.apply(person, [20, 30]); // Output: "Ram Jannu 50"

// Using `bind` to create a new function with `this` bound to `person`
let newbind = person1.introYourSelf.bind(person, 290, 30);
console.log(newbind()); // Output: "Ram Jannu 320"

// Explanation of `call`, `apply`, and `bind`:
// - `call`: Invokes the function immediately with the given `this` context and arguments.
// - `apply`: Similar to `call`, but arguments are passed as an array.
// - `bind`: Returns a new function with the given `this` context, which can be invoked later.

// Edge Cases:

// Arrow function and `this` context
let globalIntro = () => {
    console.log(this.pname); // `this` refers to the global object (undefined in strict mode)
};
globalIntro(); // Output: undefined

// Mixing bind with different contexts
let anotherBind = person1.introYourSelf.bind(person);
let yetAnotherBind = anotherBind.bind({ pname: "Override", plname: "Context" });
yetAnotherBind(1, 2); // Output: "Ram Jannu 3" (bind can only bind once)

// Summary:
// - Use regular functions for methods that rely on `this` referencing the object.
// - Arrow functions are useful for preserving the surrounding lexical scope's `this`.
// - `call` and `apply` are great for one-time context switching.
// - `bind` is ideal for creating reusable, pre-contextualized functions.
