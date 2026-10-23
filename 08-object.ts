type User = {
  id: number;
  name: string;
  email?: string;          // Optional property
  readonly createdAt: Date; // Cannot be reassigned through this type
};

const user: User = {
  id: 1,
  name: "Shishir",
  createdAt: new Date()
};

// Valid:
user.name = "Alex";

// Error:
// user.createdAt = new Date();

// Optional properties may be absent.
console.log(user.email);

// Important:
// readonly is a compile-time restriction, not runtime
// immutability. The object itself is not automatically frozen.

console.log(user);