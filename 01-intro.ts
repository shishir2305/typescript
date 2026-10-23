// TypeScript (TS) is a statically typed superset of JavaScript developed by Microsoft. It adds features such as static typing, interfaces, type aliases, generics, and compile-time error checking to JavaScript.
// - Every valid JavaScript program is generally valid TypeScript, although strict compiler settings and newer syntax can introduce differences.
// - TypeScript code is transformed into JavaScript before execution in a typical web application.
// - Browsers and Node.js generally execute JavaScript, not TypeScript's type annotations.
// - TypeScript helps catch many errors during development, before the program runs.

// JavaScript: the type of the argument is not explicitly declared.
function add(a, b) {
  return a + b;
}

// TypeScript: types are checked during development/compilation.
function addNumbers(a: number, b: number): number {
  return a + b;
}

addNumbers(10, 20); // Valid: returns 30
addNumbers(10, "20"); // Compile-time error

// Need for typescript:
// - Static Type Checking: Detects type-related errors during development before runtime.
// - Early Error Detection: Catches invalid assignments, incorrect function arguments, and property access mistakes.
// - Better Developer Experience: Provides intelligent autocomplete, code navigation, and safer refactoring.
// - Maintainability & Scalability: Makes large codebases easier to understand, modify, and maintain.
