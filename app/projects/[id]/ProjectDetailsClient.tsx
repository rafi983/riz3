"use client";

import Image from "next/image";
import Link from "next/link";
import { getLinkIcon, getLinkLabel } from "@/components/projects/ProjectUtils";
import PageTransition from "@/components/PageTransition";
import { m } from "@/providers/MotionProvider";
import { Project } from "@/components/projects/ProjectData";

export default function ProjectDetailsClient({ project }: { project: Project }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-20 relative">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[20%] left-[10%] w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-terminal-green/5 rounded-full blur-[100px] mix-blend-screen" />
        </div>

        <m.div
          className="container mx-auto px-4 max-w-5xl relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Back button */}
          <m.div variants={itemVariants}>
            <Link href="/projects" className="inline-flex items-center text-text-muted hover:text-terminal-green transition-colors mb-8 font-mono text-sm cli-prompt hover:glow-terminal">
              <span className="mr-2">cd ..</span>
              <span className="text-text-secondary">// back to projects</span>
            </Link>
          </m.div>

          {/* Header */}
          <m.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-transparent bg-clip-text gradient-text">
                {project.title}
              </h1>
              {project.featured && (
                <span className="badge badge-success hidden md:inline-flex glow-terminal shadow-sm">Featured</span>
              )}
            </div>
            <p className="text-xl text-text-secondary max-w-3xl leading-relaxed border-l-2 border-terminal-green/30 pl-4 py-1">
              {project.description}
            </p>
          </m.div>

          {/* Main Image */}
          <m.div variants={itemVariants} className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-border mb-16 terminal p-1 hover:glow-code transition-shadow duration-500">
            <div className="absolute top-0 left-0 w-full h-8 bg-[#161b22] border-b border-border flex items-center px-4 gap-2 z-10 rounded-t-lg">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28ca42]" />
              <span className="ml-4 text-xs font-mono text-text-muted truncate">~/projects/{project.id}/preview.png</span>
            </div>
            <div className="relative w-full h-full mt-8 rounded-b-lg overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover transform hover:scale-[1.02] transition-transform duration-700"
                priority
                fill
              />
            </div>
          </m.div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <m.div variants={itemVariants} className="lg:col-span-2">
              <div className="code-block-numbered h-full glow-terminal hover:border-terminal-green/50 transition-colors duration-300">
                <div className="line-numbers">
                  1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12
                </div>
                <h2 className="text-2xl font-bold mb-4 font-mono syntax-function">
                  const <span className="text-text-primary">aboutProject</span> = () =&gt; {"{"}
                </h2>
                <div className="prose prose-invert max-w-none text-text-secondary pl-[3rem] font-mono text-sm md:text-base">
                  <div className="mb-4">
                    <span className="syntax-keyword">return</span> {"{"}
                    <div className="pl-4">
                      <span className="syntax-variable">summary</span>: <span className="syntax-string">&quot;{project.description}&quot;</span>,
                      {project.features && project.features.length > 0 && (
                        <div className="mt-2">
                          <span className="syntax-variable">keyFeatures</span>: [
                          {project.features.map((feature, i) => (
                            <div key={i} className="pl-4">
                              <span className="syntax-string">&quot;{feature}&quot;</span>{i < project.features!.length - 1 ? ',' : ''}
                            </div>
                          ))}
                          ]
                        </div>
                      )}
                    </div>
                    {"}"};
                  </div>
                  <p className="syntax-comment mt-6">
                    // Ready to explore? Inspect the live deployment or review the source code.
                  </p>
                </div>
                <h2 className="text-xl font-bold mt-4 font-mono syntax-function">
                  {"}"};
                </h2>
              </div>
            </m.div>

            <div className="space-y-8">
              <m.div variants={itemVariants} className="file-tree hover:border-accent/50 transition-colors duration-300">
                <h3 className="text-lg font-bold mb-4 font-mono flex items-center">
                  <span className="folder mr-2"></span>
                  tech_stack
                </h3>
                <div className="flex flex-col gap-2 pl-4 border-l border-border/50">
                  {project.technologies.map((tech) => (
                    <div key={tech} className="flex items-center text-sm font-mono hover:text-white transition-colors">
                      <span className="text-border mr-2">├──</span>
                      <span
                        className={`file-icon ${
                          tech.toLowerCase() === "javascript"
                            ? "js"
                            : tech.toLowerCase() === "typescript"
                              ? "ts"
                              : tech.toLowerCase() === "react"
                                ? "jsx"
                                : tech.toLowerCase() === "next.js"
                                  ? "tsx"
                                  : tech.toLowerCase() === "css" || tech.toLowerCase() === "tailwind css"
                                    ? "css"
                                    : "json"
                        }`}
                      ></span>
                      <span className={`${
                        tech.toLowerCase() === "javascript"
                          ? "lang-javascript"
                          : tech.toLowerCase() === "typescript"
                            ? "lang-typescript"
                            : tech.toLowerCase() === "react" || tech.toLowerCase() === "next.js"
                              ? "lang-react"
                              : tech.toLowerCase() === "node.js" ||
                                  tech.toLowerCase() === "nodejs"
                                ? "lang-node"
                                : tech.toLowerCase() === "python"
                                  ? "lang-python"
                                  : "text-text-secondary"
                      }`}>
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </m.div>

              <m.div variants={itemVariants} className="dev-card hover:border-terminal-green/50 transition-colors duration-300">
                <h3 className="text-lg font-bold mb-4 font-mono text-terminal-green flex items-center">
                  <span className="branch-indicator mr-2"></span>
                  deployments
                </h3>
                <div className="flex flex-col gap-3">
                  {Object.entries(project.links).map(([type, url]) => (
                    <m.a
                      key={type}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col space-y-1 bg-[#0d1117] border border-border hover:border-accent p-3 rounded-lg transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-accent group-hover:text-terminal-green transition-colors">
                          {getLinkIcon(type)}
                        </span>
                        <span className="font-medium font-mono text-sm">
                          {getLinkLabel(type)}
                        </span>
                      </div>
                      <span className="text-xs text-text-muted font-mono truncate pl-6">
                        {url.replace(/^https?:\/\//, '')}
                      </span>
                    </m.a>
                  ))}
                </div>
              </m.div>
            </div>
          </div>
        </m.div>
      </div>
    </PageTransition>
  );
}
