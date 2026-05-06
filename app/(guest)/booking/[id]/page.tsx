import { hotels } from "@/lib/data";
import Link from "next/link";

export default function BookingPage({ params }: any) {
  const hotel = hotels.find((h) => h.id === Number(params.id));

  if (!hotel) return <div>Not found</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Бронирование: {hotel.name}
      </h1>

      <div className="card">
        <h2 className="text-lg mb-4">Выберите слот</h2>

        <div className="grid gap-2">
          {hotel.slots?.map((slot: any) => (
            <button
              key={slot.id}
              className="border p-3 rounded hover:bg-blue-50"
            >
              {slot.date} — {slot.time}
            </button>
          ))}
        </div>
      </div>

      <div className="card space-y-3">
        <h2 className="text-lg">Детали</h2>

        <p>Цена: ${hotel.price}</p>

        <Link href="/bookings" className="button w-full text-center block">
          Confirm booking
        </Link>
      </div>
    </div>
  );
}