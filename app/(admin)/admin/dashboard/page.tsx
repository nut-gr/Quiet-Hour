export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Админ-панель</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card">
          <p className="text-gray-500">Отели</p>
          <p className="text-2xl font-bold">120</p>
        </div>

        <div className="card">
          <p className="text-gray-500">Брони</p>
          <p className="text-2xl font-bold">540</p>
        </div>

        <div className="card">
          <p className="text-gray-500">Споры</p>
          <p className="text-2xl font-bold">4</p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl mb-4">Модерация отелей</h2>

        <div className="flex justify-between border p-2 rounded">
          <span>Hotel Test</span>
          <button className="button">Одобрить</button>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl mb-4">Споры</h2>

        <div className="flex justify-between border p-2 rounded">
          <span>Booking #123</span>
          <button className="button bg-red-600 hover:bg-red-700">
            Решить
          </button>
        </div>
      </div>
    </div>
  );
}