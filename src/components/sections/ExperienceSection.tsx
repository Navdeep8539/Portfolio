import { Briefcase, Calendar, MapPin, Code, Layout, Smartphone } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionWrapper from '@/components/SectionWrapper';

const experience = [
  {
    type: 'internship',
    title: 'Full Stack Web Development',
    company: 'EXIN Consultancy Limited',
    location: 'Kolkata, West Bengal, India · On-site',
    period: 'Aug 2025 – Present',
    description:
      'As a Full-Stack Web Developer, I contribute to the design, development, and maintenance of scalable web applications. My work spans both frontend and backend, involving UI improvements, feature enhancements, and database integrations.',
    highlights: [
      'Developing responsive UIs with React.js, HTML5, CSS3, Tailwind CSS and ensuring cross-device compatibility',
      'Implementing backend features using Node.js, Express.js, and MongoDB, including APIs and data models',
      'Performing UI/UX updates, bug fixes, and major functional enhancements to improve performance',
      'Collaborating with team members through Git/GitHub and agile workflows',
    ],
    projects: [
      'Exin: Implemented UI updates and enhanced core modules',
      'Swapnapurna: Integrated property-related features and optimized backend APIs',
      'Listing Homes: Worked on frontend improvements and backend CRUD functionalities',
    ],
    skills: ['MERN Stack', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'RESTful API Design & Integration'],
    icon: Briefcase,
  },
  {
    type: 'internship',
    title: 'Full Stack Developer',
    company: 'ARDENT COMPUTECH PVT LTD',
    location: 'Kolkata, West Bengal, India · On-site',
    period: 'Jan 2025 – Jun 2025 · 6 months',
    description:
      'As a Full Stack Developer Intern, I contributed to the design and development of scalable web applications using the MERN stack. My work focused on building responsive frontends, robust backends, and seamless database integrations, while collaborating with senior developers, designers, and product managers in an agile environment.',
    highlights: [
      'Developed and maintained full-stack applications with React.js (frontend) and Node.js/Express.js (backend)',
      'Designed RESTful APIs for data exchange and integrated them with MongoDB for efficient storage and retrieval',
      'Built reusable React components, implemented responsive layouts, and ensured cross-browser compatibility',
      'Applied authentication and authorization (JWT/Session) to secure applications',
      'Performed debugging, testing, and performance optimization to enhance user experience',
      'Used Git/GitHub for version control and collaborated via pull requests and code reviews',
    ],
    projects: [
      'Job Portal: Built end-to-end job posting and application features with user authentication and admin dashboard',
      'Real Estate Marketplace: Implemented property listing modules with CRUD operations, image uploads, and analytics dashboard',
    ],
    skills: ['MERN Stack', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'RESTful API Design & Integration', 'JWT Authentication'],
    icon: Briefcase,
  },
  {
    type: 'internship',
    title: 'Frontend Web Developer',
    company: '1Stop.ai',
    location: 'Kolkata, West Bengal, India · Remote',
    period: 'Oct 2023 – Nov 2023 · 2 months',
    description:
      'As a Front-End Developer Intern, I contributed to building responsive, user-friendly web applications while gaining hands-on experience with modern technologies. My role involved designing and developing UI components, integrating APIs, optimizing performance, and collaborating with cross-functional teams to deliver high-quality features.',
    highlights: [
      'Built and maintained responsive UIs using JavaScript (ES6+), HTML5, CSS3, and Tailwind CSS',
      'Integrated RESTful APIs, ensuring smooth data flow between frontend and backend',
      'Followed clean coding practices, used Git/GitHub for version control, and participated in code reviews',
      'Performed debugging, testing, and optimization to improve performance and user experience',
    ],
    projects: [
      'Job Portal: Developed UI for job listings, filters, and real-time API integration',
      'E-Commerce UI: Created product listings, shopping cart, and state management with React Context API',
      'Portfolio Website: Designed and deployed a personal portfolio with responsive layouts',
    ],
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript (ES6+)', 'React.js', 'API Integration'],
    icon: Layout,
  },
];

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience" className="bg-secondary/30">
      {/* Section Header */}
      <ScrollReveal className="text-center mb-16">
        <h2 className="section-title">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <p className="section-subtitle mx-auto">
          My journey through professional development and hands-on industry experience
        </p>
      </ScrollReveal>

      {/* Experience Cards */}
      <div className="max-w-4xl mx-auto space-y-8">
        {experience.map((exp, index) => (
          <ScrollReveal key={index} animation="scale" delay={index * 100}>
            <div className="glass-card overflow-hidden">
              {/* Header Banner */}
              <div className="bg-gradient-to-r from-indigo via-purple to-cyan p-1">
                <div className="bg-card p-6 md:p-8">
                  <div className="flex flex-wrap items-start gap-6">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo to-purple flex items-center justify-center flex-shrink-0 shadow-lg">
                      <exp.icon size={32} className="text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary uppercase">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase size={16} />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 pt-0 md:pt-0">
                <p className="text-foreground/90 leading-relaxed mb-6 mt-6">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Key Responsibilities
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {exp.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Code size={12} className="text-primary" />
                        </div>
                        <span className="text-sm text-foreground/80">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                {exp.projects && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      Key Projects
                    </h4>
                    <div className="space-y-2">
                      {exp.projects.map((project, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded-full bg-cyan/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Layout size={12} className="text-cyan" />
                          </div>
                          <span className="text-sm text-foreground/80">{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Skills Acquired
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="skill-badge text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Additional Info */}
      <ScrollReveal delay={300} className="mt-12">
        <div className="glass-card p-8 text-center max-w-2xl mx-auto">
          <Smartphone size={40} className="mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-bold mb-3">Open to Opportunities</h3>
          <p className="text-muted-foreground">
            I'm actively seeking full-time opportunities as a Full Stack Developer.
            If you're looking for a dedicated developer who is passionate about creating
            exceptional web experiences, let's connect!
          </p>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
};

export default ExperienceSection;
