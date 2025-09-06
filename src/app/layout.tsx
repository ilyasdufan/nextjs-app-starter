import type { Metadata } from "next";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"]
});
const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Jahit Bella Syahira - Layanan Jahit Mewah & Elegan",
  description: "Jahit Bella Syahira menyediakan layanan jahit berkualitas tinggi dengan sentuhan mewah dan elegan. Spesialis dalam pembuatan pakaian custom, alterasi, dan desain eksklusif.",
  keywords: "jahit, tailor, mewah, elegan, custom, pakaian, alterasi, desain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
