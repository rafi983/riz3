import { FaExternalLinkAlt, FaGithub, FaCode } from "react-icons/fa";

export const getLinkIcon = (linkType: string) => {
  switch (linkType) {
    case "live":
      return <FaExternalLinkAlt className="w-4 h-4" />;
    case "github":
      return <FaGithub className="w-4 h-4" />;
    default:
      return <FaCode className="w-4 h-4" />;
  }
};

export const getLinkLabel = (linkType: string) => {
  switch (linkType) {
    case "live":
      return "Live Demo";
    case "github":
      return "GitHub";
    case "client":
      return "Client Code";
    case "server":
      return "Server Code";
    default:
      return "Code";
  }
};
