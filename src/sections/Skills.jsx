import React from 'react';
import { Icon } from '@iconify/react';

function Skills() {
  const skills = [
    {
      type: 'Languages',
      list: [
        { name: 'Java', icon: 'devicon:java' },
        { name: 'Python', icon: 'devicon:python' },
        { name: 'C/C++', icon: 'devicon:cplusplus' },
        { name: 'SQL', icon: 'mdi:database' },
        { name: 'JavaScript/TypeScript', icon: 'logos:javascript' },
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
      {/* Outer grid for the skill categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group) => (
          <section key={group.type} className="">
            <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
              {group.type}
            </h3>

            {/* Inner flex layout to hold the badges wrap safely on small screens */}
            <div className="flex flex-wrap gap-2">
              {group.list.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border border-slate-100 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  <Icon icon={skill.icon} className="w-5 h-5 flex-shrink-0" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Skills;
