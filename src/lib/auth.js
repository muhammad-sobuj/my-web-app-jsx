import { cookies } from "next/headers";

// Mock user for demonstration
const MOCK_USER = {
  email: "demo@example.com",
  password: "password123",
  user: {
    id: "1",
    email: "demo@example.com",
    name: "Demo User",
  },
};

export async function login(email, password) {
  // Mock authentication
  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set("auth-token", JSON.stringify(MOCK_USER.user), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return MOCK_USER.user;
  }

  return null;
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("auth-token");
}

export async function getCurrentUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token");

    if (!token) {
      return null;
    }

    const user = JSON.parse(token.value);
    return user;
  } catch {
    return null;
  }
}

export async function isAuthenticated() {
  const user = await getCurrentUser();
  return !!user;
}
