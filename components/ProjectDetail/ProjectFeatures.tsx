import React from "react";
import { Smartphone } from "lucide-react";
import Reveal from "../Reveal";
import { Project } from "../projectData";

interface Props {
  project: Project;
}

const ProjectFeatures: React.FC<Props> = ({ project }) => {
  if (!project.detailedFeatures) return null;

  return (
    <Reveal delay={550}>
      <section className="pt-8">
        <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
          <Smartphone className={project.accentColor} size={24} />
          Key Features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.detailedFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 p-6 hover:border-black/30 dark:hover:border-white/30 transition-all duration-300 shadow-sm group"
            >
              <div className="mb-4 w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors">
                <span className="font-display font-bold text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h4>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
};

export default ProjectFeatures;