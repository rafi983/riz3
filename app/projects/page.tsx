import ProjectsPage from "@/components/projects/ProjectsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Ahammad Abdullah",
  description:
    "Explore a collection of innovative projects by Ahammad Abdullah, showcasing expertise in React, Next.js, Node.js, and full-stack web development.",
  keywords: [
    "Web Development Projects",
    "React Projects",
    "Next.js Applications",
    "Full Stack Projects",
    "MERN Stack",
    "Portfolio Projects",
    "Ahammad Abdullah Projects",
  ],
  openGraph: {
    title: "Projects - Ahammad Abdullah",
    description:
      "Explore innovative projects showcasing expertise in modern web technologies and full-stack development.",
    type: "website",
    url: "https://ahammadabdullah.dev/projects",
  },
};

export default function Projects() {
  return <ProjectsPage />;
}
