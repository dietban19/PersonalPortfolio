import React from 'react';

function WorkExperience() {
  const work = [
    {
      company: 'Google',
      position: 'Software Engineer',
      duration: '2020-2022',
      description: [
        'Worked on search quality improvements to increase relevance and performance.',
        'Partnered with product, design, and infra teams to ship user-facing features.',
        'Reviewed code and mentored junior engineers.',
      ],
    },
    {
      company: 'Facebook',
      position: 'Frontend Developer',
      duration: '2018-2020',
      description: [
        'Built and maintained core React experiences for web users.',
        'Improved rendering and bundle performance to reduce page load time.',
        'Collaborated with backend teams for reliable end-to-end delivery.',
      ],
    },
    {
      company: 'Amazon',
      position: 'Software Engineering Intern',
      duration: 'Summer 2017',
      description: [
        'Developed internal tooling for data analysis and reporting.',
        'Researched recommendation-quality improvements with the team.',
        'Presented findings and implementation proposals to senior engineers.',
      ],
    },
  ];

  return (
    <section>
      <h2 className="mb-5 text-2xl font-bold text-gray-900 sm:mb-6">
        Work Experience
      </h2>
      <div className="space-y-4 sm:space-y-6">
        {work.map((job) => (
          <article
            key={`${job.company}-${job.position}`}
            className="rounded-2xl border border-gray-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:p-6"
          >
            <div className="mb-2 flex flex-col gap-1 sm:mb-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
                  {job.position}
                </h3>
                <p className="text-sm font-medium text-gray-600 sm:text-base">
                  {job.company}
                </p>
              </div>
              <p className="text-xs font-medium text-gray-500 sm:text-sm">
                {job.duration}
              </p>
            </div>

            <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-gray-700 sm:text-base">
              {job.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
