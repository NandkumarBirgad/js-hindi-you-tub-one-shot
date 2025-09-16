//function sayName () {
    //console.log('N'),
   // console.log('A'),
    //console.log('N'),
    //console.log('D'),
    //console.log('U');
//}

//sayName()

//function AddNUmber(number1, number2){
    //console.log(number1 + number2)
//}
//AddNUmber(4, 5)

// This function adds two numbers and returns the result
function AddTwoNumber(number1, number2) {
    //let result = number1 + number2;
    //return result;
    //console.log("nandu")
    return number1 + number2
}
const result = AddTwoNumber(3,8)
//console.log("RESULT:", result)

function LoginUserMassege(username){
    // This function takes a username and returns a login message using template literals
    return `${username} just logged in`
}
console.log(LoginUserMassege("nandu"));

// Example function: greetUser
// This function takes a name and returns a greeting message
function greetUser(name) {
    return `Hello, ${name}! Welcome to our application.`
}

// Example usage
console.log(greetUser("Nandu"));

// Function Expression: Assigning a function to a variable
const multiplyNumbers = function(a, b) {
    return a * b;
};
console.log("Function Expression:", multiplyNumbers(4, 5)); // Output: 20

// Arrow Function: Shorter syntax for functions
const subtractNumbers = (a, b) => a - b;
console.log("Arrow Function:", subtractNumbers(10, 3)); // Output: 7

// Function with Default Parameters: Parameters have default values if not provided
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log("Default Parameter:", greet()); // Output: Hello, Guest!
console.log("Default Parameter:", greet("Alice")); // Output: Hello, Alice!

// Function with Rest Parameters: Accepts multiple arguments as an array
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log("Rest Parameters:", sumAll(1, 2, 3, 4)); // Output: 10

// Function Returning an Object: Returns a structured data
function createUser(name, age) {
    return {
        name: name,
        age: age,
        greeting: function() {
            return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
        }
    };
}
const user = createUser("Bob", 25);
console.log("Function Returning Object:", user.greeting()); // Output: Hi, I'm Bob and I'm 25 years old.

// Async Function: Handles asynchronous operations (e.g., promises)
async function fetchData() {
    // Simulating an async operation
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched successfully!"), 1000);
    });
}
fetchData().then(result => console.log("Async Function:", result));
