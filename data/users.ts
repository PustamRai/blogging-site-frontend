"use client";

export interface User {
  id: string;
  email: string;
  password: string;
  createdAt: string;
}

// In-memory user storage (simulating a database)
export const users: User[] = [
  {
    id: "1",
    email: "admin@Blogging sites.com",
    password: "Admin@123",
    createdAt: "2025-01-01",
  },
];

export function findUserByEmail(email: string): User | undefined {
  return users.find((user) => user.email === email);
}

export function addUser(user: User): User {
  users.push(user);
  return user;
}

export function generateUserId(): string {
  return Math.random().toString(36).substr(2, 9);
}
