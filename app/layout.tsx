import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Navbar from "./ui/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-yellow-100 antialiased`}
      >
        <Navbar />
        <div className={`${inter.className} mt-20 flex flex-col pt-6`}>
          {children}
        </div>
      </body>
    </html>
  );
}
