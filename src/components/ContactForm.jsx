import { useEffect, useState } from 'react';
import { trackClarityEvent } from '../lib/clarityTracking';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function ContactForm({ onClose }) {
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult('Sending...');
    trackClarityEvent('contact_submit_start');
    const formData = new FormData(event.target);

    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'New portfolio contact message');
    formData.append('from_name', 'Portfolio Contact Form');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        trackClarityEvent('contact_submit_success');
        setResult('Form submitted successfully.');
        event.target.reset();
      } else {
        trackClarityEvent('contact_submit_error');
        setResult(data.message || 'Error. Please try again.');
      }
    } catch {
      trackClarityEvent('contact_submit_error');
      setResult('Error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 py-8 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-form-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-white/60 bg-white/90 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close contact form"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-xl leading-none text-neutral-500 transition hover:bg-neutral-200 hover:text-neutral-900"
        >
          ×
        </button>

        <div className="mb-8 pr-10">
          <p className="mb-2 text-sm font-medium text-sf-blue">Contact Form</p>

          <h3
            id="contact-form-title"
            className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl"
          >
            Send me a message.
          </h3>

          <p className="mt-3 text-base leading-relaxed text-neutral-500">
            Tell me about your project, opportunity, or collaboration idea.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <input
            type="checkbox"
            name="botcheck"
            tabIndex="-1"
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-neutral-700"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              required
              maxLength="80"
              placeholder="Your name"
              className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-base text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-sf-blue focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-neutral-700"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              required
              maxLength="120"
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-base text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-sf-blue focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-neutral-700"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              required
              rows="6"
              maxLength="2000"
              placeholder="Write your message here..."
              className="w-full resize-none rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-base text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-sf-blue focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-sf-blue px-8 py-4 text-base font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>

          {result && (
            <p className="text-center text-sm font-medium text-neutral-600">
              {result}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
