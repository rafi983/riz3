export type CategoryKey = "frontend" | "backend" | "database" | "tools" | "other";

export const skillsData: Record<CategoryKey, string[]> = {
  frontend: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Redux",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "JWT",
    "RESTful APIs",
  ],
  database: [
    "MongoDB",
    "PostgreSQL",
    "Supabase",
    "Prisma",
  ],
  tools: [
    "Git",
    "VS Code",
    "Phpstorm",
    "Intellij idea",
    "Vercel",
    "Netlify",
    "Postman",
    "npm/yarn",
  ],
  other: [
    "Problem Solving",
    "Team Leadership",
    "Project Management",
    "UI/UX Design",
    "Agile Methodology",
    "Code Review",
    "Testing",
    "Documentation",
  ],
};

