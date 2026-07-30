import React from "react";
import Reveal from "../Reveal";
import { AlertTriangle, Lightbulb } from "lucide-react";
import { Project } from "../projectData";

interface Props {
  project: Project;
}

const ProjectLearnings: React.FC<Props> = ({ project }) => {
  if (
    !project.designChallenges?.length &&
    !project.learnings?.length
  ) {
    return null;
  }

  return (
    <Reveal delay={600}>
      <section className="space-y-12">

        {project.designChallenges && (
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

              {project.designChallenges.map((item) => (
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

        {project.learnings && (
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

      </section>
    </Reveal>
  );
};

export default ProjectLearnings;