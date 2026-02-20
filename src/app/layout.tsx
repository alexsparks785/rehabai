import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "RehabAI - Your Personal Rehab Coach",
  description: "AI-powered personalized rehabilitation and fitness programs for lower back pain recovery",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "RehabAI"
  },
  applicationName: "RehabAI",
  keywords: ["rehab", "physical therapy", "lower back pain", "exercises", "recovery"],
  authors: [{ name: "RehabAI" }],
  formatDetection: {
    telephone: false
  }
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover", // Important for notched phones
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* iOS PWA meta tags */}
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="RehabAI" />
        
        {/* Prevent text size adjustment on orientation change */}
        <meta name="format-detection" content="telephone=no" />
        
        {/* Splash screens for iOS */}
        <link 
          rel="apple-touch-startup-image" 
          href="/splash/splash-1170x2532.png"
          media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-black`}>
        {children}
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
