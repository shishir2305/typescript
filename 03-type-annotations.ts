/*
====================================================
        TYPE ANNOTATIONS IN TYPESCRIPT
====================================================

Definition:
A type annotation explicitly specifies the expected
type of a variable, parameter, object property, or
function return value.

Syntax:
    let variableName: type = value;

Type annotations help TypeScript detect errors
during development. They are generally erased
when TypeScript generates JavaScript.
*/


// 1. PRIMITIVE TYPE ANNOTATIONS
// string = text, number = numeric values, boolean = true/false

let username: string = "Shishir";
let age: number = 25;
let isDeveloper: boolean = true;

// Valid assignments
username = "Alex";
age = 26;

// Errors: assigned values do not match declared types
// username = 100;
// age = "twenty-five";


// 2. ARRAY TYPE ANNOTATIONS
// number[] means an array containing numbers.

let scores: number[] = [80, 90, 95];
scores.push(100); // Valid

// Error: strings are not allowed in number[]
// scores.push("excellent");


// 3. OBJECT TYPE ANNOTATIONS
// Define the expected properties and their types.

let user: { name: string; age: number } = {
    name: "Shishir",
    age: 25
};

user.age = 26; // Valid

// Error: age must be a number
// user.age = "twenty-six";


// 4. FUNCTION PARAMETER AND RETURN TYPES
// Parameters are annotated inside parentheses.
// Return type is written after the closing parenthesis.

function add(a: number, b: number): number {
    return a + b;
}

const result: number = add(10, 20); // 30

// Error: second argument must be a number
// add(10, "20");


// 5. UNION TYPES
// The | symbol allows a value to have multiple possible types.

let userId: string | number = 101;

userId = "USER-101"; // Valid

// Error: boolean is not an allowed type
// userId = true;


// 6. OPTIONAL PROPERTIES
// ? means a property may be omitted.

let profile: { name: string; nickname?: string } = {
    name: "Shishir"
};

// Both objects below satisfy the declared type.
profile = { name: "Alex", nickname: "Al" };


// 7. TYPE ANNOTATION VS TYPE INFERENCE
// Annotation: developer explicitly declares the type.
// Inference: TypeScript determines the type automatically.

let city: string = "Kolkata"; // Explicit annotation
let country = "India";        // Inferred as string

city = "Delhi";
country = "Japan";

// Error: TypeScript inferred country as string
// country = 123;


// 8. ANY VS UNKNOWN
// any disables most type checking for a value.
// unknown requires type checking before type-specific operations.

let value: any = "Hello";
console.log(value.toUpperCase()); // Allowed, but less safe

let input: unknown = "TypeScript";

// Narrow the type before using string methods.
if (typeof input === "string") {
    console.log(input.toUpperCase());
}


// 9. FUNCTION RETURN TYPE
// The returned value must match the declared return type.

function greet(name: string): string {
    return `Hello, ${name}!`;
}

console.log(greet("Shishir"));

// Error: function promises a number but returns a string
// function getAge(): number {
//     return "25";
// }


/*
====================================================
                  KEY TAKEAWAYS
====================================================

1. Type annotations specify expected types explicitly.
2. They catch many type-related errors before execution.
3. Type inference means annotations are not always necessary.
4. Union types allow multiple permitted types.
5. Optional properties use ?.
6. any weakens type safety; prefer unknown for uncertain data.
7. TypeScript types are not automatic runtime validation.

Compile:
    npx tsc type-annotations.ts

Check types without generating JavaScript:
    npx tsc type-annotations.ts --noEmit

MENTAL MODEL:
A type annotation is a contract that tells TypeScript
what kind of value your code expects.
*/