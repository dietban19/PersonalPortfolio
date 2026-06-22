import React, { useEffect, useRef, useState } from 'react';

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
        threshold: 0.2,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

function WorkItem({ job, index }) {
  const [ref, isVisible] = useInView();

  return (
    <article
      ref={ref}
      className={`flex justify-center pt-10 md:pt-24 md:gap-10 transition-all duration-700 ease-out motion-reduce:transition-none ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div className="h-10 absolute md:left-3 w-10 rounded-full bg-black dark:bg-black flex items-center justify-center">
          <div className="h-4 w-4 rounded-full bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2"></div>
        </div>

        <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-100 dark:text-neutral-500">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-black border border-neutral-800 flex items-center justify-center">
              <img
                alt={`${job.company} logo`}
                className="h-8 w-8 object-contain"
                src={job.img}
              />
            </div>

            <span className="text-neutral-200 font-medium text-lg">
              {job.company}
            </span>
          </div>
        </h3>
      </div>

      <div className="relative pr-4 md:pl-4 w-full">
        <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-100 dark:text-neutral-500">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-black border border-neutral-800 flex items-center justify-center">
              <img
                alt={`${job.company} logo`}
                className="h-8 w-8 object-contain"
                src={job.img}
              />
            </div>

            <span className="text-neutral-200 font-medium text-lg">
              {job.company}
            </span>
          </div>
        </h3>

        <div className="ml-8 mt-2 mb-8">
          <div className="flex items-start">
            <div className="timeline-wrapper">
              <div className="w-1 h-full"></div>
            </div>

            <div
              className={`flex xl:gap-20 md:gap-10 gap-5 relative z-20 transition-all duration-700 ease-out motion-reduce:transition-none ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-4'
              }`}
              style={{
                transitionDelay: `${index * 120 + 120}ms`,
              }}
            >
              <div>
                <h1 className="font-semibold text-3xl">{job.position}</h1>

                <p className="my-5 text-white-50">{job.duration}</p>

                <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                  {job.description.map((point, pointIndex) => (
                    <li key={pointIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

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

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();

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
    <section>
      <div
        ref={containerRef}
        className="relative max-w-7xl mx-auto pb-20 text-white pt-20"
      >
        {work.map((job, index) => (
          <WorkItem
            key={`${job.company}-${job.position}`}
            job={job}
            index={index}
          />
        ))}

        <div
          className="absolute md:left-8 top-0 overflow-hidden w-[2px] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          style={{ height: contentHeight }}
        >
          <div
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full transition-[height] duration-150 ease-out motion-reduce:transition-none"
            style={{ height: contentHeight * scrollProgress }}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
