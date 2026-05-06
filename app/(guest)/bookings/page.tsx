import { bookings } from "@/lib/data";

export default function BookingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Мои брони</h1>

      <div className="grid gap-4">
        {bookings.map((b) => (
          <div key={b.id} className="card flex justify-between items-center">
            <div>
              <p className="font-semibold">{b.hotelName}</p>
              <p className="text-gray-500">
                {b.date} — {b.time}
              </p>
            </div>

            <button className="button bg-red-600 hover:bg-red-700">
              Отменить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}