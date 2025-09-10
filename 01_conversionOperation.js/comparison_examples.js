// Comprehensive Examples of Comparisons in JavaScript

console.log("=== Comparison Examples in JavaScript ===");

// 1. Equality Operators
console.log("\n1. Equality Operators");

// == (loose equality)
console.log('5 == "5":', 5 == "5"); // true, type coercion
console.log('0 == false:', 0 == false); // true
console.log('null == undefined:', null == undefined); // true

// === (strict equality)
console.log('5 === "5":', 5 === "5"); // false, no type coercion
console.log('0 === false:', 0 === false); // false
console.log('null === undefined:', null === undefined); // false

// != and !==
console.log('5 != "5":', 5 != "5"); // false
console.log('5 !== "5":', 5 !== "5"); // true

// 2. Relational Operators
console.log("\n2. Relational Operators");

console.log('5 > 3:', 5 > 3);
console.log('5 < 3:', 5 < 3);
console.log('5 >= 5:', 5 >= 5);
console.log('5 <= 4:', 5 <= 4);

// String comparison (lexicographical)
console.log('"apple" > "banana":', "apple" > "banana"); // false
console.log('"apple" < "banana":', "apple" < "banana"); // true

// 3. Logical Operators in Comparisons
console.log("\n3. Logical Operators in Comparisons");

let x = 10;
console.log('x > 5 && x < 15:', x > 5 && x < 15);
console.log('x < 5 || x > 15:', x < 5 || x > 15);
console.log('!(x === 10):', !(x === 10));

// 4. Comparing Objects and Arrays
console.log("\n4. Comparing Objects and Arrays");

let obj1 = {a: 1};
let obj2 = {a: 1};
let obj3 = obj1;

console.log('obj1 == obj2:', obj1 == obj2); // false, different references
console.log('obj1 === obj2:', obj1 === obj2); // false
console.log('obj1 === obj3:', obj1 === obj3); // true

let arr1 = [1, 2];
let arr2 = [1, 2];
let arr3 = arr1;

console.log('arr1 == arr2:', arr1 == arr2); // false
console.log('arr1 === arr2:', arr1 === arr2); // false
console.log('arr1 === arr3:', arr1 === arr3); // true

// 5. Special Cases
console.log("\n5. Special Cases");

console.log('NaN == NaN:', NaN == NaN); // false
console.log('NaN === NaN:', NaN === NaN); // false
console.log('isNaN(NaN):', isNaN(NaN)); // true

console.log('0 == -0:', 0 == -0); // true
console.log('0 === -0:', 0 === -0); // true

// 6. Comparing with null and undefined
console.log("\n6. Comparing with null and undefined");

console.log('null == undefined:', null == undefined); // true
console.log('null === undefined:', null === undefined); // false
console.log('null > 0:', null > 0); // false
console.log('null >= 0:', null >= 0); // true
console.log('undefined > 0:', undefined > 0); // false
console.log('undefined == 0:', undefined == 0); // false

// 7. Ternary Operator for Comparison
console.log("\n7. Ternary Operator for Comparison");

let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log('Can vote:', canVote);

// 8. Chained Comparisons (not like Python)
console.log("\n8. Chained Comparisons");

let val = 5;
console.log('5 < val < 10:', 5 < val < 10); // true but unexpected
console.log('Proper way: (5 < val) && (val < 10):', (5 < val) && (val < 10));

// 9. Comparing Strings with localeCompare
console.log("\n9. Comparing Strings with localeCompare");

let str1 = "ä";
let str2 = "z";
console.log('str1.localeCompare(str2):', str1.localeCompare(str2)); // negative means str1 < str2

// 10. Object.is for comparison
console.log("\n10. Object.is for Comparison");

console.log('Object.is(NaN, NaN):', Object.is(NaN, NaN)); // true
console.log('Object.is(0, -0):', Object.is(0, -0)); // false
console.log('Object.is(5, 5):', Object.is(5, 5)); // true

// 11. Summary of comparison operators
console.log("\n11. Summary of Comparison Operators");

console.log('== : loose equality, allows type coercion');
console.log('=== : strict equality, no type coercion');
console.log('!= : loose inequality');
console.log('!== : strict inequality');
console.log('> , < , >= , <= : relational operators');
console.log('&& , || , ! : logical operators used in comparisons');
console.log('Object.is() : precise equality comparison');

// End of comparison examples
console.log("\n=== End of Comparison Examples ===");
