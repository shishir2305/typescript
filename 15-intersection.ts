// INTERSECTION TYPE: Combines multiple types into one type using &.

type User = {
  name: string;
};

type Employee = {
  employeeId: number;
};

// EmployeeUser must have properties from BOTH types.
type EmployeeUser = User & Employee;

const person: EmployeeUser = {
  name: "Shishir", // From User
  employeeId: 101  // From Employee
};

// Error: employeeId is required.
// const person2: EmployeeUser = { name: "Sam" };