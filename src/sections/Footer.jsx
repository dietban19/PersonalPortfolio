import links from '../data/links';

const nav = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const social = [
  { label: 'GitHub', href: links.github },
  { label: 'LinkedIn', href: links.linkedin },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black px-6 pb-10 pt-12 sm:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Top row */}
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {/* Identity */}
          <div className="max-w-xs">
            <p className="font-display text-base font-semibold text-white">
              Dieter Banaag
            </p>
            <p className="mt-1 text-sm text-white/50">Software Engineer</p>
          </div>

          {/* Links columns */}
          <div className="flex flex-wrap gap-12 sm:gap-16">
            {/* Navigation */}
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white/30">
                Navigate
              </p>
              <ul className="flex flex-col gap-2.5">
                {nav.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-white/30">
                Connect
              </p>
              <ul className="flex flex-col gap-2.5">
                {social.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${links.email}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/10" />

        {/* Bottom row */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-white/30">
            Copyright &copy; {year} Dieter Banaag. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
