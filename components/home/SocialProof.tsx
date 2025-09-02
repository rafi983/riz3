"use client";

import { m } from "@/providers/MotionProvider";

const items = [
  { label: "Shipped apps", value: "6+" },
  { label: "Tech used", value: "Next.js • TypeScript • Gemini • Pollinations" },
  { label: "Deploys", value: "Vercel" },
];

const SocialProof = () => {
  const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const item = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

  return (
    <section className="py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <m.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={container} className="contents">
          {items.map((s) => (
            <m.div key={s.label} variants={item} className="dev-card text-center">
              <div className="text-xl font-bold font-mono text-terminal-green">{s.value}</div>
              <div className="text-xs text-text-secondary mt-1">{s.label}</div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default SocialProof;
