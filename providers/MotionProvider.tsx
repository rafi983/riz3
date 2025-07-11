"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { ReactNode } from "react";

interface MotionProviderProps {
  children: ReactNode;
}

// Create a lightweight motion provider for SSR
export const MotionProvider = ({ children }: MotionProviderProps) => {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
};

// Export m component for tree shaking
export { m };
export {
  AnimatePresence,
  useInView,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
