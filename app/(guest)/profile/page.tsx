import { bookings } from "@/lib/data";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Профиль</h1>

      <div className="card space-y-2">
        <p><b>Email:</b> user@mail.com</p>
        <p><b>Телефон:</b> +46 123 456 789</p>
      </div>

      <div>
        <h2 className="text-xl mb-4">Мои брони</h2>

        <div className="space-y-2">
          {bookings.map((b) => (
            <div key={b.id} className="card">
              {b.hotelName} — {b.date} {b.time}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl mb-4">Избранное</h2>

        <div className="card text-gray-500">
          Пока нет избранных отелей
        </div>
      </div>
    </div>
  );
}