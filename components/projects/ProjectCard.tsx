"use client";

import { m } from "@/providers/MotionProvider";
import Image from "next/image";
import { Project } from "./ProjectData";
import { getLinkIcon, getLinkLabel } from "./ProjectUtils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
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
    <m.div
      variants={itemVariants}
      className={`dev-card overflow-hidden ${
        project.featured ? "ring-2 ring-accent glow-dev" : ""
      }`}
    >
      <div className={`grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6`}>
        <div className="relative order-1 xl:col-span-1">
          <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
            <Image
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              width={600}
              height={400}
              priority={project.featured}
            />
          </div>
          {project.featured && (
            <div className="absolute top-3 left-3">
              <span className="badge badge-success">Featured</span>
            </div>
          )}
          <div className="absolute top-3 right-3">
            <span className="project-status active">● Active</span>
          </div>
        </div>

        <div className="order-2 xl:col-span-1">
          <div className="mb-4">
            <h3 className="text-xl lg:text-2xl font-bold mb-2 text-terminal-green font-mono">
              {project.title}
            </h3>
            <p className="text-text-secondary leading-relaxed text-sm lg:text-base">
              {project.description}
            </p>
          </div>

          <div className="mb-4">
            <div className="text-xs text-text-muted font-mono mb-2">
              // Tech Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`badge badge-info ${
                    tech.toLowerCase() === "javascript"
                      ? "lang-javascript"
                      : tech.toLowerCase() === "typescript"
                        ? "lang-typescript"
                        : tech.toLowerCase() === "react"
                          ? "lang-react"
                          : tech.toLowerCase() === "node.js" ||
                              tech.toLowerCase() === "nodejs"
                            ? "lang-node"
                            : tech.toLowerCase() === "python"
                              ? "lang-python"
                              : ""
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 lg:gap-3">
            {Object.entries(project.links).map(([type, url]) => (
              <m.a
                key={type}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-accent/10 hover:bg-accent/20 text-accent px-3 lg:px-4 py-2 rounded-full transition-colors duration-200 text-xs lg:text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {getLinkIcon(type)}
                <span className="font-medium font-mono">
                  {getLinkLabel(type)}
                </span>
              </m.a>
            ))}
          </div>
        </div>
      </div>
    </m.div>
  );
};

export default ProjectCard;
