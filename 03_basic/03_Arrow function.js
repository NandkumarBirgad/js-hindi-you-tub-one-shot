// Arrow Functions in JavaScript

// Basic syntax of arrow function
// Traditional function
function traditionalFunction(a, b) {
    return a + b;
}

// Arrow function equivalent
const arrowFunction = (a, b) => a + b;

// Example 1: Simple arrow function
const greet = (name) => `Hello, ${name}!`;
console.log(greet("World")); // Output: Hello, World!

// Example 2: Arrow function with multiple statements
const calculateArea = (width, height) => {
    const area = width * height;
    return area;
};
console.log(calculateArea(5, 10)); // Output: 50

// Example 3: Arrow function with no parameters
const sayHello = () => "Hello!";
console.log(sayHello()); // Output: Hello!

// Example 4: Arrow function with single parameter (parentheses optional)
const square = x => x * x;
console.log(square(4)); // Output: 16

// Application: Using arrow functions in array methods

// Traditional way with anonymous function
const numbers = [1, 2, 3, 4, 5];
const doubledTraditional = numbers.map(function(num) {
    return num * 2;
});
console.log(doubledTraditional); // Output: [2, 4, 6, 8, 10]

// Using arrow function
const doubledArrow = numbers.map(num => num * 2);
console.log(doubledArrow); // Output: [2, 4, 6, 8, 10]

// More complex example: Filtering even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Application: In callbacks (e.g., setTimeout)
setTimeout(() => {
    console.log("This message appears after 1 second");
}, 1000);

// Application: In promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);
    });
};

fetchData().then(data => console.log(data));

// Key differences:
// 1. No 'this' binding - arrow functions don't have their own 'this'
// 2. Cannot be used as constructors
// 3. Shorter syntax for simple functions
// 4. Implicit return for single expressions
