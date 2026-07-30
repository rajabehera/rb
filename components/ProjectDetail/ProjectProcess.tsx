import React from "react";
import { Workflow, RotateCcw } from "lucide-react";
import Reveal from "../Reveal";
import { Project } from "../projectData";

interface Props {
  project: Project;
}

const ProjectProcess: React.FC<Props> = ({ project }) => {
  if (!project.processSteps) return null;

  return (
    <Reveal delay={600}>
      <section className="pt-8">
        <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
          <Workflow className={project.accentColor} size={24} />
          Design Process
        </h3>

        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 space-y-12">
          {project.processSteps.map((step, index) => (
            <div key={index} className="relative pl-12">

              <div
                className={`absolute left-0 top-0 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-black ${
                  index === 0
                    ? "bg-neon-green"
                    : index === project.processSteps!.length - 1
                    ? "bg-neon-purple"
                    : "bg-gray-400 dark:bg-gray-600"
                }`}
              />

              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h4>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {step.description}
              </p>

              {/* ITERATION NOTE — "what we tried first / what changed and why."
                  Optional per step, styled as a distinct callout so it reads
                  as evidence of iteration, not just more prose. This is the
                  detail that separates a highlight reel from a real process. */}
              {step.iterationNote && (
                <div className="mt-4 flex gap-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-4">
                  <RotateCcw
                    size={16}
                    className={`${project.accentColor} shrink-0 mt-0.5`}
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.iterationNote}
                  </p>
                </div>
              )}

            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
};

export default ProjectProcess;