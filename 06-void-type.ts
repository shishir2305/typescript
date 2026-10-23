// A related type is void, commonly used for functions whose return value is not intended to be used.

// void describes an intentionally unused return value.
function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello TypeScript");
