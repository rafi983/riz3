import cognitionx from "@/assets/cognitionX.png";
import converter from "@/assets/converter.png";
import farmfresh from "@/assets/farmfresh.png";
import gta6 from "@/assets/gta6.png";
import photobooth from "@/assets/photobooth.png";
import aistudio from "@/assets/aistudio.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: any;
  technologies: string[];
  features?: string[];
  links: {
    [key: string]: string;
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "ai-studio",
    title: "AI Studio",
    description:
        "A feature-rich, single-page web application that provides a user-friendly studio for generating images using the Pollinations AI service. Create, manage, and save AI‑generated artwork in a clean, modern interface.",
    image: aistudio,
    technologies: ["React", "TypeScript", "Pollinations AI"],
    features: [
      "Seamless integration with Pollinations AI for real-time image generation",
      "Developed an intuitive canvas for creating and managing AI-generated artwork",
      "Optimized responsive UI using React and TypeScript for maximum performance"
    ],
    links: {
      // TODO: replace with real links
      live: "https://ai-lws-studio.vercel.app/",
      github: "https://github.com/rafi983/lws_ai-studio",
    },
    featured: true,
  },
  {
    id: "cognitionx",
    title: "CognitionX",
    description:
        "CognitionX is an AI conversation platform built with Next.js that goes beyond simple chat: experiments, evaluation, analytics, and conversation management.",
    image: cognitionx,
    technologies: ["Next.js", "TypeScript", "Gemini", "MongoDB", "Mongoose"],
    features: [
      "Implemented Gemini AI model context logic for robust conversational experimentation",
      "Full-stack Next.js architecture with server-side operations for optimal speed",
      "Custom MongoDB schema scaling complex evaluation data and persistent analytics"
    ],
    links: {
      // TODO: replace with real links
      live: "https://cognition-x-xi.vercel.app/",
      github: "https://github.com/rafi983/CognitionX",
    },
  },
  {
    id: "ascii-converter",
    title: "ASCII Converter",
    description: "A lightweight web tool that converts images into ASCII art.",
    image: converter,
    technologies: ["Next.js", "Tailwind Merge", "clsx", "Canvas"],
    features: [
      "Client-side instantaneous image processing utilizing HTML5 Canvas API",
      "Dynamic responsive Tailwind grid to precisely parse and display ASCII characters",
      "Ultra-lightweight architecture with zero-dependency conversion algorithms"
    ],
    links: {
      // TODO: replace with real links
      live: "https://ascii-converter-three.vercel.app/",
      github: "https://github.com/rafi983/ascii_converter",
    },
  },
  {
    id: "farmfresh",
    title: "FarmFresh",
    description:
        "Multi‑vendor e‑commerce where farmers sell directly to consumers, removing middlemen and ensuring fresh produce.",
    image: farmfresh,
    technologies: ["React", "Next.js", "MongoDB", "Mongoose", "JWT", "Next-Auth"],
    features: [
      "End-to-end multi-vendor marketplace connecting consumers directly with farmers",
      "Secure authentication flow and guarded routes using Next-Auth strategies",
      "Complex MongoDB aggregation pipelines for managing roles and live inventory"
    ],
    links: {
      // TODO: replace with real links
      live: "https://farm-fresh-lyart.vercel.app/",
      github: "https://github.com/rafi983/FarmFresh",
    },
  },
  {
    id: "gta-vi-community",
    title: "GTA VI Community",
    description:
        "A gaming community experience where players connect, share highlights, and follow news and events for the GTA series.",
    image: gta6,
    technologies: ["React", "GSAP", "Tailwind CSS"],
    features: [
      "Immersive and cinematic animations powered by GSAP deep scroll triggers",
      "Robust state management and nested routing for highly engaging user flows",
      "Pixel-perfect tailored UI replicating exact top-tier gaming industry design standards"
    ],
    links: {
      // TODO: replace with real links
      live: "https://example.com/gta-vi-community",
      github: "https://github.com/rafi983/GTA-VI",
    },
  },
  {
    id: "photobooth",
    title: "PhotoBooth",
    description:
        "A modern social photo app with responsive UI for sharing and interacting with images.",
    image: photobooth,
    technologies: ["React", "Firebase", "React Router", "Zustand", "React Hook Form"],
    features: [
      "Real-time backend synchronization via Firebase for instantaneous photo sharing",
      "Scalable global state management using Zustand preventing unnecessary re-renders",
      "Optimized form logic using React Hook Form reducing input latency"
    ],
    links: {
      // TODO: replace with real links
      live: "https://photo-booth-virid.vercel.app/",
      github: "https://github.com/rafi983/PhotoBooth",
    },
  },
];
