import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-primary text-white min-h-screen overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Hero */}
        <FadeUp className="max-w-4xl mb-24">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Eliminating Inefficiencies Through <span className="text-accent">Intelligent Automation</span>.
          </h1>
          <p className="text-xl text-support leading-relaxed">
            DYSA was founded to eliminate inefficiencies in engineering workflows through intelligent automation and software innovation. We combine engineering expertise with modern software development to create scalable solutions that reduce manual effort, improve accuracy, and accelerate project delivery.
          </p>
        </FadeUp>

        {/* Vision & Mission */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <StaggerItem>
            <div className="p-10 bg-secondary rounded border border-white/5 h-full hover:border-accent/30 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-accent">Our Mission</h3>
              <p className="text-support text-lg leading-relaxed">
                To transform complex engineering processes into intelligent automated systems that drive measurable business outcomes.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="p-10 bg-secondary rounded border border-white/5 h-full hover:border-accent/30 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-accent">Our Vision</h3>
              <p className="text-support text-lg leading-relaxed">
                To become a global leader in engineering automation, intelligent software systems, and industrial digital transformation.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Stats */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "15+", label: "Industries Served" },
            { number: "95%", label: "Client Satisfaction" },
            { number: "5000+", label: "Engineering Hours Saved" },
          ].map((stat, i) => (
            <StaggerItem key={i} className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-white mb-4 group-hover:text-accent transition-colors group-hover:scale-110 inline-block">{stat.number}</div>
              <div className="text-sm text-support group-hover:text-white transition-colors uppercase tracking-widest">{stat.label}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Founder Section */}
        <FadeUp>
          <div className="bg-secondary p-12 rounded border border-white/5 flex flex-col md:flex-row gap-12 items-center hover:border-white/10 transition-colors">
            <div className="w-full md:w-1/3 aspect-square bg-primary rounded relative overflow-hidden flex items-center justify-center border border-white/10 group">
              <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/20 transition-colors z-10"></div>
              <span className="text-support z-20">Founder Image Placeholder</span>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-2">Leadership</h2>
              <h3 className="text-4xl font-bold mb-2">Aryan Sharma</h3>
              <p className="text-lg text-support mb-6">Founder & Lead Automation Engineer</p>
              <p className="text-support leading-relaxed mb-6">
                An engineering automation specialist focused on bridging traditional engineering workflows with modern software systems. Passionate about reducing manual effort through intelligent automation, system integration, and scalable digital solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Engineering Automation", "CAD Systems", "Software Development", "Enterprise Platforms", "AI Integration"].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-primary text-xs text-white rounded border border-white/10 hover:border-accent/50 hover:text-accent transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

      </div>
    </div>
  );
}
