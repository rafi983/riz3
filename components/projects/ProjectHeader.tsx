"use client";

import { m } from "@/providers/MotionProvider";

interface ProjectHeaderProps {
  title: string;
  description: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <m.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text font-mono">
        $ ls ./projects/
      </h1>

      <div className="flex justify-center mb-8">
        <div className="terminal max-w-3xl text-left">
          <div className="terminal-header">projects@portfolio:~$</div>
          <div className="font-mono text-sm">
            <span className="text-terminal-green">$</span>{" "}
            <span className="text-terminal-blue">
              find . -name "*.project" -type f
            </span>
            <br />
            <span className="text-text-secondary">
              ./frontend/react-projects/
            </span>
            <br />
            <span className="text-text-secondary">./backend/node-apis/</span>
            <br />
            <span className="text-text-secondary">./fullstack/web-apps/</span>
            <br />
            <span className="text-terminal-green">$</span>{" "}
            <span className="text-terminal-blue">
              echo "Building the future, one commit at a time"
            </span>
            <br />
            <span className="text-text-secondary">
              Building the future, one commit at a time
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <div className="badge badge-success">
          <span className="mr-2">●</span>
          Active Projects
        </div>
        <div className="badge badge-info">
          <span className="mr-2">⚡</span>
          Open Source
        </div>
        <div className="badge badge-warning">
          <span className="mr-2">🚀</span>
          Always Learning
        </div>
      </div>
    </m.div>
  );
};

export default ProjectHeader;
