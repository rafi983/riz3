import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ahammad Abdullah - Full Stack Developer Portfolio",
    short_name: "Ahammad Abdullah",
    description:
      "Portfolio of Ahammad Abdullah, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f0f",
    theme_color: "#6366f1",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
    categories: ["technology", "portfolio", "developer"],
    lang: "en-US",
    scope: "/",
    orientation: "portrait-primary",
  };
}
