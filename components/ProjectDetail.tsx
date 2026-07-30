import React, { useLayoutEffect } from "react";
import { projects } from "./projectData";

import ProjectHero from "./ProjectDetail/ProjectHero";
import ProjectSnapshot from "./ProjectDetail/ProjectSnapshot";
import ProjectHighlights from "./ProjectDetail/ProjectHighlights";
import ProjectOverview from "./ProjectDetail/ProjectOverview";
import ProjectSidebar from "./ProjectDetail/ProjectSidebar";
import ProjectFeatures from "./ProjectDetail/ProjectFeatures";
import ProjectProcess from "./ProjectDetail/ProjectProcess";
import ProjectOutcomes from "./ProjectDetail/ProjectOutcomes";
import ProjectLearnings from "./ProjectDetail/ProjectLearnings";
import ProjectGallery from "./ProjectDetail/ProjectGallery";
import ProjectNavigation from "./ProjectDetail/ProjectNavigation";

interface ProjectDetailProps {
  projectId: number;
  onBack: () => void;
  onNavigate: (id: number) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  projectId,
  onBack,
  onNavigate,
}) => {
  const currentIndex = projects.findIndex((p) => p.id === projectId);
  if (currentIndex === -1) return null;

  const project = projects[currentIndex];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [projectId]);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-light-bg dark:bg-dark-bg transition-colors">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 pt-32 pb-20">

        {/* HERO — title + specific problem line instead of a generic quote */}
        <ProjectHero project={project} onBack={onBack} />

        {/* SNAPSHOT — add "my contribution" vs team's alongside timeline/team/status */}
        <div className="mt-16">
          <ProjectSnapshot project={project} />
        </div>

        {/* HIGHLIGHTS — keep as-is, quick scan of top features */}
        <div className="mt-16">
          <ProjectHighlights project={project} />
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-24">

            {/* OVERVIEW — lead with the evidence (research findings, baseline
                numbers, real pain points) instead of restating the problem generically */}
            <ProjectOverview project={project} />

            <ProjectFeatures project={project} />

            {/* PROCESS — add a beat for "what we tried that didn't work" and
                key trade-offs/alternatives considered, inside each processStep
                description rather than a separate section */}
            <ProjectProcess project={project} />

            {/* OUTCOMES — lead with metrics/movement; only fall back to a
                qualitative outcome sentence when no hard number exists */}
            <ProjectOutcomes project={project} />

            {/* LEARNINGS — replace generic truisms with 1-2 project-specific
                "what I'd do differently" reflections */}
            <ProjectLearnings project={project} />

          </div>

          <div className="lg:col-span-5 self-start">
            <div className="sticky top-28">
              <ProjectSidebar project={project} />
            </div>
          </div>
        </div>

        {/* GALLERY — captions should carry a reason, not just a label */}
        <div className="mt-32">
          <ProjectGallery project={project} />
        </div>

        <div className="mt-32">
          <ProjectNavigation
            prevProject={prevProject}
            nextProject={nextProject}
            onNavigate={onNavigate}
          />
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;