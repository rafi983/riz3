import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Rafi Zaman - Full Stack Developer Portfolio",
    short_name: "Rafi Zaman",
    description:
      "Portfolio of Rafi Zaman, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f0f",
    theme_color: "#6366f1",
    categories: ["technology", "portfolio", "developer"],
    lang: "en-US",
    scope: "/",
    orientation: "portrait-primary",
  };
}
