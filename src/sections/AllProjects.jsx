import React, { useEffect, useRef, useState } from 'react';
import projects from '../data/projects';
import ProjectDetail from './ProjectDetail';

function useInView() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function AllProjectCard({ project, index, onOpen }) {
  const [ref, isVisible] = useInView();
  const hasArticle = Boolean(project.article);

  return (
    <article
      ref={ref}
      className={`group overflow-hidden rounded-[28px] bg-white transition-all duration-700 ease-out motion-reduce:transition-none ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-100">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
        />
        <div className="absolute top-4 right-4 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-neutral-500 backdrop-blur-sm">
          {project.year}
        </div>
      </div>

      <div className="p-6 pb-7">
        <h3 className="mb-2 font-display text-[20px] font-semibold leading-tight tracking-[-0.02em] text-black">
          {project.name}
        </h3>

        <p className="text-sm leading-relaxed text-neutral-500">
          {project.description}
        </p>

        <ul className="mt-5 mb-6 flex flex-wrap gap-2">
          {project.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-[11px] font-medium text-neutral-600"
            >
              {skill}
            </li>
          ))}
        </ul>

        {/* {hasArticle ? (
          <button
            onClick={() => onOpen(project)}
            className="inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-[#0071e3] transition-opacity hover:opacity-70"
          >
            Read Case Study
            <span className="-translate-y-px text-[20px] leading-none">›</span>
          </button>
        ) : (
          <a
            href={project.link}
            className="inline-flex items-center gap-1 text-sm font-medium text-[#0071e3] transition-opacity hover:opacity-70"
          >
            View Project
            <span className="-translate-y-px text-[20px] leading-none">›</span>
          </a>
        )} */}
      </div>
    </article>
  );
}

function AllProjects({ onClose }) {
  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    setMounted(false);
    setTimeout(onClose, 400);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col bg-secondary transition-all duration-400 ease-out motion-reduce:transition-none ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Sticky header */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-200/80 bg-secondary/90 px-6 py-4 backdrop-blur-xl sm:px-12 lg:px-20">
        <button
          onClick={handleClose}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0071e3] transition-opacity hover:opacity-70"
          aria-label="Back to portfolio"
        >
          <span className="text-[20px] leading-none">‹</span>
          Back
        </button>

        <span className="font-display text-sm font-semibold text-black">
          All Projects
        </span>

        <div className="w-14" />
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 sm:px-12 lg:px-20">
          {/* Hero heading */}
          <div
            className={`mb-14 transition-all duration-600 ease-out motion-reduce:transition-none ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="font-display text-base font-semibold text-[#0071e3] sm:text-lg">
              Projects
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
              All Projects
            </h1>
            <p className="mt-4 max-w-2xl font-display text-lg leading-relaxed text-black/60 sm:text-xl">
              Everything I've built — full-stack apps, automation tools, and
              everything in between.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
            {projects.map((project, index) => (
              <AllProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpen={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default AllProjects;
