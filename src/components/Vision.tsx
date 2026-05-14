import { motion } from "motion/react";
import { Leaf } from "lucide-react";

const Vision = () => {
  return (
    <section id="vision" className="bg-brand-charcoal text-white overflow-hidden">
      <div className="section-container grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute top-0 left-0 w-24 h-24 bg-brand-green/30 blur-3xl -z-10" />
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-brand-green mb-4">Beyond Real Estate</p>
          <h2 className="text-4xl md:text-5xl font-medium mb-8 leading-tight">
            A Vision for <span className="italic font-light">Sustainability</span>
          </h2>
          <div className="space-y-6 text-xl opacity-80 leading-relaxed font-light">
            <p>
              "Apart from real estate, I’m building toward agriculture—fish and poultry farming—creating a future that connects land ownership with sustainable income."
            </p>
            <p className="border-l-2 border-brand-green/40 pl-6 italic text-lg">
              The land is our greatest resource. My goal is to see every investment we facilitate contribute to a greener, more self-sufficient Nigeria.
            </p>
          </div>
          
          <div className="mt-12 flex items-center gap-4 text-brand-green">
            <Leaf size={32} />
            <span className="text-sm uppercase tracking-widest font-bold">Agriculture & Real Estate</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative h-[500px]"
        >
          <img 
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1000" 
            alt="Sustainable Agriculture vision" 
            className="w-full h-full object-cover rounded-2xl opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
