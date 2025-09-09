// ==========================================================
// 🔹 Example 1: Primitive (Stack memory)
// ==========================================================

let x = 100;      // Stack मध्ये x -> 100
let y = x;        // y = copy of x (value copy होते)

y = 200;          // y बदलतो पण x बदलत नाही

console.log("Primitive Example:");
console.log("x =", x); // 100
console.log("y =", y); // 200

// ==========================================================
// 🔹 Example 2: Non-Primitive (Object - Heap memory)
// ==========================================================

let person1 = { name: "Rahul" };  
// Stack: person1 -> reference (0x123)
// Heap:  0x123 -> { name: "Rahul" }

let person2 = person1;   
// person2 सुद्धा त्याच reference ला point करतो (0x123)

person2.name = "Amit";  
// Heap मधल्या actual object मध्ये बदल

console.log("\nNon-Primitive (Object) Example:");
console.log("person1.name =", person1.name); // "Amit"
console.log("person2.name =", person2.name); // "Amit"

// ==========================================================
// 🔹 Example 3: Array (Heap memory)
// ==========================================================

let arr1 = [1, 2, 3];
// Stack: arr1 -> reference (0x456)
// Heap:  0x456 -> [1, 2, 3]

let arr2 = arr1;
// arr2 -> 0x456 (same reference as arr1)

arr2.push(4);  
// Heap मधल्या actual array मध्ये बदल

console.log("\nArray Example:");
console.log("arr1 =", arr1); // [1, 2, 3, 4]
console.log("arr2 =", arr2); // [1, 2, 3, 4]

// ==========================================================
// 🟢 Summary
// ==========================================================
// 1. Primitive values (Number, String, Boolean, null, undefined, Symbol, BigInt)
//    👉 Stack मध्ये directly store होतात
//    👉 Pass by Value (copy होते)
//
// 2. Non-Primitive values (Object, Array, Function)
//    👉 Heap मध्ये store होतात (Stack मध्ये फक्त reference ठेवला जातो)
//    👉 Pass by Reference (एकच data share होतो)
// ==========================================================
