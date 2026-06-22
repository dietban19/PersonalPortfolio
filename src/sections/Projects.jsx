import React from 'react';

function Projects() {
  const projects = [
    {
      name: 'Travel Planner',
      description:
        'A collaborative full-stack app for planning trips, managing itineraries, and organizing travel details in real time.',
      skills: ['React', 'Node.js', 'Firebase'],
      image: 'https://via.placeholder.com/400x200?text=Travel+Planner',
    },
    {
      name: 'E-commerce Platform',
      description:
        'An online marketplace with product listings, shopping cart functionality, and secure payment processing.',
      skills: ['Python', 'Django', 'PostgreSQL', 'Stripe API'],
      image: 'https://via.placeholder.com/400x200?text=E-commerce+Platform',
    },
    {
      name: 'Personal Portfolio',
      description:
        'A responsive portfolio website showcasing projects, skills, and experience with smooth animations.',
      skills: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://via.placeholder.com/400x200?text=Portfolio',
    },
  ];

  return (
    <section className="min-h-screen  ">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="overflow-hidden rounded-[32px] bg-white p-4 pb-7 shadow-[0_0px_10px_rgba(0,0,0,0.01)]"
          >
            <div className="h-[200px] w-full overflow-hidden rounded-[18px] bg-slate-100">
              <img
                src={project.image}
                alt={project.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="pt-5">
              <h3 className="mb-2 text-[22px] font-medium leading-tight tracking-[-0.03em] text-black">
                {project.name}
              </h3>

              <p className="max-w-[92%] text-sm leading-snug text-neutral-500">
                {project.description}
              </p>

              <ul className="mt-12 mb-6 flex flex-wrap gap-2.5">
                {project.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-[13px] text-neutral-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-normal text-[#007aff] hover:underline"
              >
                View Project
                <span className="-translate-y-px text-[22px] leading-none">
                  ›
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="py-6  ">
        <div className="inline-flex items-center gap-1 text-sm font-normal text-[#007aff] hover:underline">
          <span className="text-sf-blue">See More</span>
          <span className="-translate-y-px text-[22px] leading-none">›</span>
        </div>
      </div>
    </section>
  );
}

export default Projects;
