import React from 'react';

function Navbar() {
  const nav = [
    { title: 'Home' },
    { title: 'Projects' },
    { title: 'About' },
    { title: 'Contact' },
  ];
  return (
    <header
      className="fixed top-3 left-1/2 -translate-x-1/2 z-30
        flex items-center gap-2 rounded-full
        bg-gradient-to-b from-white/30 to-black/20
        backdrop-blur-xs backdrop-saturate-150
        border border-white/30
        shadow-[0_8px_32px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.4)]
        w-[calc(100%-1rem)] max-w-3xl sm:w-auto justify-between px-3 py-2 sm:px-6"
    >
      <span className="text-sm font-semibold text-gray-800">D</span>
      <nav className="flex items-center gap-1 overflow-x-auto whitespace-nowrap">
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
    </header>
  );
}

export default Navbar;
