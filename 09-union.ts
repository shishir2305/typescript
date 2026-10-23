// 1. UNION TYPE: Different types of data
let id: string | number;

id = "Shishir"; // Valid: string
id = 101;       // Valid: number
// id = true;   // Error: boolean is not allowed


// 2. LITERAL TYPE: Specific allowed values
let status: "pending" | "success" | "failed";

status = "pending"; // Valid
status = "success"; // Valid
// status = "loading"; // Error: not an allowed value