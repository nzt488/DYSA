import { FadeUp, StaggerContainer, StaggerItem } from "@/components/MotionWrapper";

const testimonials = [
  {
    quote: "DYSA transformed our engineering workflow and delivered measurable productivity gains. Their technical depth is unmatched.",
    author: "Engineering Manager",
    company: "Manufacturing Sector",
    logo: "M"
  },
  {
    quote: "The automation systems developed by DYSA significantly reduced repetitive work across our design teams, allowing us to focus on innovation.",
    author: "Technical Director",
    company: "Industrial Equipment Company",
    logo: "I"
  },
  {
    quote: "The level of technical expertise and professionalism exceeded expectations. They handle complex system integrations effortlessly.",
    author: "Operations Lead",
    company: "Construction Industry",
    logo: "C"
  }
];

export default function TestimonialsPage() {
  return (
    <div className="pt-32 pb-20 bg-primary text-white min-h-screen overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeUp className="max-w-3xl mb-24 mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Client <span className="text-accent">Success</span>
          </h1>
          <p className="text-xl text-support leading-relaxed">
            Trusted by engineering leaders to deliver robust, scalable automation and enterprise solutions.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <StaggerItem key={i}>
              <div className="bg-secondary p-10 rounded border border-white/5 flex flex-col justify-between h-full hover:border-white/20 hover:shadow-[0_10px_30px_rgba(255,255,255,0.02)] transition-all hover:-translate-y-2 group">
                <div>
                  <div className="w-12 h-12 bg-primary border border-white/10 rounded flex items-center justify-center text-accent font-bold text-xl mb-8 group-hover:bg-accent group-hover:text-primary transition-colors">
                    {test.logo}
                  </div>
                  <p className="text-lg leading-relaxed mb-8 italic text-support group-hover:text-white transition-colors">"{test.quote}"</p>
                </div>
                <div>
                  <p className="font-bold">{test.author}</p>
                  <p className="text-sm text-support uppercase tracking-widest mt-1">{test.company}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
