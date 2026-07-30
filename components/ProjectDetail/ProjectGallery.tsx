import React from "react";
import { Image as ImageIcon } from "lucide-react";
import Reveal from "../Reveal";
import { Project } from "../projectData";

interface Props {
  project: Project;
}

const ProjectGallery: React.FC<Props> = ({ project }) => {
  const defaultGallery = [
    { caption: "Screen 01" },
    { caption: "Screen 02" },
    { caption: "Screen 03" },
    { caption: "Screen 04" },
  ];

  const gallery =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : defaultGallery;

  return (
    <Reveal delay={500} width="100%">
      <section className="mt-24 pt-12 border-t border-black/5 dark:border-white/5">
        <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
          <ImageIcon
            className={project.accentColor}
            size={24}
          />
          Interface Gallery
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {gallery.map((item, index) => (
            <div key={index}>
              <div
                className="aspect-video relative overflow-hidden rounded-sm border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-[#0a0a0a] group"
              >
                {item.url ? (
                  <img
                    src={item.url}
                    alt={item.caption}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <ImageIcon
                      size={32}
                      className="text-gray-500 mb-2"
                    />
                    <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
                      {item.caption}
                    </span>
                  </div>
                )}
              </div>

              {/* CAPTION + RATIONALE — moved out of the hover overlay so it's
                  visible by default (hover-only hides it entirely on touch
                  devices). Rationale is optional; renders under the caption
                  only when present so existing gallery items degrade gracefully. */}
              <div className="mt-3">
                <span className="text-xs uppercase tracking-widest font-mono text-gray-500 dark:text-gray-400">
                  {item.caption}
                </span>
                {item.rationale && (
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.rationale}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
};

export default ProjectGallery;