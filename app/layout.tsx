import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "RD Trade Network Pvt. Ltd. | Single Window Logistics Solutions",
    template: "%s | RD Trade Network",
  },
  description:
    "RD Trade Network Pvt. Ltd. - Leading logistics company in India offering courier, air cargo, rail cargo, surface transport, and supply chain solutions. 16+ years of experience, 21000+ pin codes served.",
  keywords: [
    "logistics",
    "courier",
    "cargo",
    "air cargo",
    "rail cargo",
    "surface transport",
    "India logistics",
    "RD Trade Network",
    "supply chain",
  ],
  authors: [{ name: "RD Trade Network" }],
  creator: "RD Trade Network Pvt. Ltd.",
  metadataBase: new URL("https://rdtradenetwork.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rdtradenetwork.in",
    siteName: "RD Trade Network Pvt. Ltd.",
    title: "RD Trade Network | Single Window Logistics Solutions",
    description:
      "Leading logistics company in India with 16+ years experience. Air cargo, rail cargo, surface transport & courier services across 21000+ pin codes.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RD Trade Network - Logistics Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RD Trade Network | Logistics Solutions",
    description:
      "Single Window Logistics Solutions - Air Cargo, Rail Cargo, Surface Transport & Courier Services",
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#1e3a8a",
                color: "#fff",
                borderRadius: "12px",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
