import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nav = [
    { title: 'Home' },
    { title: 'Skills' },
    { title: 'Projects' },
    { title: 'Experience' },

    { title: 'Contact' },
  ];

  return (
    <header className="font-display z-100 flex items-center justify-end sm:fixed sm:left-1/2 sm:top-4 sm:w-auto sm:-translate-x-1/2 sm:gap-2 sm:rounded-full sm:border sm:border-white/15 sm:bg-neutral-950/75 sm:px-6 sm:py-2 sm:text-white sm:shadow-[0_12px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] sm:backdrop-blur-xl sm:backdrop-saturate-150">
      <span className="hidden text-sm font-semibold text-white sm:inline">
        D
      </span>

      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="fixed right-3 top-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-neutral-950/80 text-white shadow-[0_10px_24px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-md transition hover:bg-neutral-900 sm:hidden"
      >
        <span className="sr-only">Menu</span>

        <span className="relative block h-4 w-5">
          <span
            className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition-transform duration-200 ${
              isMenuOpen ? 'translate-y-1.75 rotate-45' : ''
            }`}
          />
          <span
            className={`absolute left-0 top-1.75 h-0.5 w-5 rounded bg-current transition-opacity duration-200 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute left-0 top-3.5 h-0.5 w-5 rounded bg-current transition-transform duration-200 ${
              isMenuOpen ? '-translate-y-1.75 -rotate-45' : ''
            }`}
          />
        </span>
      </button>

      <nav className="hidden items-center gap-1 overflow-x-auto whitespace-nowrap sm:flex ">
        {nav.map((item) => (
          <a
            key={item.title}
            href={`#${item.title.toLowerCase()}`}
            className="rounded-full px-3 py-2 text-sm font-medium text-white/75 transition hover:bg-white/10 hover:text-white"
          >
            {item.title}
          </a>
        ))}
      </nav>

      <button
        type="button"
        aria-hidden={!isMenuOpen}
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 sm:hidden ${
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <nav
        className={`fixed inset-0 z-40 h-dvh w-screen  px-6 pb-10 pt-24 text-white shadow-2xl backdrop-blur-xl transition-transform duration-400 sm:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mx-auto flex h-full w-full max-w-md flex-col  gap-3 ">
          {nav.map((item) => (
            <a
              key={item.title}
              href={`#${item.title.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="block border-b border-neutral-100/20  px-4 py-4 text-lg font-light tracking-wide text-white/90 transition hover:bg-white/10 hover:text-white"
            >
              {item.title}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
