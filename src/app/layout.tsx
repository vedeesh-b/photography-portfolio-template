import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";
import Sidebar from "./ui/sidebar";
import Footer from "./ui/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: "500",
});

export const metadata: Metadata = {
  title: "Vedeesh Bali's Photography",
  description:
    "A photography portfolio featuring Vedeesh Bali's work across nature, sport, and travel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-background text-foreground flex flex-col">
        <Navbar />
        <div className="flex flex-row">
          <Sidebar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
