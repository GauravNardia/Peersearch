import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: "PeerSearch | Discover Real Builders on Peerlist",
  description: "Find developers, designers, founders, and creators on Peerlist using advanced filters like stack, location, activity, and intent. Built for recruiters, founders, and collaborators.",
  icons: "/icons/logo.svg",
  keywords: [
    "PeerSearch",
    "Peerlist Search",
    "Peerlist Radar",
    "Find Developers",
    "Tech Talent Search",
    "Builder Discovery",
    "Startup Hiring",
    "Developer Directory",
    "Peerlist Intent Filter",
    "Open to Work Peerlist"
  ],
  authors: [{ name: "PeerSearch Team", url: "https://peersear.ch" }],
  metadataBase: new URL("https://peersear.ch"),
  openGraph: {
    title: "PeerSearch – Discover Builders on Peerlist",
    description: "Filter and find active developers, designers, and builders based on real-time Peerlist data.",
    url: "https://peersear.ch",
    siteName: "PeerSearch",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PeerSearch Open Graph Image"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PeerSearch – Discover Builders on Peerlist",
    description:
      "Real-time search engine for Peerlist. Find people by stack, location, and builder activity.",
    images: ["/og-image.png"]
  },
  themeColor: "#10B981" // Tailwind emerald-500 vibe
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${instrumentSerif.variable} antialiased bg-neutral-100`}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
