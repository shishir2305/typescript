// TYPE GUARD: A check that verifies a value's type and helps
// TypeScript determine which type it has.


// TYPE NARROWING: The process of reducing a variable's broad type
// to a more specific type based on checks performed in the code.

function printValue(value: string | number): void {
  if (typeof value === "string") { // Type guard
    // Type narrowing: value is now treated as a string.
    console.log(value.toUpperCase());
  } else {
    // Type narrowing: value is now treated as a number.
    console.log(value.toFixed(2));
  }
}