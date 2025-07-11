"use client";

import { m } from "@/providers/MotionProvider";
import { FaGitAlt, FaBuilding, FaCalendarAlt } from "react-icons/fa";
import { experienceData } from "./AboutData";

const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="mb-20"
    >
      <m.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 gradient-text font-mono">
          $ git log --online --experience
        </h2>
        <div className="flex justify-center">
          <div className="code-block max-w-2xl text-left">
            <pre className="text-sm">
              <code>
                <span className="text-terminal-green">commit abc123</span>{" "}
                <span className="text-text-secondary">(HEAD -&gt; main)</span>
                <br />
                <span className="text-text-secondary">
                  Author: Rafi zaman &lt;dev@rafizaman.me&gt;
                </span>
                <br />
                <span className="text-text-secondary">
                  Date: {new Date().toLocaleDateString()}
                </span>
                <br />
                <span className="text-text-secondary">
                  feat: expanding expertise and building innovative applications
                </span>
              </code>
            </pre>
          </div>
        </div>
      </m.div>

      <div className="space-y-6">
        {experienceData.map((exp, index) => (
          <m.div key={index} variants={itemVariants} className="dev-card">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start">
                <div className="bg-terminal-green/20 p-2 rounded-lg mr-4">
                  <FaGitAlt className="w-5 h-5 text-terminal-green" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text font-mono mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-text-muted text-sm mb-2">
                    <FaBuilding className="w-4 h-4 mr-2" />
                    <span className="font-mono">{exp.company}</span>
                  </div>
                  <div className="flex items-center text-text-muted text-sm">
                    <FaCalendarAlt className="w-4 h-4 mr-2" />
                    <span className="font-mono">{exp.duration}</span>
                  </div>
                </div>
              </div>
              <div className="status-online text-sm">Active</div>
            </div>

            <div className="terminal mb-4">
              <div className="terminal-header">experience.log</div>
              <div className="text-sm text-text-secondary leading-relaxed">
                {exp.description}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span
                  key={tech}
                  className={`badge ${
                    techIndex % 4 === 0
                      ? "badge-success"
                      : techIndex % 4 === 1
                        ? "badge-info"
                        : techIndex % 4 === 2
                          ? "badge-warning"
                          : "badge-error"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </m.div>
        ))}
      </div>
    </m.div>
  );
};

export default ExperienceSection;
