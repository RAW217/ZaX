import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { Fredoka, Cairo } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZabonEx | AI-Powered F&B Distribution Optimization",
  description: "Empowering Food and Beverage businesses to sell more and waste less through AI-driven predictive analytics. Optimize your distribution, reduce waste, and boost revenue.",
  keywords: ["AI", "Food and Beverage", "Distribution", "Waste Reduction", "Predictive Analytics", "F&B", "Sustainability"],
  authors: [{ name: "ZabonEx" }],
  openGraph: {
    title: "ZabonEx | Sell More, Waste Less",
    description: "AI-powered platform for F&B distribution optimization",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${cairo.variable} font-sans`} suppressHydrationWarning>
      <body className="antialiased text-wl-textColor bg-white overflow-x-hidden w-full">
        <LanguageProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
