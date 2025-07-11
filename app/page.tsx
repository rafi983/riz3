import { Metadata } from "next";
import HomePage from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "Rafi Zaman - Frontend Developer",
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
    "Rafi Zaman",
  ],
  openGraph: {
    title: "Rafi Zaman - Frontend Developer",
    description:
      "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    type: "website",
    url: "https://ahammadabdullah.dev",
  },
};

export default function Page() {
  return <HomePage />;
}
