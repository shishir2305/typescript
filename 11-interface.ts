// INTERFACE: Defines the expected structure of an object.
interface User {
  name: string;
  age: number;
  email?: string; // Optional property
}

// This object follows the User interface.
const user: User = {
  name: "Shishir",
  age: 25
};

// Valid because email is optional.
console.log(user.name);

// Error: age must be a number.
// const invalidUser: User = { name: "Sam", age: "25" };