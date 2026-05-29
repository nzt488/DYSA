import { FadeUp, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 bg-primary text-white min-h-screen overflow-hidden">
      <div className="container mx-auto px-6">
        
        <FadeUp className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Let's build <span className="text-accent">together.</span>
          </h1>
          <p className="text-xl text-support leading-relaxed">
            Partner with DYSA to transform engineering processes, integrate complex systems, and build intelligent automation solutions that scale.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <FadeUp delay={0.2} className="lg:col-span-2">
            <form className="bg-secondary p-8 md:p-12 rounded border border-white/5 space-y-6 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div className="space-y-2 group">
                  <label className="text-sm font-semibold text-support uppercase tracking-widest group-focus-within:text-accent transition-colors">Full Name</label>
                  <input type="text" className="w-full bg-primary border border-white/10 rounded p-4 text-white focus:border-accent focus:outline-none transition-colors shadow-inner" placeholder="John Doe" />
                </div>
                <div className="space-y-2 group">
                  <label className="text-sm font-semibold text-support uppercase tracking-widest group-focus-within:text-accent transition-colors">Company Name</label>
                  <input type="text" className="w-full bg-primary border border-white/10 rounded p-4 text-white focus:border-accent focus:outline-none transition-colors shadow-inner" placeholder="Acme Engineering" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div className="space-y-2 group">
                  <label className="text-sm font-semibold text-support uppercase tracking-widest group-focus-within:text-accent transition-colors">Email Address</label>
                  <input type="email" className="w-full bg-primary border border-white/10 rounded p-4 text-white focus:border-accent focus:outline-none transition-colors shadow-inner" placeholder="john@acme.com" />
                </div>
                <div className="space-y-2 group">
                  <label className="text-sm font-semibold text-support uppercase tracking-widest group-focus-within:text-accent transition-colors">Phone Number</label>
                  <input type="tel" className="w-full bg-primary border border-white/10 rounded p-4 text-white focus:border-accent focus:outline-none transition-colors shadow-inner" placeholder="+1 (555) 000-0000" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div className="space-y-2 group">
                  <label className="text-sm font-semibold text-support uppercase tracking-widest group-focus-within:text-accent transition-colors">Industry</label>
                  <select className="w-full bg-primary border border-white/10 rounded p-4 text-white focus:border-accent focus:outline-none transition-colors appearance-none shadow-inner">
                    <option value="">Select Industry</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="automotive">Automotive</option>
                    <option value="aerospace">Aerospace</option>
                    <option value="architecture">Architecture</option>
                    <option value="construction">Construction</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2 group">
                  <label className="text-sm font-semibold text-support uppercase tracking-widest group-focus-within:text-accent transition-colors">Service Required</label>
                  <select className="w-full bg-primary border border-white/10 rounded p-4 text-white focus:border-accent focus:outline-none transition-colors appearance-none shadow-inner">
                    <option value="">Select Service</option>
                    <option value="cad">CAD Automation</option>
                    <option value="solidworks">SolidWorks Automation</option>
                    <option value="web">Enterprise Web Development</option>
                    <option value="api">API Integration</option>
                    <option value="ai">AI Solutions</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2 group relative z-10">
                <label className="text-sm font-semibold text-support uppercase tracking-widest group-focus-within:text-accent transition-colors">Project Description</label>
                <textarea rows={4} className="w-full bg-primary border border-white/10 rounded p-4 text-white focus:border-accent focus:outline-none transition-colors resize-none shadow-inner" placeholder="Briefly describe your project requirements..."></textarea>
              </div>
              <button type="submit" className="relative z-10 w-full py-4 bg-accent text-primary font-bold text-lg rounded hover:bg-accent/90 transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_15px_rgba(0,183,195,0.2)]">
                Submit Inquiry
              </button>
            </form>
          </FadeUp>
          
          <StaggerContainer className="space-y-8">
            <StaggerItem>
              <div className="bg-secondary p-8 rounded border border-white/5 hover:border-white/10 transition-colors">
                <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
                <div className="space-y-4 text-support">
                  <p className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                    <span className="text-accent group-hover:scale-125 transition-transform">✆</span> +91 9322486304
                  </p>
                  <p className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer group">
                    <span className="text-accent group-hover:scale-125 transition-transform">✉</span> dysasolution@gmail.com
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem>
              <a href="https://wa.me/919322486304" target="_blank" rel="noopener noreferrer" className="block bg-[#25D366]/5 p-8 rounded border border-[#25D366]/30 hover:bg-[#25D366]/10 transition-all hover:-translate-y-1 group shadow-[0_0_15px_rgba(37,211,102,0.05)]">
                <h3 className="text-xl font-bold mb-2 text-[#25D366] group-hover:scale-[1.02] transition-transform origin-left">WhatsApp Business</h3>
                <p className="text-support text-sm">Message us directly on WhatsApp for a quicker response regarding your enterprise needs.</p>
              </a>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-secondary p-8 rounded border border-white/5 hover:border-white/10 transition-colors">
                <h3 className="text-xl font-bold mb-4">Schedule a Meeting</h3>
                <p className="text-support text-sm mb-6">Book a direct technical consultation with our engineering team.</p>
                <button className="w-full py-3 bg-white/10 text-white font-bold rounded hover:bg-white/20 transition-all active:scale-95 text-sm">
                  Open Calendly (Placeholder)
                </button>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>

      </div>
    </div>
  );
}
