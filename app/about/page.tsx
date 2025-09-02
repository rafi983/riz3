import AboutPage from "@/components/about/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Rafi Zaman",
  description:
    "Learn more about Rafi Zaman, a passionate Full Stack Developer with expertise in modern web technologies and a strong background in competitive programming.",
  keywords: [
    "About Rafi Zaman",
    "Full Stack Developer Bio",
    "Web Developer Experience",
    "React Expert",
    "Next.js Specialist",
    "Competitive Programming",
  ],
  openGraph: {
    title: "About - Rafi Zaman",
    description:
      "Learn more about Rafi Zaman, a passionate Full Stack Developer with expertise in modern web technologies.",
    type: "profile",
    url: "https://ahammadabdullah.dev/about",
  },
};

export default function About() {
  return <AboutPage />;
}
