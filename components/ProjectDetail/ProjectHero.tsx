import React from "react";
import { ArrowLeft } from "lucide-react";
import Reveal from "../Reveal";
import { Project } from "../projectData";

interface Props {
  project: Project;
  onBack: () => void;
}

const ProjectHero: React.FC<Props> = ({ project, onBack }) => {
  return (
    <header className="mb-20">

      <Reveal>
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-500 hover:text-black dark:hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Index
        </button>
      </Reveal>

      <Reveal delay={100}>
        <div className="flex items-center gap-4 mb-6">
          <span
            className={`px-3 py-1 border rounded-full text-xs font-mono uppercase tracking-wider ${project.color} ${project.accentColor}`}
          >
            {project.category}
          </span>

          <span className="h-px w-12 bg-gray-300 dark:bg-gray-700" />

          <span className="text-gray-500 text-xs font-mono uppercase tracking-wider">
            {project.year}
          </span>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight text-gray-900 dark:text-white mb-8">
          {project.title}
        </h1>
      </Reveal>

      <Reveal delay={300}>
        <div className="grid md:grid-cols-4 gap-8 border-y border-black/10 dark:border-white/10 py-8">

          <div>
            <span className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
              Role
            </span>

            <span className="text-gray-900 dark:text-white">
              {project.role}
            </span>
          </div>

          <div>
            <span className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
              Client
            </span>

            <span className="text-gray-900 dark:text-white">
              {project.client}
            </span>
          </div>

          <div className="md:col-span-2">
            <span className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
              Tech / Tools
            </span>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-1 rounded-sm bg-gray-100 dark:bg-white/5 text-xs text-gray-700 dark:text-gray-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>
      </Reveal>

    </header>
  );
};

export default ProjectHero;