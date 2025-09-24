import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";

const inter = Inter({
  subsets: ["latin"],
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
    <html lang="en">
      <body className={`${inter} antialiased bg-background text-foreground`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
