'use client';

import type { Project, ProjectTagKey } from '@/types/project';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { FiArrowUpLeft } from 'react-icons/fi';

interface ProjectItemProps {
  project: Project;
  className?: string;
}

interface ProjectPreviewProps {
  title: string;
  previewUrl?: string;
  previewImage?: string;
}

type ActiveTag = ProjectTagKey | null;

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  title,
  previewUrl,
  previewImage,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  const desktopWidth = 1440;
  const desktopHeight = 810;

  useEffect(() => {
    if (!wrapperRef.current) return;

    const updateScale = () => {
      if (!wrapperRef.current) return;

      const wrapperWidth = wrapperRef.current.offsetWidth;
      setScale(wrapperWidth / desktopWidth);
    };

    updateScale();

    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(wrapperRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative mx-auto hidden aspect-video w-full max-w-3xl self-center overflow-hidden rounded-xl border border-border-light bg-white/50 dark:border-border-dark dark:bg-black/20 sm:block"
    >
      {previewImage ? (
        <Image
          src={previewImage}
          alt={title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain"
        />
      ) : previewUrl ? (
        <iframe
          src={previewUrl}
          title={title}
          width={desktopWidth}
          height={desktopHeight}
          className="absolute left-0 top-0 border-0"
          style={{
            width: `${desktopWidth}px`,
            height: `${desktopHeight}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center px-6 text-center text-sm text-zinc-500">
          Preview is not publicly available
        </div>
      )}
    </div>
  );
};

const ProjectItem: React.FC<ProjectItemProps> = ({
  project,
  className = '',
}) => {
  const [activeTag, setActiveTag] = useState<ActiveTag>(null);

  const handleTagClick = (tagKey: ProjectTagKey) => {
    setActiveTag((prev) => (prev === tagKey ? null : tagKey));
  };

  const activeDetail = activeTag ? project.details[activeTag] : null;

  return (
    <div
      className={`grid grid-cols-1 gap-6 rounded-xl border border-border-light bg-surface-light p-6 dark:border-border-dark dark:bg-surface-dark sm:gap-10 sm:p-10 md:gap-14 lg:grid-cols-2 ${className}`}
    >
      <div className="flex flex-col gap-4 self-center md:my-10 md:gap-10">
        <span className="text-xs text-secondary md:text-sm">
          {project.projectType}
        </span>

        <h3 className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
          {project.title}
        </h3>

        <p className="text-xs leading-6 xs:text-sm md:text-base md:leading-8">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
          {project.tags.map((tag) => (
            <button
              key={tag.id}
              type="button"
              onClick={() => handleTagClick(tag.key)}
              className={`cursor-pointer whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-all duration-500 md:text-base ${
                activeTag === tag.key
                  ? 'border-primary bg-primary text-white dark:border-secondaryBackground dark:bg-secondaryBackground'
                  : 'border-border-light bg-transparent text-text-light hover:bg-primary hover:text-white dark:border-border-dark dark:text-text-dark dark:hover:bg-secondaryBackground'
              }`}
            >
              {tag.tag}
            </button>
          ))}

          {project.url ? (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-full bg-primary px-4 py-2 text-sm text-white transition-all duration-500 hover:bg-secondaryBackground dark:bg-secondaryBackground hover:dark:bg-primary md:text-base"
            >
              {project.button} <FiArrowUpLeft />
            </Link>
          ) : (
            <span className="cursor-not-allowed whitespace-nowrap rounded-full bg-zinc-500 px-4 py-2 text-sm text-white md:text-base">
              {project.button}
            </span>
          )}
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeDetail
              ? 'max-h-96 translate-y-0 opacity-100'
              : 'max-h-0 -translate-y-2 opacity-0'
          }`}
        >
          {activeDetail && (
            <div className="rounded-xl border border-border-light bg-white/60 p-4 dark:border-border-dark dark:bg-black/20">
              <h4 className="mb-4 text-sm font-semibold text-primary dark:text-secondary">
                {activeDetail.title}
              </h4>

              <div className="flex flex-wrap gap-2">
                {activeDetail.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border-light px-3 py-1 text-xs transition-all duration-300 dark:border-border-dark md:text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <ProjectPreview
        title={project.title}
        previewUrl={project.previewUrl}
        previewImage={project.previewImage}
      />
    </div>
  );
};

export default ProjectItem;