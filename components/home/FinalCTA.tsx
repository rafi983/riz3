"use client";

import { m } from "@/providers/MotionProvider";
import Link from "next/link";

const FinalCTA = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center dev-card">
        <h2 className="text-2xl md:text-3xl font-bold gradient-text font-mono mb-3">
          $ ping rafi --contact
        </h2>
        <p className="text-text-secondary mb-6">
          Building a SaaS, need AI features, or want a fast, robust web app? Let’s ship it.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact" className="btn-primary-dev px-6 py-3 rounded-lg font-mono">
              $ open contact
            </Link>
          </m.div>
          <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/projects" className="btn-github px-6 py-3 rounded-lg font-mono">
              $ view projects
            </Link>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
