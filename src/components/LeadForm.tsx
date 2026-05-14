import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";

const LeadForm = () => {
  return (
    <section id="contact" className="bg-brand-bg py-24">
      <div className="section-container max-w-4xl">
        <div className="bg-white rounded-3xl p-12 md:p-20 shadow-xl border border-brand-charcoal/5 relative overflow-hidden text-center">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 rounded-full -mr-16 -mt-16" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-6">Start Your Journey</h2>
            <p className="text-xl opacity-60 font-light mb-10 max-w-2xl mx-auto">
              Ready to secure your future with verified land investments? Let's discuss your goals and find the perfect property for you.
            </p>
            
            <a 
              href="mailto:eniolaodunaike10@gmail.com"
              className="btn-primary inline-flex items-center gap-3 px-10 py-5 text-lg group"
            >
              <Mail size={22} />
              Request a Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="mt-8 text-sm opacity-40">
              Response time: typically within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
