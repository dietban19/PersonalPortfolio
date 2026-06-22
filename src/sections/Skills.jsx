import React from 'react';

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
  return <div>Skills</div>;
}

export default Skills;
