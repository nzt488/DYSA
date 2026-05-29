import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-support border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
            <Image 
              src="/logo.png" 
              alt="DYSA Logo" 
              width={180} 
              height={60} 
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </Link>
          <p className="text-sm mb-6 max-w-xs leading-relaxed">
            Transforming engineering, manufacturing, and digital systems through advanced automation.
          </p>
          <div className="text-sm space-y-1">
            <p>+91 9322486304</p>
            <p>dysasolution@gmail.com</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/services" className="hover:text-accent transition-colors">CAD Automation</Link></li>
            <li><Link href="/services" className="hover:text-accent transition-colors">SolidWorks Solutions</Link></li>
            <li><Link href="/services" className="hover:text-accent transition-colors">Web Development</Link></li>
            <li><Link href="/services" className="hover:text-accent transition-colors">API Integration</Link></li>
            <li><Link href="/services" className="hover:text-accent transition-colors">AI Systems</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link href="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link></li>
            <li><Link href="/industries" className="hover:text-accent transition-colors">Industries</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Ready to Automate?</h4>
          <p className="text-sm mb-6">Partner with DYSA to transform your engineering workflows.</p>
          <Link href="/contact" className="inline-block px-5 py-2.5 bg-white/10 text-white font-semibold rounded hover:bg-white/20 transition-colors">
            Contact DYSA
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; {new Date().getFullYear()} DYSA. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
