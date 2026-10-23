interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

// 1. Partial<T>: Makes all properties optional.
type UpdateUser = Partial<User>;
// { id?: number; name?: string; email?: string; age?: number }

// 2. Required<T>: Makes all properties required.
type CompleteUser = Required<User>;
// age is now required too.

// 3. Pick<T, K>: Selects specific properties.
type UserPreview = Pick<User, "id" | "name">;
// { id: number; name: string }

// 4. Omit<T, K>: Excludes specific properties.
type PublicUser = Omit<User, "email">;
// email is removed.

// 5. Readonly<T>: Makes all properties readonly.
type ReadonlyUser = Readonly<User>;
// user.id = 2; // Error: cannot reassign id.

// 6. Record<K, V>: Creates an object with specific key/value types.
type UserRoles = Record<string, string>;
const roles: UserRoles = {
  admin: "Shishir",
  editor: "Sam"
};