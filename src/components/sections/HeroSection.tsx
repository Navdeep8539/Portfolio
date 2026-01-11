import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import TypewriterText from "@/components/TypewriterText";
import ScrollReveal from "@/components/ScrollReveal";

const roles = ["Full Stack MERN Developer", "JavaScript Enthusiast", "React Specialist", "MCA Graduate"];

const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="gradient-orb gradient-orb-1 top-20 -left-32" />
      <div className="gradient-orb gradient-orb-2 bottom-20 -right-32" />
      <div className="gradient-orb gradient-orb-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Greeting */}
          <ScrollReveal delay={100}>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 font-medium">Hello, I'm</p>
          </ScrollReveal>

          {/* Name */}
          <ScrollReveal delay={200}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display mb-6 leading-tight">
              <span className="gradient-text">Navdeep Kumar</span>
            </h1>
          </ScrollReveal>

          {/* Animated Role */}
          <ScrollReveal delay={300}>
            <div className="text-xl sm:text-2xl md:text-3xl text-foreground/90 mb-8 h-12 flex items-center justify-center">
              <TypewriterText
                texts={roles}
                speed={80}
                deleteSpeed={40}
                delayBetween={2500}
                className="font-display font-semibold"
              />
            </div>
          </ScrollReveal>

          {/* Tagline */}
          <ScrollReveal delay={400}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              I build scalable, modern web applications with clean UI & robust backend. Passionate about creating
              exceptional digital experiences.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={500}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <button onClick={scrollToProjects} className="btn-gradient group">
                <span>View Projects</span>
                <ArrowDown size={18} className="ml-2 group-hover:translate-y-1 transition-transform" />
              </button>
              <button onClick={scrollToContact} className="btn-outline">
                <Mail size={18} className="mr-2" />
                Contact Me
              </button>
              <a
                href="/Portfolio/Navdeep_Kumar_Full_Stack_Developer_Resume.pdf"
                download
                className="btn-outline flex items-center"
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
            </div>
          </ScrollReveal>

          {/* Social Links */}
          <ScrollReveal delay={600}>
            <div className="flex items-center justify-center gap-4">
              <a href="https://github.com/Navdeep8539" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/navdeep-kumar-858407271" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={22} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
