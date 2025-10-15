import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ResponsiveLayout from "./ui/layouts/responsiveLayout";
import DesktopLayout from "./ui/layouts/desktopLayout";
import MobileLayout from "./ui/layouts/mobileLayout";

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
      <body className="antialiased bg-background text-foreground">
        <ResponsiveLayout
          desktop={<DesktopLayout>{children}</DesktopLayout>}
          mobile={<MobileLayout>{children}</MobileLayout>}
        />
      </body>
    </html>
  );
}
