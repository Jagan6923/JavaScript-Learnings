function* generatorFunction() {
    yield "First value";
    yield "Second value";
    yield "Third value";
    return "Final value";

}
// initializes the iterator object
let generator = generatorFunction();

console.log(generator.next().value); // Output: { value: 'First value', done: false }
console.log(generator.next().value); // Output: { value: 'Second value', done: false }
console.log(generator.next().value); // Output: { value: 'Third value', done: false }
console.log(generator.next().value); // Output: { value: undefined, done: true }



function* url() {
    yield "https:/";
    yield "www.example.org/";
    yield "homepage/";
}

let original = url()

console.log(original.next().value)
console.log(original.next().value)
console.log(original.next().value);
