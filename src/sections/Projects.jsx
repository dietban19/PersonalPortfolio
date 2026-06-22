import { useEffect, useRef, useState } from 'react';
import projects from '../data/projects';

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
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

// ==========================================================================
// FULL-SCREEN PROJECT MODAL (Apple Style - Exact Typography)
// ==========================================================================
function ProjectModal({ project, onClose }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (project) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-white/85 backdrop-blur-3xl transition-all duration-500"
      onClick={onClose}
    >
      {/* Fixed Close Button - Accessible on both mobile and desktop */}
      <button
        onClick={onClose}
        className="fixed right-5 top-5 z-[60] flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#e5e5ea]/80 text-[#1d1d1f] backdrop-blur-md transition-colors hover:bg-[#d1d1d6] md:right-8 md:top-8 md:h-10 md:w-10"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Main Content Container - Adjusted padding for mobile vs desktop */}
      <div
        className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 py-16 md:px-12 md:py-32"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Responsive Hero Image */}
        <div className="mb-8 h-[40vh] min-h-[220px] w-full overflow-hidden rounded-[24px] bg-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] md:mb-12 md:h-[45vh] md:min-h-[350px] md:rounded-[32px]">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text Content Area */}
        <div className="mx-auto w-full max-w-3xl">
          {/* Exact Apple Header Typography */}
          <h2 className="mb-6 text-[#1d1d1f] font-display font-semibold text-[32px]/[1.125] tracking-[0.004em] md:text-[48px]/[1.0834933333] md:tracking-[-0.003em] lg:text-[64px]/[1.0625] lg:tracking-[-0.009em]">
            {project.name}
          </h2>

          {/* Clean Skills Badges */}
          <ul className="mb-10 flex flex-wrap gap-2 md:gap-3">
            {project.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-black/5 px-3.5 py-1.5 text-[13px] font-medium text-[#1d1d1f] md:px-4 md:py-2 md:text-[14px]"
              >
                {skill}
              </li>
            ))}
          </ul>

          {/* Exact Apple Description Typography */}
          <div className="text-[#1d1d1f]/80 font-display font-normal text-[19px]/[1.4211026316] tracking-[0.012em] md:text-[21px]/[1.1904761905] md:tracking-[0.011em] md:max-w-[60ch] lg:text-[24px]/[1.1666666667] lg:tracking-[0.009em]">
            {project.description.split('\n').map((paragraph, i) => (
              <p key={i} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Call to Action */}
          {project.link ? 'Yes' : 'No'}
          {project.link && (
            <div className="mt-10 pb-16 md:mt-12 md:pb-12">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-full bg-[#0071e3] px-6 py-3 font-sans text-[15px] font-normal text-white transition-colors hover:bg-[#0077ed] md:px-8 md:py-4 md:text-[17px]"
              >
                View Live Project
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
// ==========================================================================
// 2. PROJECT CARD
// ==========================================================================
function ProjectCard({ project, index, onOpen }) {
  const [ref, isVisible] = useInView();

  return (
    <article
      ref={ref}
      className={`font-sans overflow-hidden rounded-4xl bg-white p-4 pb-7 shadow-[0_0px_10px_rgba(0,0,0,0.01)] transition-all duration-700 ease-out motion-reduce:transition-none ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div className="h-50 w-full overflow-hidden rounded-[18px] bg-slate-100">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03] motion-reduce:transition-none"
        />
      </div>

      <div className="pt-8">
        <h3 className="mb-2 text-[22px] font-medium leading-tight tracking-[-0.03em] text-black">
          {project.name}
        </h3>

        {/* Truncated Text */}
        <p className="line-clamp-2 max-w-[92%] text-sm leading-snug text-neutral-500">
          {project.description}
        </p>

        {/* See More Link (Apple Blue) */}
        <button
          onClick={() => onOpen(project)}
          className="mt-1 flex cursor-pointer items-center gap-0.5 text-[14px] font-normal text-[#0071e3] transition-opacity hover:opacity-70"
        >
          Read more{' '}
          <span className="-translate-y-[1px] text-[18px] leading-none">›</span>
        </button>

        <ul className="mt-8 mb-2 flex flex-wrap gap-2.5">
          {project.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-[13px] text-neutral-700"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function SeeMoreLink({ onClick }) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`py-6 transition-all duration-700 ease-out motion-reduce:transition-none ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <button
        onClick={onClick}
        className="inline-flex cursor-pointer items-center gap-1 text-sm font-medium text-[#0071e3] transition-opacity hover:opacity-70"
      >
        <span>See All Projects</span>
        <span className="-translate-y-px text-[22px] leading-none">›</span>
      </button>
    </div>
  );
}

const featuredProjects = projects.filter((p) => p.featured);

// ==========================================================================
// 3. MAIN PROJECTS COMPONENT
// ==========================================================================
function Projects({ onSeeAll }) {
  // State to track which project is currently open in the modal
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="min-h-screen">
      <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpen={setSelectedProject} // Opens the modal
          />
        ))}
      </div>

      <SeeMoreLink onClick={onSeeAll} />

      {/* The Modal Component */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;
