import { useState } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import AllProjects from './sections/AllProjects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import ProjectDetail from './sections/ProjectDetail';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import WorkExperience from './sections/WorkExperience';

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const sections = [
    {
      id: 'skills',
      title: 'Skills',
      header: 'Tools and Technologies I use to build software.',
      subtext:
        'From full-stack development to automation and internal tools, I work across the technologies needed to build end-to-end solutions',
      bgColor: 'bg-white',
      component: <Skills />,
      padding: true,
    },
    {
      id: 'projects',
      title: 'Projects',
      header: 'Selected Projects',
      subtext:
        'A few projects that reflect my work across full-stack development, automation, and internal tools.',
      bgColor: 'bg-secondary',
      padding: true,
      component: (
        <Projects
          onSeeAll={() => setShowAllProjects(true)}
          onOpenProject={setSelectedProject}
        />
      ),
    },
    {
      id: 'experience',
      title: 'Career Overview',
      header: 'Work Experience',
      subtext:
        'A track record of building software solutions, improving processes, and delivering real impact',
      bgColor: 'bg-black',
      component: <WorkExperience />,
      padding: false,
    },
    // {
    //   id: 'contact',
    //   title: '',
    //   header: '',
    //   subtext: '',
    //   bgColor: 'bg-secondary',
    //   component: <Contact />,
    // },
  ];

  return (
    <main className="relative mx-auto min-h-screen w-full sm:pt-28 bg-black">
      <Navbar />
      <div>
        <section
          id="home"
          className="h-screen flex items-center justify-center"
        >
          <Hero />
        </section>
        {sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            title={section.title}
            header={section.header}
            subtext={section.subtext}
            bgColor={section.bgColor}
            padding={section?.padding}
          >
            {section.component}
          </Section>
        ))}
        <section
          id="contact"
          className="h-screen flex items-center justify-center bg-white"
        >
          <Contact />
        </section>
      </div>
      <Footer />

      {showAllProjects && (
        <AllProjects onClose={() => setShowAllProjects(false)} />
      )}

      {selectedProject && !showAllProjects && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  );
}

export default App;
