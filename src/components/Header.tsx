"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Technology", href: "/technology" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-primary/80 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity group">
          <Image 
            src="/logo.png" 
            alt="DYSA Logo" 
            width={180} 
            height={60} 
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            priority
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors relative group py-2 ${
                  pathname === link.href ? "text-accent" : "text-support hover:text-white"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-accent transform origin-left transition-transform duration-300 ease-out ${pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact" className="px-5 py-2.5 bg-accent text-primary font-semibold rounded hover:bg-accent/90 transition-colors">
            Book Consultation
          </Link>
        </div>
        
        <button className="md:hidden text-white p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
