import Button from '../components/Button';
import { trackClarityEvent } from '../lib/clarityTracking';

function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center  px-6 text-apple-headline sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <h1 className="text-apple-hero md:text-apple-hero-md lg:text-apple-hero-lg font-semibold font-apple-display pb-3">
          Dieter Banaag
        </h1>

        {/* <p className="mb-3 font-display text-xl font-medium tracking-[-0.01em] text-apple-body sm:text-2xl">
          Software Engineer
        </p> */}
        {/* <div className="text-4xl font-extralight">Hello</div> */}

        <p className="text-apple-hero-sub md:text-apple-hero-sub-md lg:text-apple-hero-sub-lg font-apple-display font-normal max-w-60 md:max-w-75 lg:max-w-87.5">
          Software engineer with full-stack, design, and product experience
          across the full development lifecycle.
        </p>

        <div className="mt-8 flex  gap-4 sm:flex-row">
          <Button
            filled={false}
            white
            href="#skills"
            onClick={() => trackClarityEvent('hero_learn_more_click')}
          >
            Learn More
          </Button>
          <Button
            filled
            white={true}
            href="#contact"
            onClick={() => trackClarityEvent('hero_get_in_touch_click')}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
