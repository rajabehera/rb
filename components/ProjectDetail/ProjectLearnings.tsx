import React from "react";
import Reveal from "../Reveal";
import { AlertTriangle, Lightbulb, RotateCcw } from "lucide-react";
import { Project } from "../projectData";

interface Props {
  project: Project;
}

const ProjectLearnings: React.FC<Props> = ({ project }) => {
  if (
    !project.designChallenges?.length &&
    !project.learnings?.length &&
    !project.retrospective
  ) {
    return null;
  }

  return (
    <Reveal delay={600}>
      <section className="space-y-12">

        {project.designChallenges && project.designChallenges.length > 0 && (
          <div>

            <div className="flex items-center gap-2 mb-6">
              <AlertTriangle
                className={project.accentColor}
                size={20}
              />
              <h2 className="text-2xl font-display font-bold">
                Design Challenges
              </h2>
            </div>

            <div className="space-y-4">
              {project.designChallenges.map((item, i) => {
                // Backward-compatible: supports old data (plain string) and
                // new data ({ challenge, resolution }) until every project's
                // designChallenges is migrated to the new shape.
                const isLegacyString = typeof item === "string";

                return (
                  <div
                    key={i}
                    className="border border-gray-200 dark:border-white/10 rounded-lg p-5"
                  >
                    <p className="font-semibold mb-2">
                      {isLegacyString ? item : item.challenge}
                    </p>
                    {!isLegacyString && item.resolution && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.resolution}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        )}

        {project.learnings && project.learnings.length > 0 && (
          <div>

            <div className="flex items-center gap-2 mb-6">
              <Lightbulb
                className={project.accentColor}
                size={20}
              />
              <h2 className="text-2xl font-display font-bold">
                Key Learnings
              </h2>
            </div>

            <div className="space-y-4">
              {project.learnings.map((item) => (
                <div
                  key={item}
                  className="border border-gray-200 dark:border-white/10 rounded-lg p-5"
                >
                  {item}
                </div>
              ))}
            </div>

          </div>
        )}

        {project.retrospective && (
          <div className={`border-l-4 ${project.color} bg-gray-50 dark:bg-white/5 rounded-r-lg p-6 flex gap-4`}>
            <RotateCcw className={`${project.accentColor} shrink-0 mt-1`} size={20} />
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                What I'd Do Differently
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.retrospective}
              </p>
            </div>
          </div>
        )}

      </section>
    </Reveal>
  );
};

export default ProjectLearnings;