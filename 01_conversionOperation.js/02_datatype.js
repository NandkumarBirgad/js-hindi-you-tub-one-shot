// ============================
// JavaScript Data Types
// ============================

// ----------------------------
// Primitive Data Types
// ----------------------------

const score = 100;              // Number (integer)
const scoreValue = 100.7;       // Number (float)
const isLoggedIn = false;       // Boolean
const outsideTemp = null;       // Null
let userEmail;                  // Undefined
const id = Symbol('123');       // Symbol (unique)
const anotherId = Symbol('123');// Symbol (unique, even with same description)
const bigNumber = 1234567890123456789012345678901234567890n; // BigInt

console.log("------ Primitive Data Types ------");
console.table([
  { variable: "score", value: score, type: typeof score },
  { variable: "scoreValue", value: scoreValue, type: typeof scoreValue },
  { variable: "isLoggedIn", value: isLoggedIn, type: typeof isLoggedIn },
  { variable: "outsideTemp", value: outsideTemp, type: typeof outsideTemp }, // typeof null => "object" (quirk)
  { variable: "userEmail", value: userEmail, type: typeof userEmail },
  { variable: "id", value: id.toString(), type: typeof id },
  { variable: "anotherId", value: anotherId.toString(), type: typeof anotherId },
  { variable: "bigNumber", value: bigNumber.toString(), type: typeof bigNumber }
]);

console.log("id === anotherId :", id === anotherId); // false

// ----------------------------
// Non-Primitive Data Types
// ----------------------------

const heros = ["spiderman", "batman", "ironman", "thor"]; // Array
let obj = { name: "nandu", age: 34 };                     // Object
const myFunction = function() {                           // Function
  console.log("Hello from myFunction()");
};

console.log("\n------ Non-Primitive Data Types ------");
console.table([
  { variable: "heros", value: JSON.stringify(heros), type: typeof heros },
  { variable: "obj", value: JSON.stringify(obj), type: typeof obj },
  { variable: "myFunction", value: myFunction.toString(), type: typeof myFunction }
]);

// Extra check for Array
console.log("Is heros an Array? ->", Array.isArray(heros)); // true
