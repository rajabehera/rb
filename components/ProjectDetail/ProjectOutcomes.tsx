import React from "react";
import { CheckCircle, TrendingUp } from "lucide-react";
import Reveal from "../Reveal";
import { Project } from "../projectData";

interface Props {
  project: Project;
}

const ProjectOutcomes: React.FC<Props> = ({ project }) => {
  if (!project.outcomes && !project.successMetrics) return null;

  return (
    <Reveal delay={550}>
      <section className="pt-8">
        <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
          <CheckCircle className={project.accentColor} size={24} />
          Outcomes
        </h3>

        {/* METRICS — leads the section. This is what a senior reviewer scans
            for first. Falls back gracefully if a project has no hard numbers. */}
        {project.successMetrics && project.successMetrics.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {project.successMetrics.map((metric, i) => (
              <div
                key={i}
                className="border border-gray-200 dark:border-white/10 rounded-xl p-5"
              >
                <TrendingUp className={`${project.accentColor} mb-3`} size={18} />
                <p className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                  {metric.value}
                </p>
                <p className="text-xs uppercase text-gray-500 mt-1">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* NARRATIVE — supporting context after the numbers, not a
            restatement of the problem/goal already covered above. */}
        {project.outcomes && (
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light whitespace-pre-line">
            {project.outcomes}
          </p>
        )}
      </section>
    </Reveal>
  );
};

export default ProjectOutcomes;