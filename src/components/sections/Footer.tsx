import { Heart, Download, Github, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left - Branding */}
          <div className="text-center md:text-left">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-2xl font-bold font-display gradient-text inline-block mb-2"
            >
              Navdeep Kumar
            </a>
            <p className="text-sm text-muted-foreground">
              Full Stack MERN Developer
            </p>
          </div>

          {/* Center - Resume Download */}
          <a
            href="/Portfolio/Navdeep_Kumar_Full_Stack_Developer_Resume.pdf"
            download
            className="btn-outline text-sm px-6 py-3"
          >
            <Download size={16} className="mr-2" />
            Download Resume
          </a>

          {/* Right - Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Navdeep8539"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon w-10 h-10"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/navdeep-kumar-858407271"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon w-10 h-10"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p className="flex items-center gap-1">
            Designed & Built with <Heart size={14} className="text-red-500 fill-red-500" /> by Navdeep Kumar
          </p>
          <p>© {currentYear} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
