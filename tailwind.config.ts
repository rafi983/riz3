import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jetbrains-mono)", "monospace"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        // Terminal/Code Editor inspired color scheme
        primary: "#0d1117",
        secondary: "#161b22",
        tertiary: "#21262d",
        accent: "#58a6ff",
        "accent-hover": "#1f6feb",
        success: "#238636",
        warning: "#d29922",
        error: "#f85149",
        text: "#f0f6fc",
        "text-muted": "#8b949e",
        "text-secondary": "#c9d1d9",
        border: "#30363d",
        "code-bg": "#0d1117",
        "terminal-green": "#7ee787",
        "terminal-yellow": "#f1e05a",
        "terminal-red": "#ff7b72",
        "terminal-blue": "#79c0ff",
      },
      animation: {
        "terminal-blink": "terminalBlink 1s infinite",
      },
      keyframes: {
        terminalBlink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
