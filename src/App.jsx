import Navbar from './components/Navbar';
import Section from './components/Section';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import WorkExperience from './sections/WorkExperience';

const projects = [
  {
    title: 'Product Design System',
    description:
      'Built reusable UI foundations and documentation to speed up shipping across teams.',
  },
  {
    title: 'Ecommerce Experience',
    description:
      'Designed and developed a conversion-focused storefront with fast performance and polished UX.',
  },
  {
    title: 'Portfolio & Brand Site',
    description:
      'Crafted a lightweight personal site with responsive interactions and clean visual hierarchy.',
  },
];

const sections = [
  {
    id: 'about',
    title: 'Skills',
    header: 'Tools and Technologies I use to build software.',
    subtext:
      'From full-stack development to automation and internal tools, I work across the technologies needed to build end-to-end solutions',
    bgColor: 'bg-white',
    component: <Skills />,
  },
  {
    id: 'projects',
    title: 'Projects',
    header: 'Selected Projects',
    subtext:
      'A few projects tha reflect my work across full-stack development, automation, and internal tools.',
    bgColor: 'bg-secondary',

    component: <Projects />,
  },
  {
    id: 'experience',
    title: 'Career Overview',
    header: 'Work Experience',
    subtext:
      'A track record of building software solutions, improving processes, and delivering real impact',
    bgColor: 'bg-black',
    component: <WorkExperience />,
  },
  {
    id: 'contact',
    title: 'Contact',
    header: 'Get in Touch',
    subtext:
      'Feel free to reach out for collaborations or just a friendly chat!',
    bgColor: 'bg-secondary',
    component: <Contact />,
  },
];

function App() {
  return (
    <main className="relative mx-auto min-h-screen w-full max-w-6xl pb-16   sm:pt-28  bg-black">
      <Navbar />
      <div>
        <section
          id="home"
          className="h-screen  flex items-center justify-center"
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
          >
            {section.component}
          </Section>
        ))}
      </div>
    </main>
  );
}

export default App;
