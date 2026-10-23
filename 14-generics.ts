// T represents the type supplied by the caller.
function identity<T>(value: T): T {
  return value;
}

const numberValue = identity<number>(42);
const textValue = identity("TypeScript"); // T inferred as string

// Generic array helper.
function first<T>(items: T[]): T | undefined {
  return items[0];
}

const firstName = first(["Alex", "Sam"]); // string | undefined
const firstScore = first([90, 95, 100]);  // number | undefined

// Generic constraint: T must have a length property.
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

console.log(identity(true));
console.log(firstName, firstScore);
console.log(getLength("TypeScript"));
console.log(getLength([1, 2, 3]));

// Trade-off:
// Generics preserve type information across reusable APIs.
// Avoid making a generic so complex that callers cannot
// understand or infer its behavior.