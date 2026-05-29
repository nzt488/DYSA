import { TechEcosystem } from "@/components/TechEcosystem";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

export default function TechnologyPage() {
  return (
    <div className="pt-32 pb-20 bg-primary text-white min-h-screen overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeUp className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Intelligent <span className="text-accent">Ecosystem</span>
          </h1>
          <p className="text-xl text-support leading-relaxed">
            Our technology stack is purpose-built to bridge the gap between heavy engineering software and modern enterprise web platforms.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <TechEcosystem />
        </FadeUp>

        <StaggerContainer className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { category: "Engineering CAD", items: ["AutoCAD", "SolidWorks", "Revit", "Inventor"] },
            { category: "Backend & APIs", items: ["Python", "C# / .NET", "Node.js", "REST APIs"] },
            { category: "Web & Enterprise", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
            { category: "Data & AI", items: ["PostgreSQL", "SQL Server", "OpenAI", "Azure / AWS"] },
          ].map((stack, i) => (
            <StaggerItem key={i}>
              <div className="p-8 bg-secondary border border-white/5 rounded hover:border-accent/30 transition-colors h-full">
                <h3 className="text-xl font-bold text-accent mb-6">{stack.category}</h3>
                <ul className="space-y-3">
                  {stack.items.map((item, j) => (
                    <li key={j} className="flex items-center text-support group">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                      <span className="group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
