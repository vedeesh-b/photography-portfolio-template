import Navbar from "../navbar";
import Footer from "../footer";

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
}
