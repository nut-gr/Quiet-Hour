export default function AdminHotels() {
  const hotels = ["Hotel One", "Hotel Two"];

  return (
    <div className="p-10">
      <h1 className="text-xl mb-4">Модерация отелей</h1>

      {hotels.map((h, i) => (
        <div key={i} className="border p-3 mb-2">
          <p>{h}</p>
          <button className="bg-green-500 text-white px-3 py-1 mr-2">
            Одобрить
          </button>
          <button className="bg-red-500 text-white px-3 py-1">
            Отклонить
          </button>
        </div>
      ))}
    </div>
  );
}