"use client";

import { m } from "@/providers/MotionProvider";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaDownload,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/rafi983",
    label: "GitHub",
    username: "@rafi983",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/rafi-irfan-zaman/",
    label: "LinkedIn",
    username: "@rafi-irfan-zaman",
  },
  {
    icon: FaTwitter,
    href: "https://x.com/RafiZaman98",
    label: "x",
    username: "@RafiZaman98",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/rafiz6619/",
    label: "Instagram",
    username: "@rafiz6619",
  },
];

interface HeroSectionProps {
  heroInView: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroInView }) => {
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
    hidden: { opacity: 0, y: 30 },
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
      animate={heroInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center text-center px-4"
    >
      <div className="max-w-5xl mx-auto">
        {/* Terminal-style header */}
        <m.div variants={itemVariants} className="mb-12">
          <div className="terminal max-w-3xl mx-auto text-left mb-8">
            <div className="terminal-header">portfolio@rafi:~$</div>
            <div className="font-mono text-sm">
              <span className="text-terminal-green">$</span>{" "}
              <span className="text-terminal-blue">whoami</span>
              <br />
              <span className="text-text-secondary">
                Frontend Developer | Problem Solver
              </span>
              <br />
              <span className="text-terminal-green">$</span>{" "}
              <span className="text-terminal-blue">cat about.md</span>
              <br />
              <span className="text-text-secondary">
                Love building scalable web applications.
              </span>
            </div>
          </div>

          <m.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text font-mono"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {"<Rafi Zaman />"}
          </m.h1>

          <m.div
            className="flex flex-wrap justify-center gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="badge badge-success">
              Available for development
            </span>
            <span className="badge badge-info">Open Source Contributor</span>
            <span className="badge badge-warning">Tea Powered</span>
          </m.div>
        </m.div>

        <m.div variants={itemVariants} className="mb-12">
          <div className="code-block max-w-2xl mx-auto text-left">
            <pre className="text-sm">
              <code>
                <span className="syntax-keyword">const</span>{" "}
                <span className="syntax-variable">developer</span> = {"{"}
                <br />
                {"  "}name: <span className="syntax-string">"Rafi Zaman"</span>,
                <br />
                {"  "}skills: [<span className="syntax-string">"Next.js"</span>,{" "}
                <span className="syntax-string">"Node.js"</span>,{" "}
                <span className="syntax-string">"TypeScript"</span>],
                <br />
                {"  "}passion:{" "}
                <span className="syntax-string">"Building web apps"</span>
                ,
                <br />
                {"  "}currentStatus:{" "}
                <span className="syntax-string">"Coding & Learning"</span>
                <br />
                {"}"};
              </code>
            </pre>
          </div>
        </m.div>

        <m.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <m.a
            href="/Ahammad_Abdullah_fullstack.pdf"
            download
            className="btn-primary-dev px-6 py-3 rounded-lg font-medium flex items-center space-x-2 glow-dev"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="w-4 h-4" />
            <span>$ download --resume</span>
          </m.a>
          <m.a
            href="/projects"
            className="btn-github px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>$ cd ./projects</span>
          </m.a>
        </m.div>

        <m.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <m.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="dev-card group text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <IconComponent className="w-8 h-8 text-accent mx-auto mb-2 group-hover:text-terminal-green transition-colors" />
                <div className="text-sm font-medium text-text mb-1">
                  {link.label}
                </div>
                <div className="text-xs text-text-muted font-mono">
                  {link.username}
                </div>
                <div className="status-online text-xs mt-2">Active</div>
              </m.a>
            );
          })}
        </m.div>
      </div>
    </m.section>
  );
};

export default HeroSection;
