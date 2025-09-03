"use client";

import { m } from "@/providers/MotionProvider";
import Link from "next/link";

const AboutHero = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text font-mono">
          $ whoami --verbose
        </h1>

        <div className="flex justify-center">
          <div className="terminal max-w-4xl mx-auto text-left mb-8">
            <div className="terminal-header">about@developer:~$</div>
            <div className="font-mono text-sm">
              <span className="text-terminal-green">user@system</span>
              <span className="text-text-muted">:</span>
              <span className="text-terminal-blue">~</span>
              <span className="text-text-muted">$</span> cat README.md
              <br />
              <br />
              <span className="text-accent"># Rafi Zaman</span>
              <br />
              <br />
              <span className="text-text-secondary">
                A Frontend Developer who loves building ui with complex logics.{" "}
                <br />I believe in writing clean, maintainable code and creating
                user experiences that matter.
              </span>
              <br />
              <br />
              <span className="text-terminal-green">## Current Status</span>
              <br />
              <span className="text-text-secondary">
                - 🌱 Learning Mern Stack
                <br />
                - 🛠️ Love solving real-world problems with code
                <br />
                - 🎨 Enjoy creating visually appealing and functional interfaces
                <br />- 💬 Ask me about React, Node.js, or any web development
                topic
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        <div className="dev-card text-center">
          <div className="text-2xl font-bold text-terminal-green mb-2">
            200+
          </div>
          <div className="text-text-muted text-sm">Projects Completed</div>
        </div>
        <div className="dev-card text-center">
          <div className="text-2xl font-bold text-terminal-blue mb-2">2+</div>
          <div className="text-text-muted text-sm">Years Experience</div>
        </div>
        <div className="dev-card text-center">
          <div className="text-2xl font-bold text-terminal-yellow mb-2">
            24/7
          </div>
          <div className="text-text-muted text-sm">Available for Code</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/projects"
          className="btn-primary-dev px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 glow-dev"
        >
          <span>$ cd ./projects</span>
        </Link>
        <Link
          href="/contact"
          className="btn-github px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2"
        >
          <span>$ ./contact.sh</span>
        </Link>
      </div>
    </m.div>
  );
};

export default AboutHero;
