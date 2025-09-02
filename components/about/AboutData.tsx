export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    title: "Frontend Developer",
    company: "Self",
    duration: "2023 Feb - Present",
    description:
        "Developed and maintained multiple web applications using modern technologies.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Supabase"],
  },
  {
    title: "Competitive Programmer",
    company: "Self",
    duration: "2021 - Present",
    description:
        "Solved algorithmic problems across platforms with focus on data structures, dynamic programming, and graph theory.",
    technologies: [
      "C++",
      "STL",
      "Algorithms",
      "Data Structures",
      "DP",
      "Graphs",
      "Number Theory",
      "Codeforces",
      "LeetCode",
    ],
  },
];
