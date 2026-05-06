"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          QuietHour
        </Link>

        <div className="flex gap-6 text-sm">
          <Link href="/search" className="hover:text-blue-600">
            Поиск
          </Link>

          <Link href="/bookings" className="hover:text-blue-600">
            Мои брони
          </Link>

          <Link href="/profile" className="hover:text-blue-600">
            Профиль
          </Link>

          <Link href="/login" className="hover:text-blue-600">
            Войти
          </Link>
        </div>
      </div>
    </nav>
  );
}