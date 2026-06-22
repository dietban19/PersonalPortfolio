import { useEffect, useState } from 'react';

function renderSection(section, idx) {
  switch (section.type) {
    case 'heading':
      return (
        <h2
          key={idx}
          className="mt-14 mb-4 font-display text-2xl font-semibold tracking-tight text-black sm:text-3xl"
        >
          {section.content}
        </h2>
      );

    case 'paragraph':
      return (
        <p
          key={idx}
          className="mb-5 font-sans text-[17px] leading-[1.75] text-neutral-600"
        >
          {section.content}
        </p>
      );

    case 'image':
      return (
        <figure key={idx} className="my-12">
          <div className="overflow-hidden rounded-2xl bg-neutral-100">
            <img
              src={section.src}
              alt={section.caption}
              className="w-full object-cover"
            />
          </div>
          {section.caption && (
            <figcaption className="mt-3 text-center text-sm text-neutral-400">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    case 'image-pair':
      return (
        <div key={idx} className="my-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {section.images.map((img, i) => (
            <figure key={i}>
              <div className="overflow-hidden rounded-2xl bg-neutral-100">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full object-cover"
                />
              </div>
              {img.caption && (
                <figcaption className="mt-2 text-center text-sm text-neutral-400">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      );

    case 'stack':
      return (
        <div key={idx} className="my-8 flex flex-col gap-3">
          {section.items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-1 rounded-2xl bg-white p-5 sm:flex-row sm:items-start sm:gap-6"
            >
              <div className="w-28 shrink-0">
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  {item.label}
                </span>
                <p className="mt-1 text-sm font-semibold text-black">
                  {item.tech}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-neutral-500">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      );

    case 'feature-list':
      return (
        <div key={idx} className="my-8 flex flex-col gap-4">
          {section.items.map((item, i) => (
            <div key={i} className="rounded-2xl bg-white p-5">
              <h4 className="mb-1.5 font-display text-base font-semibold text-black">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-neutral-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

function ProjectDetail({ project, onClose }) {
  const [mounted, setMounted] = useState(false);
  const { article } = project;

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    setMounted(false);
    setTimeout(onClose, 380);
  };

  return (
    <div
      className={`fixed inset-0 z-60 flex flex-col bg-secondary transition-all duration-400 ease-out motion-reduce:transition-none ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      {/* Sticky nav bar */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-200/80 bg-secondary/90 px-6 py-4 backdrop-blur-xl sm:px-12 lg:px-20">
        <button
          onClick={handleClose}
          className="inline-flex items-center gap-1 text-sm font-medium text-[#0071e3] transition-opacity hover:opacity-70"
          aria-label="Back to all projects"
        >
          <span className="text-[20px] leading-none">‹</span>
          All Projects
        </button>

        <span className="font-display text-sm font-semibold text-black">
          {project.name}
        </span>

        <div className="w-24" />
      </div>

      {/* Scrollable article */}
      <div className="flex-1 overflow-y-auto">
        {/* Hero image */}
        <div
          className={`w-full overflow-hidden bg-neutral-200 transition-all duration-600 ease-out motion-reduce:transition-none ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={article.heroImage}
            alt={`${project.name} hero`}
            className="w-full object-cover"
            style={{ maxHeight: '60vh' }}
          />
        </div>

        {/* Article body */}
        <div
          className={`mx-auto max-w-2xl px-6 pt-12 pb-32 transition-all duration-600 delay-100 ease-out motion-reduce:transition-none sm:px-8 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* Meta row */}
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-500">
              {project.year}
            </span>
            <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-500">
              {article.role}
            </span>
            <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-500">
              {article.timeline}
            </span>
            <span className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-500">
              {article.team}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-black sm:text-5xl">
            {project.name}
          </h1>

          {/* Skill tags */}
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full bg-neutral-900 px-3 py-1 text-[12px] font-medium text-white"
              >
                {skill}
              </li>
            ))}
          </ul>

          {/* Divider */}
          <hr className="my-8 border-neutral-200" />

          {/* Intro paragraph */}
          <p className="font-sans text-[18px] font-light leading-[1.8] text-neutral-700">
            {article.intro}
          </p>

          {/* Article sections */}
          <div className="mt-4">
            {article.sections.map((section, idx) =>
              renderSection(section, idx),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
