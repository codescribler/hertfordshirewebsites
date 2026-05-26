import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import { Analytics } from '@vercel/analytics/react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Hertfordshire Websites',
    default: 'Hertfordshire Websites | Professional Web Design & SEO Services',
  },
  description: 'Professional web design agency providing high-quality websites for businesses of all sizes in Hertfordshire. SEO-optimized, mobile-friendly websites that generate leads.',
  keywords: 'web design, website design, Hertfordshire, SEO, business websites, professional websites, web development, lead generation',
  authors: [{ name: 'Hertfordshire Websites' }],
  creator: 'Hertfordshire Websites',
  publisher: 'Hertfordshire Websites',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hertfordshirewebsites.co.uk'),
  openGraph: {
    title: 'Hertfordshire Websites | Professional Web Design & SEO Services',
    description: 'Professional web design agency providing high-quality websites for businesses of all sizes in Hertfordshire. SEO-optimized, mobile-friendly websites that generate leads.',
    url: 'https://hertfordshirewebsites.co.uk',
    siteName: 'Hertfordshire Websites',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hertfordshire Websites | Professional Web Design & SEO Services',
    description: 'Professional web design agency providing high-quality websites for businesses of all sizes in Hertfordshire. SEO-optimized, mobile-friendly websites that generate leads.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <GoogleAnalytics />
        <LocalBusinessSchema />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
