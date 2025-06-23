import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frankie's Bodega - Your Neighborhood Online Convenience Store",
  description:
    "Your friendly golden retriever's online convenience store. Fresh groceries, household essentials, and everything you need delivered with a wagging tail!",
  keywords: [
    "online grocery",
    "convenience store",
    "delivery",
    "fresh food",
    "neighborhood store",
  ],
  authors: [{ name: "Frankie's Bodega" }],
  openGraph: {
    title: "Frankie's Bodega - Your Neighborhood Online Convenience Store",
    description:
      "Your friendly golden retriever's online convenience store. Fresh groceries, household essentials, and everything you need delivered with a wagging tail!",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frankie's Bodega - Your Neighborhood Online Convenience Store",
    description:
      "Your friendly golden retriever's online convenience store. Fresh groceries, household essentials, and everything you need delivered with a wagging tail!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
