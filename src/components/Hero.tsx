import { motion } from "motion/react";
import { MessageCircle, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay and Blur */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Architecture" 
          className="w-full h-full object-cover blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-brand-charcoal/60" />
      </div>

      <div className="section-container relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block glass-pill text-[10px] uppercase tracking-[0.3em] font-bold text-white mb-6 bg-white/10 backdrop-blur-md border border-white/20">
              Real Estate Consultant
            </div>
            <h1 className="text-6xl md:text-8xl leading-[0.9] font-medium mb-8 tracking-tighter text-white">
              Own Land.<br />Build Real <span className="italic font-light text-white/90">Wealth.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-lg leading-relaxed">
              Helping you secure verified land investments in fast-growing locations in Nigeria.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/2348056873453?text=Hi%2C%20My%20name%20is%20_____.%20I'm%20interested%20in%20secure%20land%20investments." target="_blank" rel="noopener noreferrer" className="btn-primary">
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
              <a href="mailto:eniolaodunaike10@gmail.com" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-medium transition-all backdrop-blur-sm flex items-center justify-center gap-2">
                Request Consultation
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-20 flex flex-wrap gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green backdrop-blur-md">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-white/60 font-bold">Trusted by</p>
                <p className="text-sm font-medium text-white">50+ Happy Investors</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
