import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import { MotionProvider } from "@/providers/MotionProvider";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahammadabdullah.dev"),
  title: {
    default: "Rafi Zaman - Frontend Developer",
    template: "%s | Rafi Zaman",
  },
  description:
    "Experienced frontend Developer specializing in React, Next.js and modern web technologies.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "JavaScript",
    "Web Development",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Rafi Zaman",
    "Portfolio",
  ],
  authors: [{ name: "Rafi Zaman", url: "https://github.com/ahammadabdullah" }],
  creator: "Rafi Zaman",
  publisher: "Rafi Zaman",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahammadabdullah.dev",
    title: "Rafi Zaman - Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Creating scalable, efficient digital solutions.",
    siteName: "Rafi Zaman Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rafi Zaman - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafi Zaman - Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ["/og-image.png"],
    creator: "@ahammadabdullah",
  },
  alternates: {
    canonical: "https://ahammadabdullah.dev",
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
    <html lang="en" className={jetBrainsMono.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <meta name="theme-color" content="#0A0A0A" />
      </head>
      <body className={`${jetBrainsMono.className} font-mono`}>
        <MotionProvider>
          <div className="bg-primary min-h-screen relative overflow-hidden">
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: "#161b22",
                  color: "#f0f6fc",
                  border: "1px solid #30363d",
                  fontFamily: "var(--font-jetbrains-mono)",
                  fontSize: "0.875rem",
                },
                success: {
                  style: {
                    border: "1px solid #7ee787",
                  },
                },
                error: {
                  style: {
                    border: "1px solid #ff7b72",
                  },
                },
              }}
            />
            <Navbar />
            <main className="pt-16 relative z-10">{children}</main>
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
