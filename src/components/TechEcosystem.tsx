"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Line, Sphere, Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// 1. THIS IS THE NEW TYPE DEFINITION. 
// It tells TypeScript that 'pos' must be exactly 3 numbers.
type TechNode = {
  name: string;
  pos: [number, number, number];
  color: string;
};

// 2. WE APPLY THAT TYPE HERE by adding ": TechNode[]" after the variable name.
const TECH_NODES: TechNode[] = [
  { name: "AutoCAD", pos: [-3, 2, 0], color: "#ff0000" },
  { name: "SolidWorks", pos: [3, 2, 0], color: "#ff0000" },
  { name: "Python", pos: [-2, 0, 2], color: "#00B7C3" },
  { name: "C# / .NET", pos: [2, 0, 2], color: "#00B7C3" },
  { name: "Next.js", pos: [0, -2, 2], color: "#ffffff" },
  { name: "Node.js", pos: [0, -1, -2], color: "#8cc84b" },
  { name: "PostgreSQL", pos: [-3, -2, -1], color: "#336791" },
  { name: "Azure / AWS", pos: [3, -2, -1], color: "#ff9900" },
  { name: "OpenAI", pos: [0, 2, -2], color: "#00a67e" },
];

function Node({ name, pos, color }: { name: string, pos: [number, number, number], color: string }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={new THREE.Vector3(...pos)}>
        <Sphere args={[0.3, 32, 32]}>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} roughness={0.2} metalness={0.8} />
        </Sphere>
        <Text position={[0, 0.6, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
          {name}
        </Text>
      </group>
    </Float>
  );
}

function Connections() {
  const lines = useMemo(() => {
    const connections = [];
    for (let i = 0; i < TECH_NODES.length; i++) {
      for (let j = i + 1; j < TECH_NODES.length; j++) {
        // Create random connections for visual effect
        if (Math.random() > 0.5) {
          connections.push([TECH_NODES[i].pos, TECH_NODES[j].pos]);
        }
      }
    }
    return connections;
  }, []);

  return (
    <group>
      {lines.map((pts, i) => (
        <Line 
          key={i} 
          points={pts as any} 
          color="#1E2329" 
          lineWidth={1} 
          transparent 
          opacity={0.3} 
        />
      ))}
    </group>
  );
}

export function TechEcosystem() {
  return (
    <div className="h-[60vh] w-full bg-primary rounded-xl border border-white/10 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none z-10 shadow-[inset_0_0_100px_rgba(18,20,23,1)]"></div>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <Connections />
        {TECH_NODES.map((node, i) => (
          <Node key={i} {...node} />
        ))}
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}
