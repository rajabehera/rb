import React from "react";
import Reveal from "../Reveal";
import { Briefcase, Target, CheckCircle, Lightbulb } from "lucide-react";
import { Project } from "../projectData";

interface Props {
  project: Project;
}

const ProjectHighlights: React.FC<Props> = ({ project }) => {
  return (
    <Reveal delay={350}>
      <section className="space-y-12">

        {/* Overview */}
        {project.overview && (
          <div>
            <h3 className="mt-8 text-sm uppercase tracking-[0.25em] text-gray-500 mb-3">
              Overview
            </h3>

            <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
              {project.overview}
            </p>
          </div>
        )}

        {/* Problem + Goal */}
        <div className="grid md:grid-cols-2 gap-10">

          {project.problemStatement && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase
                  size={18}
                  className={project.accentColor}
                />

                <h3 className="font-semibold text-xl">
                  Problem
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 leading-7">
                {project.problemStatement}
              </p>

              {/* EVIDENCE — a stat, research finding, or direct user quote that
                  backs the problem claim. This is what separates "I assumed
                  this was broken" from "I found out this was broken." */}
              {project.problemEvidence && (
                <p className={`mt-4 pl-4 border-l-2 text-sm italic text-gray-500 dark:text-gray-400 border-current ${project.accentColor}`}>
                  {project.problemEvidence}
                </p>
              )}
            </div>
          )}

          {project.goal && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Target
                  size={18}
                  className={project.accentColor}
                />

                <h3 className="font-semibold text-xl">
                  Goal
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 leading-7">
                {project.goal}
              </p>
            </div>
          )}

        </div>

        {/* Responsibilities */}

        {project.responsibilities && (
          <div>

            <div className="flex items-center gap-2 mb-5">

              <CheckCircle
                size={18}
                className={project.accentColor}
              />

              <h3 className="font-semibold text-xl">
                My Responsibilities
              </h3>

            </div>

            <div className="flex flex-wrap gap-3">

              {project.responsibilities.map((item) => (

                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 text-sm"
                >
                  {item}
                </span>

              ))}

            </div>

          </div>
        )}

        {/* KEY DECISIONS — 2-3 trade-offs with rationale. This is the section
            a senior reviewer looks for and most portfolios skip entirely.
            "Responsibilities" says what you did; this says what you decided. */}
        {project.keyDecisions && project.keyDecisions.length > 0 && (
          <div>

            <div className="flex items-center gap-2 mb-5">
              <Lightbulb
                size={18}
                className={project.accentColor}
              />

              <h3 className="font-semibold text-xl">
                Key Decisions
              </h3>
            </div>

            <div className="space-y-5">
              {project.keyDecisions.map((decision, i) => (
                <div
                  key={i}
                  className="border border-gray-200 dark:border-white/10 rounded-xl p-5"
                >
                  <h4 className="font-semibold mb-1">
                    {decision.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-6">
                    {decision.rationale}
                  </p>
                </div>
              ))}
            </div>

          </div>
        )}

      </section>
    </Reveal>
  );
};

export default ProjectHighlights;