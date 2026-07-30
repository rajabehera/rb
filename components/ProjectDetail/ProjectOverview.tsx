import React from "react";
import Reveal from "../Reveal";
import { Project } from "../projectData";

interface Props {
  project: Project;
}

const ProjectOverview: React.FC<Props> = ({ project }) => {
  return (
    <div className="space-y-10">
      {/* Narrative lede — one paragraph, not a restatement of Problem/Goal
          which already live in ProjectHighlights above. Use description
          as a short, scene-setting line rather than a summary of the case. */}
      <Reveal delay={350}>
        <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 font-light leading-relaxed">
          {project.description}
        </p>
      </Reveal>

      {/* Impact pull-quote — bridges into the metrics-first Outcomes section
          below. Keep this SHORT and specific; if it's not backed by a real
          number, this is a good place to be honest rather than grand. */}
      {project.impact && (
        <Reveal delay={450}>
          <div
            className={`bg-gray-50 dark:bg-white/5 border-l-4 ${project.color} p-6 rounded-r-sm`}
          >
            <h3 className="text-lg font-display font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-widest">
              The Impact
            </h3>

            <p className="text-lg text-gray-700 dark:text-gray-300 italic font-light">
              "{project.impact}"
            </p>
          </div>
        </Reveal>
      )}
    </div>
  );
};

export default ProjectOverview;