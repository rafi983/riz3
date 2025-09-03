"use client";

import { m } from "@/providers/MotionProvider";
import Link from "next/link";

const AvailabilityBanner = () => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="dev-card flex flex-col md:flex-row items-center justify-between gap-3"
        >
          <div className="flex items-center gap-3">
            <span className="status-online">Open</span>
            <div className="font-mono text-sm text-text">Currently available for select projects</div>
          </div>
          <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="btn-primary-dev px-5 py-2.5 rounded-lg font-mono inline-block"
            >
              $ get in touch
            </Link>
          </m.div>
        </m.div>
      </div>
    </section>
  );
};

export default AvailabilityBanner;
