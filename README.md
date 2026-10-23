# TypeScript Fundamentals

A practical, example-driven repository for learning the core concepts of
TypeScript. The lessons progress from the TypeScript compiler and basic
annotations to generics, type composition, assertions, and utility types.

The repository also includes a **MAANG TypeScript Interview Q&A** PDF for
revision and interview preparation.

## What You Will Learn

- Why TypeScript is useful and how it relates to JavaScript
- How the TypeScript compiler (`tsc`) checks and emits JavaScript
- Explicit type annotations and type inference
- `any`, `unknown`, `never`, and `void`
- Arrays, readonly arrays, tuples, and readonly tuples
- Object types, optional properties, and `readonly`
- Union types and literal types
- Type guards and type narrowing
- Interfaces and type aliases
- Function parameters, return types, optional/default/rest parameters, and callbacks
- Generic functions and generic constraints
- Intersection types
- Enums and literal-union alternatives
- Type assertions and non-null assertions
- Built-in utility types such as `Partial`, `Required`, `Pick`, `Omit`, `Readonly`, and `Record`

## Repository Contents

The files are numbered in a suggested learning order:

| File | Topic |
| --- | --- |
| [`01-intro.ts`](./01-intro.ts) | TypeScript introduction, static checking, and the motivation for types |
| [`02-typescript-compiler-execution.ts`](./02-typescript-compiler-execution.ts) | Compiler pipeline, emitted JavaScript, type checking, and runtime execution |
| [`03-type-annotations.ts`](./03-type-annotations.ts) | Primitive, array, object, function, union, and optional-property annotations |
| [`04-type-inference.ts`](./04-type-inference.ts) | Variable, return-type, array, and contextual inference |
| [`05-any-unknown-never.ts`](./05-any-unknown-never.ts) | Differences between `any`, `unknown`, and `never` |
| [`06-void-type.ts`](./06-void-type.ts) | `void` for functions whose return value is not intended to be used |
| [`07-arrays-tuples.ts`](./07-arrays-tuples.ts) | Arrays, union arrays, readonly arrays, tuples, and tuple variants |
| [`08-object.ts`](./08-object.ts) | Object shapes, optional properties, and `readonly` properties |
| [`09-union.ts`](./09-union.ts) | Union types and literal types |
| [`10-type-narrowing.ts`](./10-type-narrowing.ts) | Type guards and narrowing values inside branches |
| [`11-interface.ts`](./11-interface.ts) | Object contracts with interfaces |
| [`12-type-alias.ts`](./12-type-alias.ts) | Reusable aliases for primitive, object, and literal types |
| [`13-function.ts`](./13-function.ts) | Function typing, optional/default/rest parameters, and callbacks |
| [`14-generics.ts`](./14-generics.ts) | Generic functions, inference, and generic constraints |
| [`15-intersection.ts`](./15-intersection.ts) | Combining object types with intersection types |
| [`16-enums.ts`](./16-enums.ts) | String enums and comparison with literal unions |
| [`17-type-assertion.ts`](./17-type-assertion.ts) | Type assertions, DOM narrowing, and non-null assertions |
| [`18-utility-types.ts`](./18-utility-types.ts) | Common built-in utility types |
| [`MAANG TypeScript Interview Q&A.pdf`](./MAANG%20TypeScript%20Interview%20Q%26A.pdf) | Interview revision material |

## Prerequisites

- [Node.js](https://nodejs.org/) and npm
- Basic JavaScript knowledge

Check that Node.js and npm are installed:

```bash
node --version
npm --version
```

## Getting Started

Clone the repository and move into the project directory:

```bash
git clone https://github.com/shishir2305/typescript.git
cd typescript
```

Install TypeScript locally as a development dependency:

```bash
npm install --save-dev typescript
```

No `package.json` or `tsconfig.json` is required to read the examples. The
commands below use `npx` so that each file can be compiled directly.

## Compile and Run an Example

Compile a file to JavaScript:

```bash
npx tsc 14-generics.ts
```

Run the emitted JavaScript with Node.js:

```bash
node 14-generics.js
```

The generated `.js` file is an output artifact and is not part of the lesson
source. You can remove it after experimenting:

```bash
rm 14-generics.js
```

Check a file without writing JavaScript:

```bash
npx tsc 14-generics.ts --noEmit
```

Run a browser-oriented example from a browser console or an HTML page. For
example, [`17-type-assertion.ts`](./17-type-assertion.ts) uses
`document.querySelector`, so it requires DOM elements with the expected IDs and
cannot be executed directly in Node.js without a DOM environment.

## Suggested Study Workflow

1. Read the comments and examples in numerical order.
2. Compile each file and inspect the generated JavaScript.
3. Uncomment the marked invalid examples one at a time and run `tsc --noEmit`
   to observe the diagnostics.
4. Change the examples and predict the compiler result before compiling again.
5. Use the interview PDF after completing the examples to review the concepts.

Some files intentionally contain invalid examples in comments to demonstrate
compiler errors. [`01-intro.ts`](./01-intro.ts) includes an active invalid call
as a deliberate illustration of compile-time checking, so it is expected to
produce a diagnostic when compiled without editing the example.

## Important TypeScript Concepts

### Compile time versus runtime

TypeScript types are primarily removed when JavaScript is emitted. Node.js and
browsers execute JavaScript, not TypeScript annotations, interfaces, or type
aliases. TypeScript catches many errors during development, but it does not
automatically validate untrusted API responses, user input, or other runtime
data.

### `any`, `unknown`, and `never`

- Prefer `unknown` for values whose type is not known yet; narrow it before use.
- Use `any` sparingly because it disables much of TypeScript's checking.
- Use `never` for impossible states, functions that do not return, and
  exhaustive union checks.

### Assertions are promises, not validation

An assertion such as `value as HTMLInputElement` tells the compiler to trust the
programmer. It does not insert a runtime check. Prefer a type guard when the
value may not actually have the asserted type.

## License

No license file is currently included. Add a license before distributing or
reusing this repository publicly.
