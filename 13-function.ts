// Parameters and return type.
function add(a: number, b: number): number {
  return a + b;
}

// Optional parameter.
function greet(name: string, title?: string): string {
  return title ? `Hello, ${title} ${name}` : `Hello, ${name}`;
}

// Default parameter.
function multiply(value: number, factor: number = 2): number {
  return value * factor;
}

// Rest parameter.
function sum(...values: number[]): number {
  return values.reduce((total, value) => total + value, 0);
}

// Callback function type.
type Formatter = (value: number) => string;

function formatPrice(price: number, formatter: Formatter): string {
  return formatter(price);
}

console.log(add(2, 3));
console.log(greet("Shishir"));
console.log(multiply(5));
console.log(sum(1, 2, 3));
console.log(formatPrice(100, value => `₹${value}`));