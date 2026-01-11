// import {
//   type User,
//   findUserByEmail,
//   addUser,
//   generateUserId,
// } from "@/data/users";

// const SESSION_STORAGE_KEY = "Blogging sites_user_session";

// export interface Session {
//   user: User;
//   token: string;
// }

// // Generate a simple session token
// function generateToken(): string {
//   return (
//     Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2)
//   );
// }

// // Store session in localStorage
// export function saveSession(session: Session): void {
//   if (typeof window !== "undefined") {
//     localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
//   }
// }

// // Retrieve session from localStorage
// export function getSession(): Session | null {
//   if (typeof window === "undefined") return null;
//   const sessionData = localStorage.getItem(SESSION_STORAGE_KEY);
//   return sessionData ? JSON.parse(sessionData) : null;
// }

// // Clear session
// export function clearSession(): void {
//   if (typeof window !== "undefined") {
//     localStorage.removeItem(SESSION_STORAGE_KEY);
//   }
// }

// // Validate credentials and create session
// export function validateAndCreateSession(
//   email: string,
//   password: string,
// ): Session | null {
//   const user = findUserByEmail(email);
//   if (user && user.password === password) {
//     const session: Session = {
//       user,
//       token: generateToken(),
//     };
//     saveSession(session);
//     return session;
//   }
//   return null;
// }

// // Register a new user
// export function registerUser(email: string, password: string): Session | null {
//   if (findUserByEmail(email)) {
//     return null; // User already exists
//   }

//   const newUser: User = {
//     id: generateUserId(),
//     email,
//     password,
//     createdAt: new Date().toISOString().split("T")[0],
//   };

//   addUser(newUser);
//   const session: Session = {
//     user: newUser,
//     token: generateToken(),
//   };
//   saveSession(session);
//   return session;
// }

// // Check if user is authenticated
// export function isAuthenticated(): boolean {
//   return getSession() !== null;
// }
