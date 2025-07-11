"use client";

import { m } from "@/providers/MotionProvider";
import { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";

const VersionSwitcher = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const versions = [
    {
      version: "V1",
      url: `${process.env.v1Domain || "http://localhost:3000"}`,
      label: "Original",
    },
    {
      version: "V2",
      url: `${process.env.v2Domain || "http://localhost:3001"}`,
      label: "Modern",
      current: true,
    },
  ];

  return (
    <m.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative">
        <m.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-accent hover:bg-accent-hover text-white p-3 rounded-full shadow-lg glow transition-all duration-300"
        >
          <FaExchangeAlt className="w-5 h-5" />
        </m.button>

        <m.div
          initial={{ opacity: 0, y: 10, scale: 0.8 }}
          animate={{
            opacity: isExpanded ? 1 : 0,
            y: isExpanded ? 0 : 10,
            scale: isExpanded ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
          className={`absolute bottom-16 right-0 glass rounded-lg p-4 min-w-[200px] ${
            isExpanded ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <h3 className="text-sm font-semibold text-text-secondary mb-3">
            Switch Version
          </h3>
          <div className="space-y-2">
            {versions.map((version) => (
              <m.div
                key={version.version}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {version.current ? (
                  <div className="flex items-center justify-between p-2 bg-accent/20 rounded-md border border-accent/30">
                    <div>
                      <div className="text-sm font-medium text-accent">
                        {version.version}
                      </div>
                      <div className="text-xs text-text-muted">
                        {version.label} (Current)
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                ) : (
                  <a
                    href={version.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 hover:bg-tertiary/50 rounded-md transition-colors duration-200"
                  >
                    <div>
                      <div className="text-sm font-medium text-text">
                        {version.version}
                      </div>
                      <div className="text-xs text-text-muted">
                        {version.label}
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-text-muted rounded-full"></div>
                  </a>
                )}
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </m.div>
  );
};

export default VersionSwitcher;
