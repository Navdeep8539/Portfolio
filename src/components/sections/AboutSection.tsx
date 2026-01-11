import { GraduationCap, MapPin, Calendar, Heart, Users, Lightbulb, MessageSquare } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SectionWrapper from "@/components/SectionWrapper";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Techno India University, Kolkata",
    period: "2022 – 2024",
    grade: "CGPA: 8.22",
    icon: GraduationCap,
  },
  {
    degree: "B.Sc. Mathematics (Hons)",
    institution: "P K Roy Memorial College, Dhanbad",
    period: "2018 – 2021",
    grade: "CGPA: 7.06",
    icon: GraduationCap,
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "TATA DAV School, Jharia",
    period: "2018",
    grade: "70%",
    icon: GraduationCap,
  },
  {
    degree: "Secondary (10th)",
    institution: "TATA DAV School, Jharia",
    period: "2016",
    grade: "74% (CGPA: 7.8)",
    icon: GraduationCap,
  },
];

const softSkills = [
  { name: "Leadership", icon: Users },
  { name: "Communication", icon: MessageSquare },
  { name: "Team Collaboration", icon: Heart },
  { name: "Adaptability", icon: Lightbulb },
];

const AboutSection = () => {
  return (
    <SectionWrapper id="about" showOrbs>
      {/* Section Header */}
      <ScrollReveal className="text-center mb-16">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle mx-auto">Get to know more about my journey, education, and what drives me</p>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* About Content */}
        <ScrollReveal animation="left" className="space-y-6">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dhanbad, Jharkhand</h3>
                <p className="text-muted-foreground text-sm">India</p>
              </div>
            </div>

            <p className="text-foreground/90 leading-relaxed mb-6">
              I am a passionate <span className="text-primary font-semibold">Full Stack MERN Developer</span> with a
              Master's degree in Computer Applications (MCA). I enjoy building responsive, scalable web applications and
              solving real-world problems using modern technologies.
            </p>

            <p className="text-foreground/90 leading-relaxed mb-6">
              With a strong foundation in <span className="text-cyan font-semibold">Data Structures</span>,{" "}
              <span className="text-cyan font-semibold">DBMS</span>,{" "}
              <span className="text-cyan font-semibold">Operating Systems</span>, and{" "}
              <span className="text-cyan font-semibold">Object-Oriented Programming</span>, I bring both theoretical
              knowledge and practical skills to every project.
            </p>

            {/* Soft Skills */}
            <div className="pt-4 border-t border-border">
              <h4 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Soft Skills</h4>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <div key={skill.name} className="skill-badge">
                    <skill.icon size={16} className="text-primary" />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hobbies */}
          <div className="glass-card p-6">
            <h4 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
              Hobbies & Interests
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Development", "Learning New Technologies", "Community Engagement", "Photography"].map((hobby) => (
                <span key={hobby} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Education Timeline */}
        <ScrollReveal animation="right">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary" />
            Education
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary via-purple to-cyan" />

            {/* Timeline Items */}
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-2 top-2 timeline-dot" />

                  <div className="glass-card p-5 hover:glow transition-all duration-300">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                    <h4 className="font-bold text-lg mb-1">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
