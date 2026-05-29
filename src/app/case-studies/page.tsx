import { FadeUp, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

const caseStudies = [
  {
    title: "Manufacturing Workflow Automation",
    industry: "Manufacturing",
    technologies: ["AutoCAD", "Python", "SQL Server"],
    videoId: "dQw4w9WgXcQ", // Placeholder for actual provided youtube videos
    challenge: "Manual engineering documentation consumed significant resources.",
    solution: "Developed a custom AutoCAD automation platform integrated with internal systems.",
    outcome: "80% reduction in drafting time.",
  },
  {
    title: "Parametric Design Generation Platform",
    industry: "Industrial Equipment",
    technologies: ["SolidWorks", "C# / .NET"],
    videoId: "dQw4w9WgXcQ",
    challenge: "Repetitive design modifications slowed project delivery.",
    solution: "Built a SolidWorks automation framework for automatic model generation.",
    outcome: "65% increase in engineering productivity.",
  },
  {
    title: "Engineering Operations Dashboard",
    industry: "Construction",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL"],
    videoId: "dQw4w9WgXcQ",
    challenge: "Project visibility and reporting were fragmented.",
    solution: "Developed a centralized web-based analytics platform.",
    outcome: "Real-time project monitoring and improved decision-making.",
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-32 pb-20 bg-primary text-white min-h-screen overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeUp className="max-w-3xl mb-24">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Case <span className="text-accent">Studies</span>
          </h1>
          <p className="text-xl text-support leading-relaxed">
            A selection of multi-million-dollar engineering automation and enterprise software projects delivered by DYSA.
          </p>
        </FadeUp>

        <StaggerContainer className="space-y-32">
          {caseStudies.map((cs, i) => (
            <StaggerItem key={i}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
                <div className={`aspect-video rounded border border-white/10 overflow-hidden bg-secondary ${i % 2 === 1 ? 'lg:order-2' : ''} shadow-2xl transition-all duration-700 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:scale-[1.02]`}>
                  <iframe
                    className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                    src={`https://www.youtube.com/embed/${cs.videoId}?rel=0`}
                    title={cs.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex gap-3 mb-6">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-accent uppercase tracking-widest">{cs.industry}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 group-hover:text-accent transition-colors">{cs.title}</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-support uppercase tracking-widest mb-2">Challenge</h4>
                      <p className="text-lg leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-support uppercase tracking-widest mb-2">Solution</h4>
                      <p className="text-lg leading-relaxed text-accent">{cs.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-support uppercase tracking-widest mb-2">Outcome</h4>
                      <p className="text-lg font-bold">{cs.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/5">
                    <h4 className="text-sm font-bold text-support uppercase tracking-widest mb-4">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {cs.technologies.map((tech, j) => (
                        <span key={j} className="px-3 py-1 bg-secondary text-xs text-white rounded border border-white/5 hover:border-accent hover:text-accent transition-colors cursor-default">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
