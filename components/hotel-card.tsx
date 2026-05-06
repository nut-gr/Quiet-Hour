import Link from "next/link";

export default function HotelCard({ hotel }: any) {
  return (
    <div className="card">
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />

      <h2 className="text-lg font-semibold">{hotel.name}</h2>
      <p className="text-gray-500">{hotel.city}</p>

      <div className="flex justify-between items-center mt-4">
        <span className="font-bold">${hotel.price}</span>

        <Link href={`/hotel/${hotel.id}`} className="button">
          Подробнее
        </Link>
      </div>
    </div>
  );
}