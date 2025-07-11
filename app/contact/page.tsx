import ContactPage from "@/components/contact/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Ahammad Abdullah",
  description:
    "Get in touch with Ahammad Abdullah for collaboration opportunities, project discussions, or to learn more about full-stack development services.",
  keywords: [
    "Contact Ahammad Abdullah",
    "Full Stack Developer Contact",
    "Web Development Services",
    "Project Collaboration",
    "Hire Developer",
    "Contact Information",
  ],
  openGraph: {
    title: "Contact - Ahammad Abdullah",
    description:
      "Get in touch for collaboration opportunities and project discussions.",
    type: "website",
    url: "https://ahammadabdullah.dev/contact",
  },
};

export default function Contact() {
  return <ContactPage />;
}
