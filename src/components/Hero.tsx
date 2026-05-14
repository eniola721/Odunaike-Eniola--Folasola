import { motion } from "motion/react";
import { MessageCircle, ArrowRight, CheckCircle2, Handshake } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block glass-pill text-[10px] uppercase tracking-[0.3em] font-bold text-brand-green mb-6">
            Real Estate Consultant
          </div>
          <h1 className="text-6xl md:text-8xl leading-[0.9] font-medium mb-8 tracking-tighter">
            Own Land.<br />Build Real <span className="italic font-light">Wealth.</span>
          </h1>
          <p className="text-lg md:text-xl opacity-70 mb-10 max-w-lg leading-relaxed">
            Helping you secure verified land investments in fast-growing locations in Nigeria.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/2348056873453?text=Hi%2C%20My%20name%20is%20_____.%20I'm%20interested%20in%20secure%20land%20investments." target="_blank" rel="noopener noreferrer" className="btn-primary">
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
            <a href="#featured-properties" className="btn-secondary flex items-center justify-center gap-2">
              View Available Properties
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-[4/5] md:aspect-square"
        >
          <div className="absolute inset-0 bg-brand-green/10 rounded-2xl -rotate-3 transition-transform hover:rotate-0 duration-700" />
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Modern Architecture" 
            className="w-full h-full object-cover rounded-2xl shadow-2xl relative z-10"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden lg:block border border-brand-charcoal/5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green font-serif font-bold text-xl">
                EO
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider opacity-60 font-bold">Trusted by</p>
                <p className="text-sm font-medium">50+ Happy Investors</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
