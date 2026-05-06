import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata = {
  title: "QuietHour",
  description: "Booking quiet spaces",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Navbar />

        <main className="max-w-5xl mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}