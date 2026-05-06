"use client";

import { useState } from "react";

export default function SlotsPage() {
  const [slots, setSlots] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addSlot = () => {
    if (!input) return;
    setSlots([...slots, input]);
    setInput("");
  };

  return (
    <div className="p-10">
      <h1 className="text-xl mb-4">Слоты</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="2026-05-01 14:00"
        className="border p-2 mr-2"
      />

      <button onClick={addSlot} className="bg-green-500 text-white px-4 py-2">
        Добавить
      </button>

      <ul className="mt-4">
        {slots.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}