"use client";

import { m } from "@/providers/MotionProvider";
import Image from "next/image";
import { projects } from "@/components/projects/ProjectData";

const SpotlightCaseStudy = () => {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  if (!featured) return null;

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold gradient-text font-mono">$ cat ./spotlight.md</h2>
          <p className="text-text-secondary mt-2">A closer look at a recent build</p>
        </div>
        <div className="dev-card overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <div className="relative flex items-center justify-center">
            <div className="aspect-video w-full rounded-lg overflow-hidden border border-border bg-secondary/20 flex items-center justify-center">
              <Image
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover object-center"
                width={800}
                height={450}
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
            <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
              <span className="badge badge-success">Production</span>
              <span className="badge badge-info">AI</span>
              <span className="badge badge-warning">Auth</span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-terminal-green font-mono mb-3">{featured.title}</h3>
            <p className="text-text-secondary mb-4">{featured.description}</p>

            <div className="terminal mb-4">
              <div className="terminal-header">deploy.log</div>
              <pre className="text-xs text-text-secondary p-3">
{`$ npm run build
$ vercel deploy --prod
✔ Linked to project
✔ Built in 57s
✔ Ready • https://example.vercel.app`}
              </pre>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {featured.technologies.slice(0, 6).map((t) => (
                <span key={t} className="badge badge-info">{t}</span>
              ))}
            </div>

            <div className="flex gap-3">
              <m.a href="/projects" className="btn-primary-dev px-5 py-2.5 rounded-lg font-mono" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                $ read case-study
              </m.a>
              {featured.links?.live && (
                <m.a href={featured.links.live} target="_blank" rel="noopener noreferrer" className="btn-github px-5 py-2.5 rounded-lg font-mono" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  $ open live
                </m.a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightCaseStudy;
