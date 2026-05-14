import { motion } from "motion/react";
import { ShieldCheck, Search, TrendingUp, Handshake } from "lucide-react";

const reasons = [
  {
    title: "Verified properties only",
    description: "I personally vet every land title before recommending it to my clients. No stories.",
    icon: <ShieldCheck size={32} />
  },
  {
    title: "Clear, honest guidance",
    description: "Transparency is my baseline. I tell you the pros and cons of every location.",
    icon: <Search size={32} />
  },
  {
    title: "Real growth potential",
    description: "We focus on locations with upcoming infrastructure and massive appreciation value.",
    icon: <TrendingUp size={32} />
  },
  {
    title: "Support to ownership",
    description: "From your initial inquiry to documentation and allocation, I'm with you.",
    icon: <Handshake size={32} />
  }
];

const WhyMe = () => {
  return (
    <section id="why-work-with-me" className="overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-brand-green mb-4">Values</p>
            <h2 className="text-4xl md:text-5xl font-medium mb-8 leading-tight">
              Why Work With <span className="italic font-light">Eniola?</span>
            </h2>
            <p className="text-lg opacity-70 font-light leading-relaxed">
              I don’t just sell land; I provide security. Real estate is the most stable asset class, but only when done right. I ensure it's done right for you.
            </p>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border-l-2 border-brand-green/20 hover:border-brand-green transition-colors bg-white/50"
              >
                <div className="text-brand-green mb-6 opacity-80">{reason.icon}</div>
                <h3 className="text-2xl font-serif font-medium mb-3">{reason.title}</h3>
                <p className="opacity-60 font-light">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
