"use client";

import { useState } from "react";

export default function SlotPicker({ slots }: any) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">Select time</h3>

      <div className="flex flex-col gap-2">
        {slots.map((slot: any) => (
          <button
            key={slot.id}
            onClick={() => setSelected(slot.id)}
            className={`border p-3 text-left ${
              selected === slot.id
                ? "bg-black text-white"
                : ""
            }`}
          >
            {slot.time} — ${slot.price}
          </button>
        ))}
      </div>
    </div>
  );
}