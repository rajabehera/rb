import React, { useState } from "react";
import { Layout, Wrench } from "lucide-react";
import Reveal from "../Reveal";
import { Project } from "../projectData";

interface Props {
  project: Project;
}

const ProjectSidebar: React.FC<Props> = ({ project }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="h-fit space-y-8">

      {/* Main Preview */}
      <Reveal delay={500} width="100%">
        <div className="w-full aspect-[4/5] bg-white dark:bg-[#050505] border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden relative group shadow-sm">

          {project.image && !imgError ? (
            <>
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={() => setImgError(true)}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-[#0a0a0a]">
              <h3 className="text-xl font-display font-bold">
                {project.title}
              </h3>
            </div>
          )}
        </div>
      </Reveal>

      {/* Design System */}
      <Reveal delay={650}>
        <div className="border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#0a0a0a] p-6 rounded-sm">

          <h4 className="text-xs uppercase tracking-widest text-gray-500 flex items-center gap-2 mb-5">
            <Layout size={14} />
            Design System
          </h4>

          <div className="flex gap-3 mb-5">

            <div
              className={`w-10 h-10 rounded-full border ${project.accentColor.replace(
                "text",
                "bg"
              )}`}
            />

            {project.secondaryColor && (
              <div
                className={`w-10 h-10 rounded-full border ${project.secondaryColor}`}
              />
            )}

            <div className="w-10 h-10 rounded-full border bg-white" />
          </div>

          <div>
            <div className="text-xs text-gray-400 mb-1">
              Typography
            </div>

            <div
              className={`text-xl text-gray-900 dark:text-white ${project.font}`}
            >
              Aa Bb Cc
            </div>
          </div>
        </div>
      </Reveal>

      {/* Tools & Skills — was "Project Meta" (Timeline/Team/Status), which
          duplicated ProjectSnapshot at the top of the page. Swapped for
          project.tech, which had no other home in the layout. */}
      {project.tech && project.tech.length > 0 && (
        <Reveal delay={800}>
          <div className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] p-6 rounded-sm">

            <h4 className="text-xs uppercase tracking-widest text-gray-500 flex items-center gap-2 mb-5">
              <Wrench size={14} />
              Tools & Skills
            </h4>

            <div className="flex flex-wrap gap-2">
              {project.tech.filter(Boolean).map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 text-xs font-mono"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      )}

    </div>
  );
};

export default ProjectSidebar;