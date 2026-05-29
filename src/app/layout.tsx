import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DYSA | Dynamic Innovation & Systems Automation",
  description: "Transforming engineering, manufacturing, and digital systems through advanced automation, software integration, and intelligent solutions.",
  openGraph: {
    title: "DYSA | Dynamic Innovation & Systems Automation",
    description: "Transforming engineering, manufacturing, and digital systems.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} antialiased bg-primary text-foreground`}
    >
      <body>
        <SmoothScroll>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 mt-20">
              {children}
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
