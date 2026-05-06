import { hotels } from "@/lib/data";
import Link from "next/link";

export default function HotelPage({ params }: any) {
  const hotel = hotels.find((h) => h.id === Number(params.id));

  if (!hotel) return <div>Hotel not found</div>;

  return (
    <div className="card">
      <img
        src={hotel.image}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />

      <h1 className="text-2xl font-bold">{hotel.name}</h1>
      <p className="text-gray-500 mb-4">{hotel.city}</p>

      <p className="mb-6">Цена: ${hotel.price}</p>

      <Link href={`/booking/${hotel.id}`} className="button">
        Забронировать
      </Link>
    </div>
  );
}