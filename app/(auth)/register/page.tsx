"use client";

import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#bba6ab]">
      <div className="bg-white p-8 rounded-2xl shadow-md w-80 text-center">
        <h1 className="text-2xl font-bold mb-6">Регистрация</h1>

        <input
          type="text"
          placeholder="Имя"
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Email или телефон"
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Пароль"
          className="w-full mb-4 p-2 border rounded"
        />

        <button
          onClick={() => router.push("/profile")}
          className="w-full bg-[#6d5c6b] text-white py-2 rounded"
        >
          Создать аккаунт
        </button>
      </div>
    </div>
  );
}