const input = document.querySelector("#email");

// Narrowing is safer than blindly asserting.
if (input instanceof HTMLInputElement) {
  console.log(input.value);
}

// Assertion: the programmer promises the type is correct.
const element = document.querySelector("#email") as HTMLInputElement;

// Non-null assertion: the programmer promises this is not null.
// Use only when that guarantee is actually established.
const requiredElement = document.getElementById("app")!;

// Neither assertion validates the runtime value.
// The non-null assertion does not insert a runtime check.
console.log(element, requiredElement);