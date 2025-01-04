// Step 1: charAt - Gets the character at a specific index in the string.
let str = "Hello, World!";
console.log(str.charAt(0)); // Output: "H" (Character at index 0)
console.log(str.charAt(-1)); // Output: "" (Negative index returns an empty string)
console.log(str.charAt(50)); // Output: "" (Index out of bounds returns an empty string)

// Step 2: charCodeAt - Gets the Unicode of the character at the specified index.
console.log(str.charCodeAt(0)); // Output: 72 (ASCII code for "H")
console.log(str.charCodeAt(-1)); // Output: NaN (Negative index not allowed)

// Step 3: concat - Joins two or more strings.
let str1 = "Hello";
let str2 = "Jagan!";
let str3 = "How are you?";
let result = str1.concat(" ", str2, " ", str3);
console.log(result); // Output: "Hello Jagan! How are you?"

// Edge Case: `concat` is less commonly used than `+` or template literals.
console.log(`${str1} ${str2} ${str3}`); // Preferred method

// Step 4: includes - Checks if a string contains a specific substring.
console.log(str.includes("World")); // Output: true
console.log(str.includes("world")); // Output: false (Case-sensitive check)

// Edge Case: Adding the position argument.
console.log(str.includes("World", 8)); // Output: true (Starts checking from index 8)

// Step 5: indexOf - Finds the first occurrence of a substring.
console.log(str.indexOf("l")); // Output: 2 (First "l" is at index 2)
console.log(str.indexOf("x")); // Output: -1 (Substring not found)

// Step 6: lastIndexOf - Finds the last occurrence of a substring.
console.log(str.lastIndexOf("l")); // Output: 9
console.log(str.lastIndexOf("x")); // Output: -1 (Substring not found)

// Step 7: repeat - Repeats the string a specified number of times.
let repeated = "Hello".repeat(3);
console.log(repeated); // Output: "HelloHelloHello"
console.log("Hello".repeat(0)); // Output: "" (Repeating 0 times)

// Step 8: replace / replaceAll - Replace specific substrings.
let str4 = "Hello, World!";
console.log(str4.replace("World", "Universe")); // Output: "Hello, Universe!"
console.log(str4.replaceAll("l", "X")); // Output: "HeXXo, WorXd!"

// Edge Case: replaceAll may not be supported in older environments; use regex as an alternative.
console.log(str4.replace(/l/g, "X")); // Works the same as replaceAll

// Step 9: slice - Extracts a part of the string.
console.log(str.slice(0, 5)); // Output: "Hello"
console.log(str.slice(-6)); // Output: "World!" (Negative index counts from the end)

// Step 10: substr / substring - Extract parts of the string.
// Note: `substr` is deprecated; use `substring` instead.
console.log(str.substring(0, 5)); // Output: "Hello"
console.log(str.substring(5, 0)); // Output: "Hello" (Reverses indexes if start > end)

// Step 11: split - Splits a string into an array.
let sentence = "Hello World, I am Iron Man.";
let words = sentence.split(" "); // Split by spaces
console.log(words); // Output: ["Hello", "World,", "I", "am", "Iron", "Man."]
let letters = sentence.split("", 5); // Split into first 5 characters
console.log(letters); // Output: ["H", "e", "l", "l", "o"]

// Step 12: startsWith / endsWith - Check if a string starts or ends with a specific substring.
console.log(str.startsWith("Hello")); // Output: true
console.log(str.endsWith("World!")); // Output: true

// Edge Case: Providing a length for endsWith.
console.log(str.endsWith("World", 12)); // Output: true (Only checks first 12 characters)

// Step 13: toLowerCase / toUpperCase - Convert the case of a string.
console.log(str.toLowerCase()); // Output: "hello, world!"
console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"

// Step 14: trim / trimStart / trimEnd - Removes whitespace.
let paddedStr = "   Hello, World!   ";
console.log(paddedStr.trim()); // Output: "Hello, World!"
console.log(paddedStr.trimStart()); // Output: "Hello, World!   "
console.log(paddedStr.trimEnd()); // Output: "   Hello, World!"

// Step 15: valueOf - Returns the primitive value of a string object.
let strObj = new String("Hello, Moon!");
console.log(strObj.valueOf()); // Output: "Hello, Moon!"

// Notes:
// - Be cautious with case sensitivity in methods like includes and replace.
// - Negative indexes are often unsupported in string methods.
// - Use template literals (`${}`) over concat for better readability.
