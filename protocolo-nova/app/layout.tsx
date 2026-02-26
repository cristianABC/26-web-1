import { Navbar } from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#09090b] text-slate-50 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}