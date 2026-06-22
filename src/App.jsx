import Navbar from './components/Navbar';
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

function App() {
  return (
    <main className="relative mx-auto min-h-screen w-full max-w-6xl px-4 pb-16 pt-24 sm:px-10 sm:pt-28 lg:px-16 bg-black">
      <Navbar />
      <div>
        <section id="home" className="scroll-mt-28 py-8 sm:py-10">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-28 py-8 sm:py-10">
          <Skills />
        </section>
        <section id="projects" className="scroll-mt-28 py-8 sm:py-10">
          <Projects />
        </section>
        <section className="scroll-mt-28 py-8 sm:py-10">
          <WorkExperience />
        </section>
        <section id="contact" className="scroll-mt-28 py-8 sm:py-10">
          <Contact />
        </section>
      </div>
    </main>
  );
}

export default App;
