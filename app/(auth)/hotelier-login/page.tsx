"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";

export default function HotelierLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const role = login(email, password);

    if (role === "hotelier") {
      router.push("/hotelier/dashboard");
    } else {
      alert("Только для отельеров");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow">
      <h1 className="text-xl font-bold mb-4">Вход для отельера</h1>

      <input
        placeholder="Email"
        className="w-full border p-2 mb-2 rounded"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Пароль"
        className="w-full border p-2 mb-4 rounded"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="w-full bg-indigo-700 text-white py-2 rounded-lg"
      >
        Войти
      </button>
    </div>
  );
}