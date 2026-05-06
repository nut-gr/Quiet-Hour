export default function HotelierDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Кабинет отельера</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card">
          <p className="text-gray-500">Доход</p>
          <p className="text-2xl font-bold">$1240</p>
        </div>

        <div className="card">
          <p className="text-gray-500">Брони</p>
          <p className="text-2xl font-bold">32</p>
        </div>

        <div className="card">
          <p className="text-gray-500">Загрузка</p>
          <p className="text-2xl font-bold">78%</p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl mb-4">Слоты</h2>

        <div className="space-y-2">
          <div className="flex justify-between border p-2 rounded">
            <span>12 мая — 10:00</span>
            <button className="button">Удалить</button>
          </div>
        </div>

        <button className="button mt-4">Добавить слот</button>
      </div>

      <div className="card">
        <h2 className="text-xl mb-4">Бронирования</h2>

        <div className="space-y-2">
          <div className="flex justify-between border p-2 rounded">
            <span>Room 1 — 12 мая 10:00</span>
            <button className="button">Подтвердить</button>
          </div>
        </div>
      </div>
    </div>
  );
}