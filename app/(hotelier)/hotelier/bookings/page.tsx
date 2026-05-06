export default function HotelierBookings() {
  const bookings = [
    { id: 1, hotel: "Hotel One", status: "pending" },
  ];

  return (
    <div className="p-10">
      <h1 className="text-xl mb-4">Бронирования</h1>

      {bookings.map((b) => (
        <div key={b.id} className="border p-4 mb-2">
          <p>{b.hotel}</p>
          <button className="bg-blue-500 text-white px-3 py-1 mt-2">
            Подтвердить
          </button>
        </div>
      ))}
    </div>
  );
}