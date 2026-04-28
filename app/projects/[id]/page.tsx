import { projects } from "@/components/projects/ProjectData";
import { notFound } from "next/navigation";
import ProjectDetailsClient from "./ProjectDetailsClient";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}
