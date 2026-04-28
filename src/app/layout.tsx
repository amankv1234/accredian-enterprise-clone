import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://accredian-enterprise.vercel.app'),
  title: "Accredian Enterprise | Upskill Your Workforce",
  description: "Transform your organization with Accredian's enterprise learning solutions. Re-skilling and up-skilling for the modern digital age.",
  keywords: ["Enterprise Learning", "Upskilling", "Reskilling", "Digital Transformation", "Corporate Training", "AI Learning", "Data Science Training"],
  authors: [{ name: "Accredian" }],
  openGraph: {
    title: "Accredian Enterprise | Upskill Your Workforce",
    description: "Transform your organization with Accredian's enterprise learning solutions.",
    url: "https://accredian-enterprise.vercel.app",
    siteName: "Accredian Enterprise",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accredian Enterprise Learning",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accredian Enterprise | Upskill Your Workforce",
    description: "Transform your organization with Accredian's enterprise learning solutions.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
