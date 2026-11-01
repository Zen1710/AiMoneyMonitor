import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "AiMoneyMonitor",
  description: "Catatan keuangan pribadi lewat chat AI",
};

const halaman = [
  { href: "/", label: "Chat" },
  { href: "/transaksi", label: "Transaksi" },
  { href: "/kategori", label: "Kategori" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <header className="border-b border-line">
          <nav className="mx-auto flex w-full max-w-3xl items-center gap-5 px-4 py-3">
            <span className="mr-auto font-bold text-accent">AiMoneyMonitor</span>
            {halaman.map(({ href, label }) => (
              <Link key={href} href={href} className="text-sm text-muted hover:text-text">
                {label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
