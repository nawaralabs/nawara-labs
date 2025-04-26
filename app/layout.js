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

export const metadata = {
  title: "Nawara Labs",
  description: "Landing Pages & Automation Systems for Small Businesses",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: "74czvLzfZJtQ5qQpBXTiR8s7rBtpp-JtKjQ-xypYoRs"
  }
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        {/* Background Floating Spirals */}
        <div className="spirals">
          <div className="spiral"></div>
          
        </div>

        {/* Centered Main Logo & Content */}
        <main className="center-content">
          <header className="full-logo">
            <img src="/logo.png" alt="Nawara Labs Logo" className="main-logo" />
          </header>

          {children}
        </main>

      </body>
    </html>
  );
}
