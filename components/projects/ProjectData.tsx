import cognitionx from "@/assets/cognitionX.png";
import converter from "@/assets/converter.png";
import farmfresh from "@/assets/farmfresh.png";
import gta6 from "@/assets/gta6.png";
import photobooth from "@/assets/photobooth.png";
import aistudio from "@/assets/aistudio.png";

export interface Project {
  title: string;
  description: string;
  image: any;
  technologies: string[];
  links: {
    [key: string]: string;
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "AI Studio",
    description:
        "A feature-rich, single-page web application that provides a user-friendly studio for generating images using the Pollinations AI service. Create, manage, and save AI‑generated artwork in a clean, modern interface.",
    image: aistudio,
    technologies: ["React", "TypeScript", "Pollinations AI"],
    links: {
      // TODO: replace with real links
      live: "https://ai-lws-studio.vercel.app/",
      github: "https://github.com/rafi983/lws_ai-studio",
    },
    featured: true,
  },
  {
    title: "CognitionX",
    description:
        "CognitionX is an AI conversation platform built with Next.js that goes beyond simple chat: experiments, evaluation, analytics, and conversation management.",
    image: cognitionx,
    technologies: ["Next.js", "TypeScript", "Gemini", "MongoDB", "Mongoose"],
    links: {
      // TODO: replace with real links
      live: "https://cognition-x-xi.vercel.app/",
      github: "https://github.com/rafi983/CognitionX",
    },
  },
  {
    title: "ASCII Converter",
    description: "A lightweight web tool that converts images into ASCII art.",
    image: converter,
    technologies: ["Next.js", "Tailwind Merge", "clsx", "Canvas"],
    links: {
      // TODO: replace with real links
      live: "https://ascii-converter-three.vercel.app/",
      github: "https://github.com/rafi983/ascii_converter",
    },
  },
  {
    title: "FarmFresh",
    description:
        "Multi‑vendor e‑commerce where farmers sell directly to consumers, removing middlemen and ensuring fresh produce.",
    image: farmfresh,
    technologies: ["React", "Next.js", "MongoDB", "Mongoose", "JWT", "Next-Auth"],
    links: {
      // TODO: replace with real links
      live: "https://farm-fresh-lyart.vercel.app/",
      github: "https://github.com/rafi983/FarmFresh",
    },
  },
  {
    title: "GTA VI Community",
    description:
        "A gaming community experience where players connect, share highlights, and follow news and events for the GTA series.",
    image: gta6,
    technologies: ["React", "GSAP", "Tailwind CSS"],
    links: {
      // TODO: replace with real links
      live: "https://example.com/gta-vi-community",
      github: "https://github.com/rafi983/GTA-VI",
    },
  },
  {
    title: "PhotoBooth",
    description:
        "A modern social photo app with responsive UI for sharing and interacting with images.",
    image: photobooth,
    technologies: ["React", "Firebase", "React Router", "Zustand", "React Hook Form"],
    links: {
      // TODO: replace with real links
      live: "https://photo-booth-virid.vercel.app/",
      github: "https://github.com/rafi983/PhotoBooth",
    },
  },
];
