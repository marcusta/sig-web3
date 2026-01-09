import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sweden Indoor Golf - Indoor Golf Played Better",
  description: "Linköpings bästa och mest prisvärda inomhushall för golf. Spela golf året runt i våra moderna simulatorer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={cn(inter.className, "bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col")}>
        <Header />
        <main className="flex-1 flex flex-col pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
