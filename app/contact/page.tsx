import ContactPage from "@/components/contact/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Rafi Zaman",
  description:
    "Get in touch with Rafi Zaman for collaboration opportunities, project discussions, or to learn more about full-stack development services.",
  keywords: [
    "Contact Rafi Zaman",
    "Full Stack Developer Contact",
    "Web Development Services",
    "Project Collaboration",
    "Hire Developer",
    "Contact Information",
  ],
  openGraph: {
    title: "Contact - Rafi Zaman",
    description:
      "Get in touch for collaboration opportunities and project discussions.",
    type: "website",
    url: "https://ahammadabdullah.dev/contact",
  },
};

export default function Contact() {
  return <ContactPage />;
}
