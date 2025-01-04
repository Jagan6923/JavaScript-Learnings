// Math.abs(x): Returns the absolute value of x
console.log(Math.abs(-5)); // Output: 5 (Absolute value of -5 is 5)
console.log(Math.abs(0)); // Output: 0 (Absolute value of 0 is 0)
console.log(Math.abs(-Infinity)); // Output: Infinity

// Math.sign(x): Returns the sign of x (positive, negative, or zero)
console.log(Math.sign(-5)); // Output: -1 (Negative value)
console.log(Math.sign(0)); // Output: 0 (Zero)
console.log(Math.sign(5)); // Output: 1 (Positive value)
console.log(Math.sign(NaN)); // Output: NaN (Not a Number)

// Math.sqrt(x): Returns the square root of x
console.log(Math.sqrt(25)); // Output: 5 (Square root of 25)
console.log(Math.sqrt(0)); // Output: 0 (Square root of 0)
console.log(Math.sqrt(-1)); // Output: NaN (Square root of a negative number is not a real number)

// Math.cbrt(x): Returns the cube root of x
console.log(Math.cbrt(27)); // Output: 3 (Cube root of 27)
console.log(Math.cbrt(-8)); // Output: -2 (Cube root of -8 is -2)
console.log(Math.cbrt(0)); // Output: 0 (Cube root of 0)

// Math.floor(x): Returns the largest integer less than or equal to x
console.log(Math.floor(5.9)); // Output: 5 (Round down)
console.log(Math.floor(-5.9)); // Output: -6 (Round down for negative numbers)
console.log(Math.floor(0)); // Output: 0

// Math.pow(x, y): Returns x raised to the power of y
console.log(Math.pow(2, 3)); // Output: 8 (2 to the power of 3)
console.log(Math.pow(4, 0.5)); // Output: 2 (Square root of 4)
console.log(Math.pow(2, -3)); // Output: 0.125 (2 raised to -3 is 1/8)

// Math.min(...args): Returns the smallest number from the arguments
console.log(Math.min(1, 2, 3, 4, 5)); // Output: 1 (Smallest number)
console.log(Math.min(-1, -2, -3, -4, -5)); // Output: -5 (Smallest negative number)
console.log(Math.min()); // Output: Infinity (No arguments provided)

// Math.max(...args): Returns the largest number from the arguments
console.log(Math.max(1, 2, 3, 4, 5)); // Output: 5 (Largest number)
console.log(Math.max(-1, -2, -3, -4, -5)); // Output: -1 (Largest negative number)
console.log(Math.max()); // Output: -Infinity (No arguments provided)

// Math.round(x): Returns x rounded to the nearest integer
console.log(Math.round(5.5)); // Output: 6 (5.5 rounds up)
console.log(Math.round(5.4)); // Output: 5 (5.4 rounds down)
console.log(Math.round(-5.5)); // Output: -5 (Rounds towards zero for negative numbers)

// Math.random(): Returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // Output: Random number between 0 and 1
console.log((Math.random() * 10).toFixed(2)); // Output: Random number between 0 and 10 with 2 decimal places

// Math.ceil(x): Returns the smallest integer greater than or equal to x
console.log(Math.ceil(5.1)); // Output: 6 (Round up)
console.log(Math.ceil(-5.1)); // Output: -5 (Rounds up for negative numbers)

// Math.trunc(x): Returns the integer part of x by removing the decimal
console.log(Math.trunc(5.9)); // Output: 5 (Removes decimal)
console.log(Math.trunc(-5.9)); // Output: -5 (Removes decimal part for negative numbers)
console.log(Math.trunc(0)); // Output: 0
