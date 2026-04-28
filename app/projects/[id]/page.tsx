import { projects } from "@/components/projects/ProjectData";
import { notFound } from "next/navigation";
import ProjectDetailsClient from "./ProjectDetailsClient";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}
