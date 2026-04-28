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
  metadataBase: new URL('https://accredian-enterprise-clone-jade.vercel.app'),
  title: "Accredian Enterprise | Global Leader in Corporate Training & Upskilling",
  description: "Accelerate your team's growth with Accredian's AI-first learning solutions. Specialized programs in Data Science, AI, Product Management, and Leadership.",
  keywords: [
    "Corporate Training", 
    "Employee Upskilling", 
    "AI for Business", 
    "Data Science for Enterprise", 
    "Leadership Development", 
    "Digital Transformation",
    "Accredian Enterprise"
  ],
  authors: [{ name: "Accredian" }],
  openGraph: {
    title: "Accredian Enterprise | Upskill Your Workforce with AI",
    description: "Transform your organization with world-class learning solutions designed for the digital age.",
    url: "https://accredian-enterprise-clone-jade.vercel.app",
    siteName: "Accredian Enterprise",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accredian Enterprise Learning Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accredian Enterprise | Future-Proof Your Team",
    description: "Join 500+ enterprises scaling their tech talent with Accredian.",
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
