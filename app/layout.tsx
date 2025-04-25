import "@/app/util/ui/global.css";
import { inter } from "@/app/util/ui/fonts";
import Navbar from "@/app/util/ui/navbar/Navbar";

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
        <div className="h-screen w-screen flex flex-col">
          {/* Fixed Header */}
          <Navbar />

          {/* Page Body */}

          <div className="overflow-y-auto h-full px-10 md:px-20 md:px-40">
            {/* Add your scrollable content here */}
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
