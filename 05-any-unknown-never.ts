/*
====================================================
          ANY vs UNKNOWN vs NEVER
====================================================

1. ANY
------
Definition:
`any` disables most TypeScript type checking.

Use case:
Legacy JavaScript migration or situations where the
type is temporarily unknown.

Problem:
It sacrifices type safety and allows unsafe operations.
*/

let anyValue: any = "Hello";

anyValue.toUpperCase(); // Allowed
anyValue = 100; // Allowed
anyValue.toFixed(2); // Allowed by TypeScript

// The last line can fail at runtime because the value
// is now a number? Actually, number has toFixed(), so it works.
// But unsafe operations can still cause runtime errors.

anyValue = null;
// anyValue.toUpperCase(); // Runtime error if uncommented

/*
2. UNKNOWN
----------
Definition:
`unknown` can hold any value, but TypeScript requires
you to narrow its type before performing type-specific
operations.

Use case:
External data such as API responses, JSON, or user input.

Key difference from `any`:
`unknown` preserves type safety.
*/

let unknownValue: unknown = "TypeScript";

// Error: TypeScript cannot guarantee this is a string.
// unknownValue.toUpperCase();

// Narrow the type before using string methods.
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase()); // TYPESCRIPT
}

unknownValue = 100;

if (typeof unknownValue === "number") {
  console.log(unknownValue.toFixed(2)); // 100.00
}

/*
3. NEVER
-------
Definition:
`never` represents a value that cannot occur.

Common use cases:
- Functions that always throw an error.
- Functions that never finish.
- Exhaustive checks for union types.
*/

// This function never returns normally.
function throwError(message: string): never {
  throw new Error(message);
}

// This function never finishes because the loop is infinite.
// Do not call it during normal execution.
function runForever(): never {
  while (true) {
    // Keeps running forever.
  }
}

// Exhaustive checking with a discriminated union.
type Status = "success" | "error";

function handleStatus(status: Status): string {
  switch (status) {
    case "success":
      return "Operation succeeded";

    case "error":
      return "Operation failed";

    default: {
      // If all Status variants are handled,
      // TypeScript knows status is never here.
      const impossible: never = status;
      return impossible;
    }
  }
}

console.log(handleStatus("success"));

/*
If you later add "loading" to Status but forget to handle it,
the assignment to `impossible` produces a type error.
This helps detect missing cases during development.
*/

/*
====================================================
                 QUICK REVISION
====================================================

any:
- Accepts values of any type.
- Allows unsafe operations without meaningful type checks.
- Avoid it when possible.

unknown:
- Accepts values of any type.
- Requires type narrowing before unsafe operations.
- Prefer it over any for values of uncertain type.

never:
- Represents an impossible value.
- Used for functions that never return normally and
  for exhaustive type checking.

MENTAL MODEL:
any     = "Trust me; skip most checks."
unknown = "The value could be anything; check first."
never   = "There is no possible value here."
*/
