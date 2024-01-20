import Project from "../components/Project";
import SectionHeader from "../components/SectionHeader";
import { projectsData } from "../lib/consts";

export default function Projects() {
  return (
    <section id="projects" className="mainSections">
      <SectionHeader title="Projects" className="mb-16" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 p-6 overflow-x-hidden">
        {projectsData.map((project) => {
          return <Project {...project} key={project.id} />;
        })}
      </div>
    </section>
  );
}
