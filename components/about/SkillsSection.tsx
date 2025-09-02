"use client";

import { m } from "@/providers/MotionProvider";
import { FaCode, FaServer, FaTools, FaLightbulb } from "react-icons/fa";
import { aboutSkillsData } from "@/components/about/skillsData";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: FaCode,
      skills: aboutSkillsData.frontend,
      extension: ".tsx",
      import: "import React from 'react';",
    },
    {
      title: "Backend",
      icon: FaServer,
      skills: aboutSkillsData.backend,
      extension: ".js",
      import: "const express = require('express');",
    },
    {
      title: "Tools",
      icon: FaTools,
      skills: aboutSkillsData.tools,
      extension: ".sh",
      import: "#!/bin/bash",
    },
    {
      title: "Other",
      icon: FaLightbulb,
      skills: aboutSkillsData.database,
      extension: ".sql",
      import: "-- Database Query",
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 gradient-text font-mono">
          $ ls -la ./skills/
        </h2>
        <div className="flex justify-center">
          <div className="code-block max-w-lg text-left">
            <pre className="text-sm">
              <code>
                <span className="text-text-muted">total 42</span>
                <br />
                <span className="text-terminal-green">drwxr-xr-x</span> 4 dev
                dev 4096 frontend/
                <br />
                <span className="text-terminal-blue">drwxr-xr-x</span> 4 dev dev
                4096 backend/
                <br />
                <span className="text-terminal-yellow">drwxr-xr-x</span> 4 dev
                dev 4096 tools/
                <br />
                <span className="text-terminal-red">drwxr-xr-x</span> 4 dev dev
                4096 other/
              </code>
            </pre>
          </div>
        </div>
      </m.div>

      <div className="responsive-grid">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <m.div
              key={category.title}
              variants={itemVariants}
              className="dev-card my-4"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <IconComponent className="w-5 h-5 lg:w-6 lg:h-6 text-accent mr-3" />
                  <h3 className="text-lg lg:text-xl font-semibold text-text font-mono">
                    {category.title}
                  </h3>
                </div>
                <span className="text-xs text-text-muted font-mono">
                  {category.extension}
                </span>
              </div>

              <div className="code-block mb-4">
                <pre className="text-xs">
                  <code className="text-text-secondary">{category.import}</code>
                </pre>
              </div>

              <div className="file-tree">
                {category.skills.map((skill, skillIndex) => (
                  <m.div
                    key={skill}
                    className="file text-xs mb-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                  >
                    {skill}
                  </m.div>
                ))}
              </div>
            </m.div>
          );
        })}
      </div>
    </m.div>
  );
};

export default SkillsSection;
