import { useState } from 'react';
import ContactForm from '../components/ContactForm';
import links from '../data/links';
import { trackClarityEvent } from '../lib/clarityTracking';

function Contact() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <section className="px-4 py-12 sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center rounded-[3rem] bg-secondary px-8 py-12 text-center text-black shadow-lg sm:px-14 sm:py-16 lg:px-20 lg:py-20">
        <p className="mb-2 text-lg font-bold text-sf-blue sm:text-base md:text-2xl font-sans">
          Contact
        </p>

        <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl font-sans">
          Let&apos;s create something useful.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-xl lg:text-2xl font-display">
          I work across frontend development and UI/UX design, with a focus on
          clean interfaces, thoughtful details, and user-focused experiences.
          I&apos;m open to full-time roles and select collaborations.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-5 font-display">
          <button
            type="button"
            onClick={() => {
              trackClarityEvent('contact_form_open');
              setShowContactForm(true);
            }}
            className="rounded-full bg-sf-blue px-8 py-3 text-base font-medium text-white transition hover:bg-blue-600"
          >
            Contact Me
          </button>

          <a
            href={links.resume}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackClarityEvent('resume_click')}
            className="rounded-full border border-sf-blue px-8 py-3 text-base font-medium text-sf-blue transition hover:bg-blue-50"
          >
            View Resume
          </a>
        </div>
      </div>

      <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-4 pt-8">
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackClarityEvent('github_click_contact')}
          className="inline-flex items-center gap-1 rounded-full border border-neutral-400 px-5 py-2 text-sm font-normal text-neutral-700 transition hover:bg-neutral-100"
        >
          Github
          <span className="-translate-y-px text-[22px] leading-none">›</span>
        </a>

        <a
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackClarityEvent('linkedin_click_contact')}
          className="inline-flex items-center gap-1 rounded-full border border-neutral-400 px-5 py-2 text-sm font-normal text-neutral-700 transition hover:bg-neutral-100"
        >
          LinkedIn
          <span className="-translate-y-px text-[22px] leading-none">›</span>
        </a>
      </div>

      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </section>
  );
}

export default Contact;
