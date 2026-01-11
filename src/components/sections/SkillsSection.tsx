import { Code, Database, Server, Terminal, Cpu, Wrench } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionWrapper from "@/components/SectionWrapper";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "from-indigo to-purple",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-purple to-cyan",
    skills: ["Node.js", "Express.js", "JWT Authentication", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-cyan to-indigo",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Languages",
    icon: Terminal,
    color: "from-indigo to-cyan",
    skills: ["Python", "JavaScript", "C++", "SQL"],
  },
  {
    title: "Core CS",
    icon: Cpu,
    color: "from-purple to-indigo",
    skills: ["DSA", "DBMS", "Operating Systems", "OOPs"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "from-cyan to-purple",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" className="bg-secondary/30">
      {/* Section Header */}
      <ScrollReveal className="text-center mb-16">
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle mx-auto">Technologies and tools I use to bring ideas to life</p>
      </ScrollReveal>

      {/* Skills Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <ScrollReveal key={category.title} animation="scale" delay={index * 100}>
            <div className="glass-card p-6 h-full group hover:glow transition-all duration-500">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Additional Skills Showcase */}
      <ScrollReveal delay={600} className="mt-16">
        <div className="glass-card p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">
            Always <span className="gradient-text">Learning</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm constantly expanding my skill set and staying updated with the latest technologies. Currently exploring
            advanced React patterns, microservices architecture, and cloud technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["TypeScript", "Next.js", "Docker", "AWS", "GraphQL"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium rounded-full border border-dashed border-muted-foreground/50 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
};

export default SkillsSection;
