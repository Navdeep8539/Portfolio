import { ExternalLink, Github, Briefcase, Home, Search, Users, Shield, Layout } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionWrapper from '@/components/SectionWrapper';
import jobPortalMockup from '@/assets/job-portal-mockup.png';
import realEstateMockup from '@/assets/real-estate-mockup.png';

const projects = [
  {
    title: 'Job Seeking Application',
    subtitle: 'Full-Stack MERN Job Portal',
    description:
      'A comprehensive job portal platform for job seekers and recruiters with separate dashboards, profile creation, resume management, job posting, application tracking, and advanced search & filtering.',
    image: jobPortalMockup,
    features: [
      { icon: Users, text: 'Separate Seeker & Recruiter Dashboards' },
      { icon: Briefcase, text: 'Job Posting & Application Tracking' },
      { icon: Search, text: 'Advanced Search & Filtering' },
      { icon: Shield, text: 'JWT Authentication' },
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    liveLink: '#',
    githubLink: '#',
    gradient: 'from-indigo via-purple to-indigo',
  },
  {
    title: 'Real Estate Marketplace',
    subtitle: 'Modern Property Listing Platform',
    description:
      'A modern real estate marketplace with property search, advanced filters, detailed listings with images & descriptions, secure authentication, and personalized user profiles.',
    image: realEstateMockup,
    features: [
      { icon: Search, text: 'Property Search with Advanced Filters' },
      { icon: Home, text: 'Detailed Listings with Images' },
      { icon: Shield, text: 'Secure Authentication System' },
      { icon: Layout, text: 'Fully Responsive Design' },
    ],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    liveLink: '#',
    githubLink: '#',
    gradient: 'from-cyan via-purple to-cyan',
  },
];

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" showOrbs>
      {/* Section Header */}
      <ScrollReveal className="text-center mb-16">
        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Showcasing my best work and the technologies behind them
        </p>
      </ScrollReveal>

      {/* Projects */}
      <div className="space-y-20">
        {projects.map((project, index) => (
          <ScrollReveal
            key={project.title}
            animation={index % 2 === 0 ? 'left' : 'right'}
          >
            <div className="project-card overflow-hidden">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Project Image */}
                <div
                  className={`relative h-64 lg:h-auto min-h-[300px] overflow-hidden ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <img 
                    src={project.image} 
                    alt={`${project.title} mockup`}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
                </div>

                {/* Project Content */}
                <div className="p-8 lg:p-10">
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    {project.subtitle}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold mt-2 mb-4">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {project.features.map((feature) => (
                      <div
                        key={feature.text}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <feature.icon size={16} className="text-primary flex-shrink-0" />
                        {feature.text}
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={project.liveLink}
                      className="btn-gradient text-sm px-6 py-3"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Live demo link will be added soon!');
                      }}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="btn-outline text-sm px-6 py-3"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('GitHub link will be added soon!');
                      }}
                    >
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
