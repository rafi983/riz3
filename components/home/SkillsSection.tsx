"use client";

import { m } from "@/providers/MotionProvider";
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    icon: FaCode,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    lang: "jsx",
    code: `const App = () => {
  return (
    <div className="app">
      <h1>Hello World</h1>
    </div>
  );
};`,
  },
  {
    title: "Backend",
    icon: FaServer,
    skills: ["Node.js", "Express", "REST API", "Firebase"],
    lang: "js",
    code: `app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});



`,
  },
  {
    title: "Database",
    icon: FaDatabase,
    skills: ["MongoDB", "PostgreSQL", "Prisma", "Supabase"],
    lang: "sql",
    code: `SELECT users.*, profiles.bio
FROM users
LEFT JOIN profiles ON users.id = profiles.user_id;`,
  },
  {
    title: "Tools",
    icon: FaTools,
    skills: ["Git", "Phpstorm", "Webstorm", "Vs code", "vercel"],
    lang: "bash",
    code: `git commit -m "feat: add new feature"
git push origin main
docker build -t myapp .`,
  },
];

interface SkillsSectionProps {
  skillsInView: boolean;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skillsInView }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <m.section
      initial="hidden"
      animate={skillsInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <m.div variants={itemVariants} className="flex justify-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-mono">
              $ cat skills.json
            </h2>
            <div className="code-block max-w-md mx-auto text-left">
              <pre className="text-sm">
                <code>
                  <span className="syntax-keyword">{"{"}</span>
                  <br />
                  {"  "}
                  <span className="syntax-string">"status"</span>:{" "}
                  <span className="syntax-string">"ready_to_code"</span>,
                  <br />
                  {"  "}
                  <span className="syntax-string">"stack"</span>:{" "}
                  <span className="syntax-string">"frontend"</span>,
                  <br />
                  {"  "}
                  <span className="syntax-string">"passion"</span>:{" "}
                  <span className="syntax-string">"problem_solving"</span>
                  <br />
                  <span className="syntax-keyword">{"}"}</span>
                </code>
              </pre>
            </div>
          </div>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <m.div
                key={category.title}
                variants={itemVariants}
                className="dev-card"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-accent/20 p-3 rounded-lg mr-4">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text font-mono">
                      {category.title}
                    </h3>
                    <div className="text-sm text-text-muted font-mono">
                      .{category.lang}
                    </div>
                  </div>
                </div>

                <div className="code-block mb-4">
                  <pre className="text-xs">
                    <code className="text-text-secondary">{category.code}</code>
                  </pre>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <m.span
                      key={skill}
                      className="badge badge-info text-xs"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        skillsInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        delay: index * 0.1 + skillIndex * 0.05,
                        duration: 0.3,
                      }}
                    >
                      {skill}
                    </m.span>
                  ))}
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </m.section>
  );
};

export default SkillsSection;
