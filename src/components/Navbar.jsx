import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nav = [
    { title: 'Home' },
    { title: 'Projects' },
    { title: 'About' },
    { title: 'Contact' },
  ];
  return (
    <header className="z-30 flex items-center justify-end sm:fixed sm:left-1/2 sm:top-3 sm:w-auto sm:-translate-x-1/2 sm:gap-2 sm:rounded-full sm:border sm:border-white/30 sm:bg-linear-to-b sm:from-white/30 sm:to-black/20 sm:px-6 sm:py-2 sm:backdrop-blur-xs sm:backdrop-saturate-150 sm:shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.4)]">
      <span className="hidden text-sm font-semibold text-gray-800 sm:inline">
        D
      </span>

      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="fixed right-3 top-4 z-40 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-linear-to-b from-white/50 to-white/20 text-gray-300 shadow-[0_10px_24px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-md transition hover:from-white/60 hover:to-white/30 sm:hidden"
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

      <nav className="hidden items-center gap-1 overflow-x-auto whitespace-nowrap sm:flex">
        {nav.map((item) => (
          <a
            key={item.title}
            href={`#${item.title.toLowerCase()}`}
            className="rounded-lg px-2 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900 sm:px-3 sm:py-2 sm:text-sm"
          >
            {item.title}
          </a>
        ))}
      </nav>

      {isMenuOpen && (
        <nav className="fixed right-3 top-16 z-40 w-48 rounded-2xl border border-white/30 bg-white/95 p-2 shadow-xl backdrop-blur-md sm:hidden">
          {nav.map((item) => (
            <a
              key={item.title}
              href={`#${item.title.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
            >
              {item.title}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
