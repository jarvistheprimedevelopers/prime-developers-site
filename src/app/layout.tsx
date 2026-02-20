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
  title: "The Prime Developers | Portfolio Execution Partner (GTA)",
  description:
    "Hamilton-based execution partner for property managers and developers across the GTA: turnovers, renovations, capital improvements, and emergency maintenance.",
  metadataBase: new URL("https://prime-developers-site.vercel.app"),
  openGraph: {
    title: "The Prime Developers | Portfolio Execution Partner (GTA)",
    description:
      "Turnovers, renovations, and capital improvement execution for multi-unit residential and commercial assets across the GTA.",
    url: "https://prime-developers-site.vercel.app",
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
    title: "The Prime Developers | Portfolio Execution Partner (GTA)",
    description:
      "Hamilton-based execution partner for GTA portfolios: turnovers, renovations, capital improvements.",
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
