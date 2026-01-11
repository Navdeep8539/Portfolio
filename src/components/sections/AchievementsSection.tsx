import { Trophy, Star, Award, Target } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionWrapper from '@/components/SectionWrapper';

const achievements = [
  {
    icon: Trophy,
    title: 'NIMCET 2022',
    subtitle: 'All India Rank 845',
    description: 'Secured an impressive rank in the National Level MCA Entrance Test conducted by NIT.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Star,
    title: 'HackerRank',
    subtitle: '5⭐ Problem Solving',
    description: 'Achieved 5-star rating in Problem Solving, demonstrating strong algorithmic skills.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Target,
    title: 'Amazon eHackOn',
    subtitle: 'Season 4 Participant',
    description: 'Participated in Amazon\'s prestigious hackathon, competing with developers nationwide.',
    gradient: 'from-indigo to-purple',
  },
];

const AchievementsSection = () => {
  return (
    <SectionWrapper id="achievements" showOrbs>
      {/* Section Header */}
      <ScrollReveal className="text-center mb-16">
        <h2 className="section-title">
          <span className="gradient-text">Achievements</span> & Recognition
        </h2>
        <p className="section-subtitle mx-auto">
          Milestones that showcase my dedication and competitive spirit
        </p>
      </ScrollReveal>

      {/* Achievements Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {achievements.map((achievement, index) => (
          <ScrollReveal key={achievement.title} animation="scale" delay={index * 150}>
            <div className="achievement-badge h-full flex flex-col items-center group">
              {/* Icon Container */}
              <div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <achievement.icon size={40} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <span className="text-primary font-semibold mb-4">{achievement.subtitle}</span>
              <p className="text-muted-foreground text-center text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Stats Section */}
      <ScrollReveal delay={500} className="mt-20">
        <div className="glass-card p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '10+', label: 'Projects Completed' },
              { value: '2+', label: 'Years Learning' },
              { value: '5⭐', label: 'HackerRank Rating' },
              { value: '845', label: 'NIMCET Rank' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
};

export default AchievementsSection;
