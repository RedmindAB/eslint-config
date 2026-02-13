// Test file for TypeScript config

interface User {
  id: string
  email: string
  name: string
}

export const getUser = (id: string): User | null => {
  if (!id) {
    return null
  }

  return {
    email: "john@example.com",
    id,
    name: "John",
  }
}
