export const hotels = [
  {
    id: 1,
    name: "Hotel One",
    city: "Stockholm",
    price: 120,
    image: "/images/hotel1.jpg",
    slots: [
      { id: 1, time: "10:00", date: "2026-05-10" },
      { id: 2, time: "14:00", date: "2026-05-10" },
    ],
  },
  {
    id: 2,
    name: "Hotel Two",
    city: "Stockholm",
    price: 90,
    image: "/images/hotel2.jpg",
    slots: [
      { id: 3, time: "12:00", date: "2026-05-11" },
    ],
  },
];

export const bookings = [
  {
    id: 1,
    hotelName: "Hotel One",
    date: "2026-05-10",
    time: "10:00",
  },
];