import Link from "next/link";
import { Hero3D } from "@/components/Hero3D";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";
import { InteractiveMetrics } from "@/components/InteractiveMetrics";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Hero3D />
        
        <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center pointer-events-none">
          <FadeUp delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 max-w-4xl drop-shadow-2xl pointer-events-auto">
              Engineering the Future Through <span className="text-accent">Intelligent Automation</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p className="text-lg md:text-xl text-support mb-10 max-w-2xl drop-shadow-lg pointer-events-auto">
              Transforming engineering, manufacturing, and digital systems through advanced automation, software integration, and intelligent solutions.
            </p>
          </FadeUp>
          <FadeUp delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
              <Link href="/contact" className="px-8 py-4 bg-accent text-primary font-bold rounded hover:bg-accent/90 transition-all text-lg hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,183,195,0.3)]">
                Book Consultation
              </Link>
              <Link href="/services" className="px-8 py-4 bg-primary/50 backdrop-blur-md border border-support text-white font-bold rounded hover:bg-white/10 transition-all text-lg hover:scale-105 active:scale-95">
                Explore Capabilities
              </Link>
            </div>
          </FadeUp>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-support opacity-50">
          <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent"></div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-32 bg-secondary text-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp>
                <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Technology Partner</h2>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                  Bridging traditional engineering with modern software systems.
                </h3>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-support text-lg mb-6 leading-relaxed">
                  DYSA creates intelligent systems where CAD software, databases, APIs, cloud infrastructure, AI engines, and enterprise web applications work together seamlessly.
                </p>
                <p className="text-support text-lg leading-relaxed">
                  We eliminate inefficiencies in engineering workflows through intelligent automation and software innovation, empowering organizations to operate faster, smarter, and with greater precision.
                </p>
              </FadeUp>
            </div>
            
            <InteractiveMetrics />
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-32 bg-primary text-white relative z-10">
        <div className="container mx-auto px-6">
          <FadeUp className="text-center mb-20">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Core Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Enterprise Engineering Solutions</h3>
          </FadeUp>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "CAD Automation", desc: "Automated drafting and workflow optimization to drastically reduce engineering effort." },
              { title: "SolidWorks Automation", desc: "Parametric systems, BOM generation, and macros for intelligent design automation." },
              { title: "Web Development", desc: "Scalable enterprise web applications, dashboards, and internal engineering portals." },
              { title: "AutoCAD Development", desc: "Custom plugins, batch processing, and dedicated workflows for peak productivity." },
              { title: "API Integration", desc: "Seamless interoperability between CAD tools, enterprise databases, and cloud systems." },
              { title: "AI Solutions", desc: "AI-assisted workflows and intelligent engineering data analysis." },
            ].map((service, i) => (
              <StaggerItem key={i}>
                <Link href="/services" className="block group p-8 bg-secondary border border-white/5 rounded hover:border-accent/50 transition-all hover:-translate-y-2 h-full shadow-lg hover:shadow-[0_10px_30px_rgba(0,183,195,0.1)]">
                  <h4 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">{service.title}</h4>
                  <p className="text-support leading-relaxed mb-6">{service.desc}</p>
                  <span className="text-sm text-accent uppercase tracking-widest font-semibold flex items-center gap-2">
                    Learn More <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 bg-accent text-primary relative z-10 text-center overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-y-1/2"></div>
        
        <FadeUp className="container mx-auto px-6 max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Ready to Automate Your Engineering Workflows?
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-medium">
            Partner with DYSA to transform engineering processes, integrate complex systems, and build intelligent automation solutions that scale.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="relative group/btn cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-indigo-500 rounded blur opacity-70 group-hover/btn:opacity-100 transition duration-1000 group-hover/btn:duration-200 animate-pulse"></div>
              <Link href="/contact" className="relative block px-8 py-4 bg-primary text-white font-bold rounded transition-all text-lg hover:scale-[1.02] active:scale-95 text-center">
                Book Consultation
              </Link>
            </div>
            <Link href="/contact" className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold rounded hover:bg-primary/10 transition-all text-lg hover:scale-105">
              Contact DYSA
            </Link>
          </div>
        </FadeUp>
      </section>
    </div>
  );
}
