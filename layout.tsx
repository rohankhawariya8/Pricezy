import "./globals.css";
import Link from "next/link";
export const metadata = { title: "Pricezy", description: "E‑commerce with coins & EMI" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-white border-b sticky top-0 z-20">
          <div className="container flex gap-4 py-3 items-center">
            <Link href="/" className="font-bold text-xl">Pricezy</Link>
            <div className="ml-auto flex gap-3 text-sm">
              <Link href="/spinwheel">Spinwheel</Link>
              <Link href="/emi">EMI</Link>
              <Link href="/orders">My Orders</Link>
              <Link href="/wishlist">Wishlist</Link>
              <Link href="/profile">Profile</Link>
            </div>
          </div>
        </nav>
        <main className="container py-6">{children}</main>
        <footer className="container py-10 text-center text-xs text-gray-500">© {new Date().getFullYear()} Pricezy</footer>
      </body>
    </html>
  );
}
