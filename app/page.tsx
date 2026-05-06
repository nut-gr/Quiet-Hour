import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#bba6ab] p-6">

      {/* 🔥 ЛОГОТИП */}
      <img
        src="/images/logo.jpg"
        alt="logo"
        className="w-80 mb-6"
      />

      {/* 🔥 НОВЫЙ ТЕКСТ */}
      <div className="text-center max-w-xl mb-10">
        <h1 className="text-2xl font-semibold text-white mb-2">
          Бронирование отелей на 2–4 часа
        </h1>
        <p className="text-white opacity-90">
          в светлое или ночное время  
          Чистота, отдых и работа — без переплаты за полные сутки
        </p>
      </div>

      {/* 🔥 КНОПКИ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">

        <Link href="/search">
          <div className="bg-[#6d5c6b] text-white p-4 rounded-2xl text-center cursor-pointer">
            Поиск отелей
          </div>
        </Link>

        <Link href="/bookings">
          <div className="bg-[#6d5c6b] text-white p-4 rounded-2xl text-center">
            Мои брони
          </div>
        </Link>

        <Link href="/login">
          <div className="bg-[#6d5c6b] text-white p-4 rounded-2xl text-center">
            Логин
          </div>
        </Link>

        <Link href="/hotelier/dashboard">
          <div className="bg-[#6d5c6b] text-white p-4 rounded-2xl text-center">
            Для отельеров
          </div>
        </Link>

        <Link href="/admin/dashboard">
          <div className="bg-[#6d5c6b] text-white p-4 rounded-2xl text-center">
            Для администрации
          </div>
        </Link>

      </div>
    </div>
  );
}