"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/components/projects/ProjectData";
import PageTransition from "@/components/PageTransition";
import { m } from "@/providers/MotionProvider";

const ProjectsPage = () => {
  const [mounted, setMounted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <PageTransition className="min-h-screen bg-primary text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <ProjectHeader
          title="My Projects"
          description="A collection of projects that showcase my skills and passion for creating innovative digital solutions."
        />

        {mounted ? (
          <m.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </m.div>
        ) : (
          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default ProjectsPage;
