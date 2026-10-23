/*
====================================================
             ARRAYS AND TUPLES IN TYPESCRIPT
====================================================

1. ARRAYS
---------
Definition:
An array stores multiple values of the same type.
TypeScript checks the types of elements you add.

Syntax:
    let variableName: type[] = [];
*/

// Array of numbers
let scores: number[] = [85, 90, 95];

scores.push(100); // Valid
// scores.push("A"); // Error: string is not a number

// Alternative syntax using Array<T>
let names: Array<string> = ["Alex", "Sam", "John"];

// Both number[] and Array<number> represent arrays of numbers.

// Accessing elements
console.log(scores[0]); // 85
console.log(names[1]);  // Sam

// TypeScript does not guarantee an index exists at runtime.
// Enable noUncheckedIndexedAccess for stricter index checking.


// 2. ARRAYS WITH UNION TYPES
// Each element can be a number OR a string.

let values: (string | number)[] = [10, "Hello", 20, "World"];

values.push(30);      // Valid
values.push("TypeScript"); // Valid
// values.push(true); // Error: boolean is not allowed


// 3. READONLY ARRAYS
// Prevents adding, removing, or replacing elements through this reference.

const colors: readonly string[] = ["red", "green", "blue"];

// colors.push("black"); // Error
// colors[0] = "black";  // Error

// readonly is a compile-time restriction, not runtime freezing.


// 4. TUPLES
// Definition:
// A tuple describes an array with a known position-based structure.
// Each position has a specific type.

let person: [string, number] = ["Shishir", 25];

// Index 0 must be a string; index 1 must be a number.
console.log(person[0]); // Shishir
console.log(person[1]); // 25

// Errors:
// person = [25, "Shishir"];
// person = ["Shishir"]; // Missing required element


// 5. OPTIONAL TUPLE ELEMENTS
// ? makes a tuple position optional.

let userInfo: [string, number?];

userInfo = ["Alex"];      // Valid
userInfo = ["Alex", 25];  // Also valid


// 6. NAMED TUPLE ELEMENTS
// Labels improve readability without changing the tuple's behavior.

let employee: [name: string, age: number, active: boolean] =
    ["Alex", 28, true];

console.log(employee[0]); // Alex


// 7. REST ELEMENTS IN TUPLES
// A tuple can have a fixed prefix followed by repeated elements.

let scoresWithName: [string, ...number[]] =
    ["Shishir", 85, 90, 95];


// 8. READONLY TUPLES
// Prevents modifying tuple elements through this reference.

const coordinates: readonly [number, number] = [10, 20];

// coordinates[0] = 50; // Error


// 9. ARRAY VS TUPLE
/*
Array:
- Usually represents a collection of similar items.
- Length can grow or shrink.
- Elements generally share one element type.

Tuple:
- Represents a known structure with types tied to positions.
- Required positions and their types are checked.
- Useful for pairs, coordinates, and structured return values.
*/

// Array example: multiple scores
let marks: number[] = [80, 90, 95];

// Tuple example: latitude and longitude
let location: [number, number] = [22.3, 73.2];


/*
====================================================
                  QUICK REVISION
====================================================

number[]       -> Array of numbers
string[]       -> Array of strings
Array<number>  -> Another way to declare number[]
(string | number)[] -> Array containing strings or numbers

[string, number] -> Tuple with a string followed by a number
[name: string, age: number] -> Named tuple
[string, number?] -> Tuple with an optional second element
readonly number[] -> Read-only array reference
readonly [number, number] -> Read-only tuple reference

MENTAL MODEL:
Array = collection of values.
Tuple = position-based structure with known types.
*/