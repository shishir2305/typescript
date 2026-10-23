// TYPE ALIAS: Gives a reusable name to a type.

// 1. Primitive type
type UserId = string | number;

let id: UserId = 101;
id = "user123"; // Both are valid


// 2. Object type
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Shishir",
  age: 25
};


// 3. Literal type
type Status = "pending" | "success" | "error";

let status: Status = "pending";
// status = "failed"; // Error: not an allowed value