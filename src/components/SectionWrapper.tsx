import { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  showOrbs?: boolean;
}

const SectionWrapper = ({ id, children, className = '', showOrbs = false }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-32 overflow-hidden ${className}`}
    >
      {showOrbs && (
        <>
          <div className="gradient-orb gradient-orb-1 -top-48 -left-48 opacity-20" />
          <div className="gradient-orb gradient-orb-2 top-1/2 -right-40 opacity-15" />
        </>
      )}
      <div className="container mx-auto px-6 relative z-10">{children}</div>
    </section>
  );
};

export default SectionWrapper;
