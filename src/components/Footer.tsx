const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-3 border-textMain">
      <div className="section-padding py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-6">
            <h3 className="text-display-sm font-sans font-bold uppercase text-textMain tracking-tight mb-6">
              HEESH
            </h3>
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-textDim">
              CREATIVE STUDIO — ALGIERS, DZ
            </p>
          </div>

          <div className="md:col-span-3">
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-textDim block mb-4">CONNECT</span>
            <div className="flex flex-col gap-2">
              <a
                href="https://instagram.com/heesh_visuals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-sans tracking-[0.15em] uppercase text-textMuted hover:text-textMain transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://behance.net/hichammanseur1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-sans tracking-[0.15em] uppercase text-textMuted hover:text-textMain transition-colors duration-300"
              >
                Behance
              </a>
              <a
                href="https://www.facebook.com/izan.massi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-sans tracking-[0.15em] uppercase text-textMuted hover:text-textMain transition-colors duration-300"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-textDim block mb-4">INFO</span>
            <div className="flex flex-col gap-2 text-sm font-sans tracking-[0.15em] uppercase text-textMuted">
              <span>LAT 36.7538°</span>
              <span>LNG 3.0588°</span>
              <span>STATUS: AVAILABLE</span>
            </div>
          </div>
        </div>

        <div className="diagonal-divider mt-8 md:mt-12 mb-4" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-textDim">
            &copy; {currentYear} HEESH VISUALS — ALL RIGHTS RESERVED
          </p>
          <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-textDim">
            DESIGN & CODE BY HEESH
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
