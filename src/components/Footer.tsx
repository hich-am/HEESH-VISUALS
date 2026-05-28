const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-borderLight">
      <div className="section-padding py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs font-sans tracking-[0.3em] uppercase text-textMuted">
          &copy; {currentYear} HEESH VISUALS
        </p>

        <div className="flex items-center gap-6 text-textMuted">
          <a
            href="https://instagram.com/heesh_visuals"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans tracking-[0.2em] uppercase hover:text-textMain transition-colors duration-300"
          >
            Instagram
          </a>
          <span className="text-textDim text-xs">/</span>
          <a
            href="https://behance.net/hichammanseur1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans tracking-[0.2em] uppercase hover:text-textMain transition-colors duration-300"
          >
            Behance
          </a>
          <span className="text-textDim text-xs">/</span>
          <a
            href="https://www.facebook.com/izan.massi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-sans tracking-[0.2em] uppercase hover:text-textMain transition-colors duration-300"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
