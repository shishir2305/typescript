/*
TYPE INFERENCE IN TYPESCRIPT

Definition:
Type inference is TypeScript's ability to automatically
determine types without explicit type annotations.
*/

// 1. Variable Type Inference
let username = "Shishir"; // Inferred as string
let age = 25;              // Inferred as number
let isDeveloper = true;    // Inferred as boolean

username = "Alex"; // Valid
// username = 100; // Error: number is not assignable to string


// 2. Function Return Type Inference
function add(a: number, b: number) {
    return a + b; // Return type inferred as number
}

let result = add(10, 20); // Inferred as number
console.log(result);      // 30


// 3. Array Type Inference
let scores = [80, 90, 95]; // Inferred as number[]

scores.push(100); // Valid
// scores.push("A"); // Error: string is not assignable to number


// 4. Contextual Type Inference
const multiply: (a: number, b: number) => number =
    (a, b) => a * b;

// a and b are inferred as numbers from the function type.
console.log(multiply(4, 5)); // 20


// KEY TAKEAWAY:
// Type annotation: You explicitly declare the type.
// Type inference: TypeScript determines the type automatically.
// Inference reduces unnecessary annotations while maintaining type safety.