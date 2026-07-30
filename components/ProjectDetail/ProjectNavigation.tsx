import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Reveal from "../Reveal";
import { Project } from "../projectData";

interface Props {
  prevProject: Project;
  nextProject: Project;
  onNavigate: (id: number) => void;
}

const ProjectNavigation: React.FC<Props> = ({
  prevProject,
  nextProject,
  onNavigate,
}) => {
  return (
    <Reveal delay={600} width="100%">
      <div className="py-24 border-t border-black/5 dark:border-white/5 grid md:grid-cols-2 gap-8">

        <button
          onClick={() => onNavigate(prevProject.id)}
          className="text-left group"
        >
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-gray-500 mb-3 group-hover:text-neon-green transition-colors">
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Previous Project
          </div>

          <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
            {prevProject.title}
          </h3>
        </button>

        <button
          onClick={() => onNavigate(nextProject.id)}
          className="text-left md:text-right group"
        >
          <div className="flex items-center justify-start md:justify-end gap-3 text-xs uppercase tracking-widest text-gray-500 mb-3 group-hover:text-neon-green transition-colors">
            Next Project

            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </div>

          <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
            {nextProject.title}
          </h3>
        </button>

      </div>
    </Reveal>
  );
};

export default ProjectNavigation;