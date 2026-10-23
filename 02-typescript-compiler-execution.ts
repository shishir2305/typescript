/*
TYPESCRIPT COMPILER AND CODE EXECUTION
======================================

1. WHAT IS THE TYPESCRIPT COMPILER?
-----------------------------------
The TypeScript compiler is called `tsc`.
It checks TypeScript code for type errors and can emit JavaScript.

Typical flow:

    index.ts
       |
       v
    TypeScript compiler (tsc)
       |
       +--> Parse source code and build an AST
       |
       +--> Check types and report diagnostics
       |
       +--> Remove TypeScript-only syntax and transform code
       |
       v
    index.js
       |
       v
    JavaScript runtime (browser or Node.js)
       |
       v
    Program output


2. STEP-BY-STEP COMPILATION
---------------------------
A. Source code:
   You write TypeScript in a `.ts` file. It can include type annotations,
   interfaces, type aliases, and normal JavaScript logic.

B. Parsing:
   The compiler parses the source text and builds an Abstract Syntax Tree
   (AST), a structured representation of the code.

C. Type checking:
   The compiler checks whether operations match the declared types.
   For example, passing a number to a parameter declared as `string`
   produces a type error.

D. JavaScript emission:
   TypeScript-only syntax such as type annotations and interfaces is erased.
   Depending on compiler settings, some JavaScript syntax may also be
   transformed to an older target.

E. Runtime execution:
   Node.js or a browser executes the emitted JavaScript. The runtime does
   not automatically enforce TypeScript's erased type annotations.


3. EXAMPLE: TYPESCRIPT SOURCE
-----------------------------
*/

function greet(name: string): string {
    return `Hello, ${name}!`;
}

const message: string = greet("Shishir");
console.log(message);

/*
TypeScript understands:
- `name` should be a string.
- `greet` is declared to return a string.
- `message` is declared to be a string.

The call `greet("Shishir")` is valid.
The call `greet(123)` would produce a compile-time type error.
*/

/*
4. APPROXIMATE EMITTED JAVASCRIPT
---------------------------------
The compiler removes the type annotations. The resulting JavaScript
is conceptually equivalent to:

    function greet(name) {
        return `Hello, ${name}!`;
    }

    const message = greet("Shishir");
    console.log(message);

Output:
    Hello, Shishir!

Important: TypeScript does not normally add runtime checks for `string`.
If untrusted data comes from an API, file, or user input, validate it
at runtime when necessary.
*/

/*
5. DOES A TYPE ERROR ALWAYS STOP JAVASCRIPT EMISSION?
-----------------------------------------------------
Not by default. `tsc` can report type errors and still emit JavaScript.
Set `noEmitOnError: true` in tsconfig.json to prevent output when errors
are reported.

For type-checking without generating JavaScript, use:
    npx tsc --noEmit
*/

/*
6. COMPILATION IS NOT THE SAME AS EXECUTION
-------------------------------------------
Compilation/type checking:
- Checks types and language rules.
- Can report diagnostics.
- Can emit JavaScript.

Runtime execution:
- Runs the emitted JavaScript.
- Can still encounter runtime errors, such as accessing a property on null.
- Does not know about erased TypeScript interfaces or type annotations.

TypeScript reduces many type-related bugs; it does not guarantee that
the program is free of all bugs.
*/

/*
7. TRY IT LOCALLY
-----------------
Install TypeScript in your project:
    npm install --save-dev typescript

Compile this file:
    npx tsc intro.ts

Run the generated JavaScript:
    node intro.js

Check types without emitting JavaScript:
    npx tsc intro.ts --noEmit

A typical project uses `tsconfig.json` to configure options such as:
- target: JavaScript language version to emit.
- module: module system to emit.
- strict: enable stricter type checks.
- outDir: output directory.
- noEmitOnError: do not emit output if errors are reported.

FINAL MENTAL MODEL
------------------
TypeScript compiler = code structure analysis + type checking + JavaScript
transformation.
JavaScript runtime = executes the resulting JavaScript.

Types help developers before execution; they are not automatic runtime
validation.
*/
