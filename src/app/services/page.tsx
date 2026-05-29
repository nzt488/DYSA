import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

const services = [
  {
    title: "CAD Automation",
    metrics: "Reduce drafting effort by up to 80%",
    items: ["Automated drafting", "Drawing generation", "Workflow optimization", "ROI-driven automation"]
  },
  {
    title: "SolidWorks Automation",
    metrics: "Accelerate design generation by up to 70%",
    items: ["Macros", "Parametric systems", "BOM generation", "Design automation"]
  },
  {
    title: "AutoCAD Solutions",
    metrics: "Increase throughput significantly",
    items: ["Custom plugins", "Custom workflows", "Batch processing", "Engineering productivity"]
  },
  {
    title: "Web Development",
    metrics: "Increase operational visibility",
    items: ["Enterprise applications", "Internal platforms", "Dashboards", "Portals"]
  },
  {
    title: "API Integration",
    metrics: "Improve workflow efficiency by up to 60%",
    items: ["System connectivity", "Enterprise interoperability", "Workflow synchronization"]
  },
  {
    title: "AI Solutions",
    metrics: "Next-gen operational efficiency",
    items: ["Engineering intelligence", "Workflow automation", "AI-assisted systems"]
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 bg-primary text-white min-h-screen overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeUp className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Engineering <span className="text-accent">Capabilities</span>
          </h1>
          <p className="text-xl text-support leading-relaxed">
            We provide comprehensive engineering automation and custom software development services designed for enterprise scale.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, i) => (
            <StaggerItem key={i}>
              <div className="bg-secondary p-10 rounded border border-white/5 hover:border-accent/30 transition-all hover:-translate-y-1 hover:shadow-xl h-full">
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-accent font-semibold mb-8">{service.metrics}</p>
                <ul className="space-y-4">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start group">
                      <span className="text-accent mr-3 group-hover:translate-x-1 transition-transform">▹</span>
                      <span className="text-support group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp>
          <div className="bg-accent text-primary p-12 rounded flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-3xl rounded-full mix-blend-overlay"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-2">Need a custom solution?</h3>
              <p className="text-lg opacity-90">Let's discuss how we can automate your specific workflow.</p>
            </div>
            <Link href="/contact" className="relative z-10 mt-6 md:mt-0 px-8 py-4 bg-primary text-white font-bold rounded hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg">
              Book Consultation
            </Link>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
