import React from "react";
import Reveal from "../Reveal";
import { Calendar, Users, Clock } from "lucide-react";
import { Project } from "../projectData";

interface Props {
  project: Project;
}

const ProjectSnapshot: React.FC<Props> = ({ project }) => {
  return (
    <Reveal delay={250}>
      <section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="border border-gray-200 dark:border-white/10 rounded-xl p-6">
            <Calendar className={`${project.accentColor} mb-4`} size={22} />
            <p className="text-xs uppercase text-gray-500 mb-1">Timeline</p>
            <h4 className="font-semibold">
              {project.meta?.timeline}
            </h4>
          </div>

          <div className="border border-gray-200 dark:border-white/10 rounded-xl p-6">
            <Users className={`${project.accentColor} mb-4`} size={22} />
            <p className="text-xs uppercase text-gray-500 mb-1">Team</p>
            <h4 className="font-semibold">
              {project.meta?.team}
            </h4>
          </div>

          <div className="border border-gray-200 dark:border-white/10 rounded-xl p-6">
            <Clock className={`${project.accentColor} mb-4`} size={22} />
            <p className="text-xs uppercase text-gray-500 mb-1">Status</p>
            <h4 className="font-semibold">
              {project.meta?.status}
            </h4>
          </div>

        </div>

        {/* MY CONTRIBUTION — individual line, not squeezed into a stat card.
            Only renders once you fill it in per project. */}
        {project.myContribution && (
          <div className="mt-6 border border-gray-200 dark:border-white/10 rounded-xl p-6">
            <p className="text-xs uppercase text-gray-500 mb-2">My Contribution</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.myContribution}
            </p>
          </div>
        )}

      </section>
    </Reveal>
  );
};

export default ProjectSnapshot;