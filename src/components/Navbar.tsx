import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-charcoal/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <span className="font-serif text-2xl font-semibold tracking-tight">EO</span>
          <span className="text-xs uppercase tracking-[0.2em] opacity-60 font-medium">Land & Investments</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {["About", "Services", "Why Work With Me", "Vision"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity"
            >
              {item}
            </a>
          ))}
        </div>

        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          href="https://wa.me/2348056873453?text=Hi%2C%20My%20name%20is%20_____.%20I'm%20interested%20in%20secure%20land%20investments."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-green text-white px-5 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:bg-brand-green-light transition-colors"
        >
          <MessageCircle size={16} />
          <span>Consult for free</span>
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
