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
  title: "The Prime Developers | Real Estate Solutions Ontario",
  description:
    "Renovation, emergency service, handyman work, insurance claim support, and contractor coordination across Ontario.",
  metadataBase: new URL("https://theprimedevelopers.ca"),
  openGraph: {
    title: "The Prime Developers | Real Estate Solutions Ontario",
    description:
      "Renovation, emergency service, handyman work, insurance claim support, and contractor coordination across Ontario.",
    url: "https://theprimedevelopers.ca",
    siteName: "The Prime Developers",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "The Prime Developers",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Prime Developers | Real Estate Solutions Ontario",
    description:
      "Renovation, emergency service, handyman work, insurance claim support, and contractor coordination across Ontario.",
    images: ["/og.png"],
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
