import { motion } from "motion/react";
import { CheckCircle2, Navigation, CreditCard, Eye } from "lucide-react";

const services = [
  {
    title: "Verified Land Sales",
    description: "Access a curated list of properties with clean titles and zero government encumbrance.",
    icon: <CheckCircle2 className="text-brand-green" size={24} />
  },
  {
    title: "Investment Guidance",
    description: "Strategizing your real estate portfolio for maximum ROI in fast-growing locations.",
    icon: <Navigation className="text-brand-green" size={24} />
  },
  {
    title: "Flexible Payment Plans",
    description: "Tailored installment options designed to make land ownership achievable for everyone.",
    icon: <CreditCard className="text-brand-green" size={24} />
  },
  {
    title: "Site Inspection Booking",
    description: "Schedule guided physical or virtual tours to see exactly what you are investing in.",
    icon: <Eye className="text-brand-green" size={24} />
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-brand-bg">
      <div className="section-container">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-brand-green mb-4">What I Offer</p>
          <h2 className="text-4xl md:text-5xl font-medium">Expert Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl border border-brand-charcoal/5 hover:shadow-xl transition-shadow group"
            >
              <div className="w-12 h-12 bg-brand-bg rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-4">{service.title}</h3>
              <p className="opacity-70 font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
