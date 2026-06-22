import React from 'react';

function Section({ children, id, title, header, subtext, bgColor }) {
  return (
    <section
      id={id}
      className={`lg:px-16 px-4 sm:px-10 py-8 sm:py-28 lg:py-32 ${bgColor}`}
    >
      <div className="text-sf-blue  font-display text-xl font-bold">
        {title}
      </div>
      <div
        className={`text-3xl sm:text-5xl font-display font-bold ${bgColor === 'bg-black' ? 'text-white' : 'text-black'} mt-2`}
      >
        {header}
      </div>
      <p
        className={`font-display text-xl mt-2 max-w-2xl ${bgColor === 'bg-black' ? 'text-white' : 'text-black'}`}
      >
        {subtext}
      </p>

      <div className="pt-4">{children}</div>
    </section>
  );
}

export default Section;
