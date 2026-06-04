import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Footify — Sneaker Customization Platform",
  description: "Unleash your creativity. Design your own custom sneakers with Footify.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#08080f] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
