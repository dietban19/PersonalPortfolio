import React from 'react';
import FluidContainer from './Fluids/FluidContainer';

function Section({
  children,
  id,
  title,
  header,
  subtext,
  bgColor,
  padding = true,
  fluids = false,
}) {
  const isDark = bgColor === 'bg-black';
  if (fluids)
    return (
      <FluidContainer>
        <section
          id={id}
          className={`
        px-6 py-12
        sm:px-6 sm:py-20
        md:px-12 md:py-24
        lg:px-28 lg:py-32
        xl:px-40 xl:py-40
        2xl:px-56 2xl:py-48
      `}
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="font-apple-display text-[21px]/[1.1904761905] font-semibold  tracking-[0.011em] text-sf-blue sm:text-2xl mb-[0.4em] block md:text-[24px]/1.1666666667 md:tracking-[0.009em] lg:text-[28px]/1.1428571429 lg:tracking-[0.007em]">
              {title}
            </h2>

            <h3
              className={`
            text-[32px]/[1.125] font-semibold tracking-[0.004em] font-display
            md:text-[48px]/[1.0834933333] md:tracking-[-0.003em]
            lg:text-[64px]/[1.0625] lg:tracking-[-0.009em]
            ${isDark ? 'text-white' : 'text-black'}
          `}
            >
              {header}
            </h3>

            <p
              className={`mt-[0.8em]
            text-[19px]/[1.4211026316] tracking-[0.012em] font-normal font-display
            md:text-[21px]/[1.1904761905] md:tracking-[0.011em] max-w-[60ch]
            lg:text-[24px]/[1.1666666667] lg:tracking-[0.009em]
            ${isDark ? 'text-white/90' : 'text-black/80'}
          `}
            >
              {subtext}
            </p>

            <div className={padding ? 'pt-8 sm:pt-12 lg:pt-16' : ''}>
              {children}
            </div>
          </div>
        </section>
      </FluidContainer>
    );
  else
    return (
      <section
        id={id}
        className={`
        ${bgColor}
        px-6 py-12
        sm:px-6 sm:py-20
        md:px-12 md:py-24
        lg:px-28 lg:py-32
        xl:px-40 xl:py-40
        2xl:px-56 2xl:py-48
      `}
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="font-apple-display text-[21px]/[1.1904761905] font-semibold  tracking-[0.011em] text-sf-blue sm:text-2xl mb-[0.4em] block md:text-[24px]/1.1666666667 md:tracking-[0.009em] lg:text-[28px]/1.1428571429 lg:tracking-[0.007em]">
            {title}
          </h2>

          <h3
            className={`
            text-[32px]/[1.125] font-semibold tracking-[0.004em] font-display
            md:text-[48px]/[1.0834933333] md:tracking-[-0.003em]
            lg:text-[64px]/[1.0625] lg:tracking-[-0.009em]
            ${isDark ? 'text-white' : 'text-black'}
          `}
          >
            {header}
          </h3>

          <p
            className={`mt-[0.8em]
            text-[19px]/[1.4211026316] tracking-[0.012em] font-normal font-display
            md:text-[21px]/[1.1904761905] md:tracking-[0.011em] max-w-[60ch]
            lg:text-[24px]/[1.1666666667] lg:tracking-[0.009em]
            ${isDark ? 'text-white/90' : 'text-black/80'}
          `}
          >
            {subtext}
          </p>

          <div className={padding ? 'pt-8 sm:pt-12 lg:pt-16' : ''}>
            {children}
          </div>
        </div>
      </section>
    );
}

export default Section;
