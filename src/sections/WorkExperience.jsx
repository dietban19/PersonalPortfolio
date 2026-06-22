import React, { useEffect, useRef, useState } from 'react';

function WorkExperience() {
  const work = [
    {
      company: 'Procter & Gamble',
      position: 'Software Engineer Intern',
      duration: 'Jan 2025 - Aug 2025',
      description: [
        'Built automation workflows using Java, Python, and Selenium, reducing onboarding and offboarding processing time from 20 minutes to 3 minutes per employee.',
        'Automated internal processes, reporting tools, and test coverage improvements to reduce manual work and improve reliability.',
      ],
      img: '/images/p&g.png',
    },
    {
      company: 'Mercedes & Singh',
      position: 'Software Developer Intern',
      duration: 'May 2024 - Dec 2024',
      description: [
        'Built automation workflows using Java, Python, and Selenium, reducing onboarding and offboarding processing time from 20 minutes to 3 minutes per employee.',
        'Automated internal processes, reporting tools, and test coverage improvements to reduce manual work and improve reliability.',
      ],
      img: '/images/mercedes_singh.png',
    },
  ];
  const containerRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Measure the real height of the timeline content (depends on data length).
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setContentHeight(containerRef.current.getBoundingClientRect().height);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Track scroll position and convert it into a 0 -> 1 progress value
  // as the section moves through the viewport.
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();

      // Start the animation once the top of the section is ~20% down the
      // viewport, finish once we've scrolled past its full height.
      const startOffset = window.innerHeight * 0.2;
      const raw = (startOffset - top) / height;
      const clamped = Math.min(Math.max(raw, 0), 1);
      setScrollProgress(clamped);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [contentHeight]);
  return (
    <section className="">
      {/* <div className="flex justify-start pt-10 md:pt-40 md:gap-10"></div> */}
      <div
        ref={containerRef}
        className="relative max-w-7xl mx-auto pb-20 text-white "
      >
        {work.map((job) => (
          <article
            key={`${job.company}-${job.position}`}
            className="flex justify-center pt-10 md:pt-24 md:gap-10 "
          >
            <div class="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div class=" h-10 absolute md:left-3 w-10 rounded-full  bg-black dark:bg-black flex items-center justify-center">
                <div class="h-4 w-4 rounded-full bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"></div>
              </div>
              <h3 class="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-100 dark:text-neutral-500 ">
                <div class="flex items-center gap-4">
                  <div class="h-12 w-12 rounded-full bg-black border border-neutral-800 flex items-center justify-center">
                    <img
                      alt={`${job.company} logo`}
                      class="h-8 w-8 object-contain"
                      src={job.img}
                    />
                  </div>
                  <span class="text-neutral-200 font-medium text-lg">
                    {job.company}
                  </span>
                </div>
              </h3>
            </div>
            <div class="relative  pr-4 md:pl-4 w-full ">
              <h3 class="md:hidden block text-2xl mb-4 text-left  font-bold text-neutral-100 dark:text-neutral-500 ">
                <div class="flex flex-col items-center gap-4">
                  <div class="h-12 w-12 rounded-full bg-black border border-neutral-800 flex items-center justify-center">
                    <img
                      alt={`${job.company} logo`}
                      class="h-8 w-8 object-contain"
                      src={job.img}
                    />
                  </div>
                  <span class="text-neutral-200 font-medium text-lg">
                    {job.company}
                  </span>
                </div>
              </h3>
              <div class="ml-8 mt-2 mb-8">
                {' '}
                <div class="flex items-start">
                  <div class="timeline-wrapper">
                    <div class="w-1 h-full"></div>
                  </div>
                  <div class="flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                    <div>
                      <h1 class="font-semibold text-3xl">{job.position}</h1>
                      <p class="my-5 text-white-50">{job.duration}</p>
                      <ul class="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                        {job.description.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>{' '}
            </div>
          </article>
        ))}
        <div
          class="absolute md:left-8  top-0 overflow-hidden w-[2px]  from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          style={{ height: contentHeight }}
        >
          <div
            class="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            style={{ height: contentHeight * scrollProgress }}
          ></div>
        </div>
        {/* {work.map((job) => (
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
        ))} */}
      </div>
    </section>
  );
}

export default WorkExperience;
