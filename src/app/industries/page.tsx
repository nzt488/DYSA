import { FadeUp, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

const industries = [
  {
    name: "Manufacturing",
    challenge: "Manual engineering documentation consumed significant resources.",
    solution: "Custom AutoCAD automation platforms integrated with internal ERP systems.",
    outcome: "80% reduction in drafting time.",
  },
  {
    name: "Automotive",
    challenge: "Disconnected software ecosystems created inefficiencies.",
    solution: "API-driven automation pipelines connecting engineering and business systems.",
    outcome: "Reduced manual data transfer by 90%.",
  },
  {
    name: "Aerospace",
    challenge: "Strict compliance and complex assembly processes.",
    solution: "Parametric design systems ensuring precise compliance and automated BOM generation.",
    outcome: "Zero-defect part generation and enhanced tracking.",
  },
  {
    name: "Architecture",
    challenge: "Resource-intensive review and validation processes.",
    solution: "AI-assisted workflow automation for floorplan analysis.",
    outcome: "Improved review speed and operational efficiency.",
  },
  {
    name: "Construction",
    challenge: "Project visibility and reporting were fragmented.",
    solution: "Centralized web-based analytics platforms and dashboards.",
    outcome: "Real-time project monitoring and improved decision-making.",
  },
  {
    name: "Industrial Equipment",
    challenge: "Repetitive design modifications slowed project delivery.",
    solution: "SolidWorks automation framework for automatic model generation.",
    outcome: "65% increase in engineering productivity.",
  }
];

export default function IndustriesPage() {
  return (
    <div className="pt-32 pb-20 bg-primary text-white min-h-screen overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeUp className="max-w-3xl mb-24">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Industries <span className="text-accent">Served</span>
          </h1>
          <p className="text-xl text-support leading-relaxed">
            Tailored engineering automation and software solutions for critical industrial sectors.
          </p>
        </FadeUp>

        <StaggerContainer className="space-y-16">
          {industries.map((ind, i) => (
            <StaggerItem key={i}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-white/5 pb-16 last:border-0 group">
                <div className="md:col-span-4">
                  <h2 className="text-4xl font-bold mb-4 group-hover:text-accent transition-colors">{ind.name}</h2>
                </div>
                <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-secondary p-6 rounded hover:bg-white/5 transition-colors">
                    <h4 className="text-sm font-bold text-support uppercase tracking-widest mb-3">Challenge</h4>
                    <p className="text-sm">{ind.challenge}</p>
                  </div>
                  <div className="bg-secondary p-6 rounded hover:bg-white/5 transition-colors relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none"></div>
                    <h4 className="text-sm font-bold text-support uppercase tracking-widest mb-3 relative z-10">DYSA Solution</h4>
                    <p className="text-sm text-accent font-medium relative z-10">{ind.solution}</p>
                  </div>
                  <div className="bg-secondary p-6 rounded border border-accent/20 hover:border-accent/50 transition-colors shadow-[0_0_15px_rgba(0,183,195,0.05)]">
                    <h4 className="text-sm font-bold text-support uppercase tracking-widest mb-3">ROI Outcome</h4>
                    <p className="text-sm font-semibold">{ind.outcome}</p>
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
