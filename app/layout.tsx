import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fedimint Observer UI",
  description: "A web application that allows users to view collected data about federations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
