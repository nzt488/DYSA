"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// CountUp Component
function CountUp({ to, duration = 2, suffix = "", className = "" }: { to: number, duration?: number, suffix?: string, className?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView || !nodeRef.current) return;
    
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        if (nodeRef.current) {
          nodeRef.current.textContent = Math.round(value).toString() + suffix;
        }
      },
    });

    return controls.stop;
  }, [inView, to, duration, suffix]);

  return <span ref={nodeRef} className={className}>0{suffix}</span>;
}

// Expanded Chart Component
function MiniChart({ type }: { type: string }) {
  // Simple CSS bar chart visualization
  const data = type === 'satisfaction' 
    ? [60, 80, 85, 95] // Quarters
    : [30, 50, 75, 100]; // Generic growth
    
  const labels = ['Q1', 'Q2', 'Q3', 'Q4'];

  return (
    <motion.div 
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="mt-6 pt-4 border-t border-white/10 w-full"
    >
      <div className="flex items-end justify-between h-20 gap-2 mb-2">
        {data.map((val, i) => (
          <div key={i} className="w-full bg-white/5 rounded-t relative group flex flex-col justify-end h-full">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: `${val}%` }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="w-full bg-accent/80 rounded-t relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/30"></div>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-support/70 font-mono">
        {labels.map((l, i) => <span key={i}>{l}</span>)}
      </div>
      <div className="mt-3 text-xs text-accent font-semibold cursor-pointer hover:text-white transition-colors text-center w-full">
        View Full Stats →
      </div>
    </motion.div>
  );
}

const stats = [
  { number: 50, suffix: "+", label: "Projects Delivered", type: "growth" },
  { number: 15, suffix: "+", label: "Industries Served", type: "growth" },
  { number: 95, suffix: "%", label: "Client Satisfaction", type: "satisfaction" },
  { number: 5000, suffix: "+", label: "Eng. Hours Saved", type: "growth" },
];

export function InteractiveMetrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div 
      ref={containerRef}
      className="grid grid-cols-2 gap-6 relative group/container"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Global Mouse Follower Glow (Radar pulse effect) */}
      <motion.div 
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover/container:opacity-100 z-0"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(0,183,195,0.15), transparent 40%)`
          )
        }}
      />

      {stats.map((stat, i) => (
        <motion.div 
          key={i} 
          layout
          onMouseEnter={() => setHoveredIndex(i)}
          className="relative bg-primary/80 backdrop-blur-md p-6 rounded-xl border border-white/10 flex flex-col items-center text-center transition-all duration-300 z-10 overflow-hidden"
          style={{
            boxShadow: hoveredIndex === i ? '0 0 30px rgba(0,183,195,0.15), inset 0 0 20px rgba(0,183,195,0.05)' : 'none',
            borderColor: hoveredIndex === i ? 'rgba(0,183,195,0.4)' : 'rgba(255,255,255,0.1)'
          }}
        >
          {/* Faint isometric data-stream overlay */}
          {hoveredIndex === i && (
            <div className="absolute inset-0 opacity-20 pointer-events-none" 
                 style={{ 
                   backgroundImage: `linear-gradient(rgba(0,183,195,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,183,195,0.2) 1px, transparent 1px)`,
                   backgroundSize: '20px 20px',
                   animation: 'panBackground 10s linear infinite'
                 }}>
            </div>
          )}

          <motion.div layout className="relative z-10 w-full flex flex-col items-center">
            <CountUp 
              to={stat.number} 
              suffix={stat.suffix} 
              className={`text-4xl md:text-5xl font-bold mb-2 transition-colors duration-300 ${hoveredIndex === i ? 'text-white' : 'text-accent'}`}
            />
            <span className="text-xs md:text-sm text-support uppercase tracking-wider font-medium">{stat.label}</span>
          </motion.div>

          {/* Expanded State */}
          {hoveredIndex === i && <MiniChart type={stat.type} />}
          
        </motion.div>
      ))}

      {/* CSS Animation for the background pan */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes panBackground {
          0% { background-position: 0 0; }
          100% { background-position: 100% 100%; }
        }
      `}} />
    </div>
  );
}
