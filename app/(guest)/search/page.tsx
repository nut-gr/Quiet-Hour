import { hotels } from "@/lib/data";
import HotelCard from "@/components/hotel-card";

export default function SearchPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Поиск отелей</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}