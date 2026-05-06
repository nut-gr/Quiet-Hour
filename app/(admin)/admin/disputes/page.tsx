export default function DisputesPage() {
  const disputes = ["Booking #1", "Booking #2"];

  return (
    <div className="p-10">
      <h1 className="text-xl mb-4">Споры</h1>

      {disputes.map((d, i) => (
        <div key={i} className="border p-3 mb-2">
          {d}
        </div>
      ))}
    </div>
  );
}