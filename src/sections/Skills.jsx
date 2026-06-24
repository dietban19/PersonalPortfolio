import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';

function useInView(options = {}) {
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
        ...options,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
}
//     dark:border-slate-800  dark:text-slate-100
//  //  dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700
function SkillGroup({ group, index }) {
  const [ref, isVisible] = useInView();

  return (
    <section
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{
        transitionDelay: `${index * 90}ms`,
      }}
    >
      <h3
        className="text-lg font-semibold mb-4 text-slate-800 
 border-b
       border-slate-100 
       pb-2"
      >
        {group.type}
      </h3>

      <ul className="flex flex-wrap gap-2">
        {group.list.map((skill) => (
          <li
            key={skill.name}
            tabIndex={0}
            aria-label={skill.name}
            aria-describedby={`skill-tooltip-${skill.name}`}
            className="skill-card group relative flex items-center gap-2 rounded-lg border border-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 focus:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sf-blue"
          >
            <Icon
              icon={skill.icon}
              aria-hidden="true"
              className="h-6 w-6 shrink-0"
            />

            <span
              id={`skill-tooltip-${skill.name}`}
              role="tooltip"
              className="pointer-events-none absolute left-0 top-full z-50 mt-2 rounded bg-slate-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition group-hover:opacity-100 group-focus:opacity-100"
            >
              {skill.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Skills() {
  const skills = [
    {
      type: 'Languages',
      list: [
        { name: 'Java', icon: 'devicon:java' },
        { name: 'Python', icon: 'devicon:python' },
        { name: 'C', icon: 'devicon:c' },
        { name: 'C++', icon: 'devicon:cplusplus' },
        { name: 'SQL', icon: 'mdi:database' },
        { name: 'JavaScript', icon: 'logos:javascript' },
        { name: 'TypeScript', icon: 'logos:typescript' },

        { name: 'HTML/CSS', icon: 'devicon:html5' },
      ],
    },
    {
      type: 'Frameworks & UI',
      list: [
        { name: 'React', icon: 'devicon:react' },
        { name: 'Next.js', icon: 'devicon:nextjs' },
        { name: 'Node.js', icon: 'devicon:nodejs' },
        { name: 'Tailwind', icon: 'devicon:tailwindcss' },
        { name: 'Shadcn/ui', icon: 'simple-icons:shadcnui' },
        { name: 'Material-UI', icon: 'devicon:materialui' },
        { name: 'Sass', icon: 'devicon:sass' },
        { name: 'JUnit', icon: 'devicon:junit' },
      ],
    },
    {
      type: 'Cloud & Tools',
      list: [
        { name: 'AWS', icon: 'devicon:amazonwebservices-wordmark' },
        { name: 'Google Cloud', icon: 'devicon:googlecloud' },

        { name: 'Docker', icon: 'devicon:docker' },
        { name: 'Git', icon: 'devicon:git' },
        { name: 'Firebase', icon: 'devicon:firebase' },
        { name: 'Power BI', icon: 'simple-icons:powerbi' },
        { name: 'VS Code', icon: 'devicon:vscode' },
        { name: 'UNIX', icon: 'mdi:console-line' },
      ],
    },
    {
      type: 'Databases',
      list: [
        { name: 'MySQL', icon: 'devicon:mysql' },
        { name: 'PostgreSQL', icon: 'devicon:postgresql' },
        { name: 'Supabase', icon: 'devicon:supabase' },
        { name: 'MongoDB', icon: 'devicon:mongodb' },
      ],
    },
    {
      type: 'Libraries',
      list: [
        { name: 'pandas', icon: 'devicon:pandas' },
        { name: 'NumPy', icon: 'devicon:numpy' },
        { name: 'scikit-learn', icon: 'devicon:scikitlearn' },
      ],
    },
    {
      type: 'Other',
      list: [
        { name: 'ArcGIS', icon: 'simple-icons:arcgis' },
        { name: 'Three.js', icon: 'devicon:threejs' },
        { name: 'WebAssembly', icon: 'simple-icons:webassembly' },
        { name: 'UML/EER Modeling', icon: 'mdi:chart-tree' },
      ],
    },
  ];

  return (
    <div className="font-display max-w-6xl mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, index) => (
          <SkillGroup key={group.type} group={group} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
