"use client";

import { m } from "@/providers/MotionProvider";

interface ScrollIndicatorProps {
  onClick: () => void;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ onClick }) => {
  return (
    <m.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hidden md:block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      onClick={onClick}
    >
      <m.div
        className="flex flex-col items-center space-y-0 text-accent font-mono"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-xs opacity-70">$ scroll --down</span>
        <div className="text-xs">⬇</div>
      </m.div>
    </m.div>
  );
};

export default ScrollIndicator;
