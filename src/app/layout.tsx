import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Tehseen Dahya - Developer & Innovator",
    template: "%s | Tehseen Dahya"
  },
  description: "Student at Duke University working on technology solutions to reduce global inequity. Machine Learning, Web3, and climate tech projects.",
  keywords: ["developer", "machine learning", "web3", "toronto", "innovation", "technology", "climate tech", "blockchain"],
  authors: [{ name: "Tehseen Dahya" }],
  creator: "Tehseen Dahya",
  metadataBase: new URL("https://tehseendahya.com"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" }
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tehseendahya.com",
    title: "Tehseen Dahya - Developer & Innovator",
    description: "Student in Toronto working on technology solutions to reduce global inequity. ML, Web3, and climate tech projects.",
    siteName: "Tehseen Dahya",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tehseen Dahya - Developer & Innovator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tehseen Dahya - Developer & Innovator",
    description: "Student in Toronto working on technology solutions to reduce global inequity.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning={true}>
        <SpeedInsights />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
