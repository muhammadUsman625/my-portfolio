import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Usman - Full Stack Developer",
  description: "Full Stack Developer specializing in MEAN and MERN stack development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen px-4 py-8 md:px-8 lg:px-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
