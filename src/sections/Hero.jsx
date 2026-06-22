import React from 'react';
import Button from '../components/Button';

function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-apple-bg px-6 text-apple-headline sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <h1 className="text-apple-hero md:text-apple-hero-md lg:text-apple-hero-lg font-semibold font-apple-display pb-2">
          Dieter Banaag
        </h1>

        {/* <p className="mb-3 font-display text-xl font-medium tracking-[-0.01em] text-apple-body sm:text-2xl">
          Software Engineer
        </p> */}
        {/* <div className="text-4xl font-extralight">Hello</div> */}

        <p className="text-apple-hero-sub font-apple-display font-normal max-w-60">
          {/* I'm a software engineer specializing in building exceptional digital
          experiences. Currently, I'm focused on building responsive web
          applications. */}
          A software engineer focused on responsive interfaces, clean front-end
          systems, and details that make products feel effortless.
        </p>

        <div className="mt-8 flex  gap-4 sm:flex-row">
          <Button filled={false} white>
            Learn More
          </Button>
          <Button filled white={true}>
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
