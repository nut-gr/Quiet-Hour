export type Role = "guest" | "hotelier" | "admin";

export function login(email: string, password: string): Role | null {
  // Админ
  if (email === "admin@mail.com" && password === "admin") {
    return "admin";
  }

  // Отельер
  if (email === "hotel@mail.com" && password === "hotel") {
    return "hotelier";
  }

  // Гость (можно любой)
  if (email && password) {
    return "guest";
  }

  return null;
}