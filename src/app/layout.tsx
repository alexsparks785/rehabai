import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: {
    default: "Foundational Rehab - Evidence-Based Recovery Programs",
    template: "%s | Foundational Rehab"
  },
  description: "AI-powered personalized rehabilitation programs for back pain, shoulder recovery, and mobility. Evidence-based exercises designed by physical therapy principles.",
  manifest: "/manifest.json",
  metadataBase: new URL('https://app.foundationalrehab.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://app.foundationalrehab.com',
    siteName: 'Foundational Rehab',
    title: 'Foundational Rehab - Evidence-Based Recovery Programs',
    description: 'AI-powered personalized rehabilitation programs for back pain, shoulder recovery, and mobility.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foundational Rehab',
    description: 'AI-powered personalized rehabilitation programs for back pain, shoulder recovery, and mobility.',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Foundational Rehab"
  },
  applicationName: "Foundational Rehab",
  keywords: ["physical therapy", "rehab exercises", "back pain relief", "sciatica treatment", "shoulder recovery", "rotator cuff exercises", "mobility exercises", "posture correction", "pain relief", "evidence-based rehab"],
  authors: [{ name: "Foundational Rehab" }],
  formatDetection: {
    telephone: false
  },
  robots: {
    index: true,
    follow: true,
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
