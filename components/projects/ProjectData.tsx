import taskify from "@/assets/taskify.png";
import edumi from "@/assets/edumi.png";
import foodshare from "@/assets/foodshare.png";
import portfolio from "@/assets/portfolio.png";
import aiSaaSBoilerplate from "@/assets/ai-saas-boilerplate.png";
import sellto from "@/assets/sellto.png";

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
    title: "Sellto",
    description:
      "The simplest digital store solution. Sellto is an all-in-one platform to start, run, and grow a digital business from software to communities and everything else.",
    image: sellto,
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    links: {
      live: "https://beta.sellto.io",
    },
    featured: true,
  },
  {
    title: "AI SaaS Boilerplate",
    description:
      "A comprehensive AI SaaS application boilerplate that integrates cutting-edge AI features, modular components, customizable email templates, and secure payment processing.",
    image: aiSaaSBoilerplate,
    technologies: ["Next.js", "OpenAI", "Stripe", "Prisma", "PostgreSQL"],
    links: {
      live: "https://ai-saas-template-three.vercel.app",
    },
    featured: true,
  },
  {
    title: "Taskify",
    description:
      "Effortless Task Mastery: Elevate Your Productivity with our MERN Stack Todo Website featuring Seamless Drag-and-Drop Functionality!",
    image: taskify,
    technologies: ["React", "Node.js", "MongoDB", "Express", "DnD Kit"],
    links: {
      live: "https://taskify-ahammad-abdullah.web.app/",
      github: "https://github.com/ahammadabdullah/taskify",
    },
  },
  {
    title: "Edumi",
    description:
      "Empowered educators and engaged students through Edumi, a dynamic online learning platform built with MERN stack.",
    image: edumi,
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    links: {
      live: "https://edumi-453a2.web.app/",
      client: "https://github.com/ahammadabdullah/edumi-client",
      server: "https://github.com/ahammadabdullah/edumi-server",
    },
  },
  {
    title: "Community Food Share",
    description:
      "A platform that empowers individuals to donate and receive food, fostering a sense of community and tackling food insecurity.",
    image: foodshare,
    technologies: ["React", "Node.js", "MongoDB", "Express", "Firebase"],
    links: {
      live: "https://community-food-share.web.app",
      client: "https://github.com/ahammadabdullah/community-food-share-client",
      server: "https://github.com/ahammadabdullah/community-food-share-server",
    },
  },
  {
    title: "Portfolio V1",
    description:
      "Explore my expertise through a user-friendly, secure portfolio showcasing my work in the MERN stack.",
    image: portfolio,
    technologies: ["React", "Node.js", "MongoDB", "Express", "Material-UI"],
    links: {
      live: "https://ahammad-abdullah.web.app",
      github: "https://github.com/ahammadabdullah/portfolio",
    },
  },
];
