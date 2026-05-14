import { motion } from "motion/react";
import { MapPin, MessageCircle, Maximize, Tag, CheckCircle2, Download } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Prime Investment Opportunity",
    location: "Ibadan, Nigeria",
    size: "Standard Plot",
    price: "Contact for Pricing",
    image: "https://lh3.googleusercontent.com/d/1hz1D75jDrl6suW66-rqQcR-jLx5baZzL",
    description: "Verified land with clean title and immense growth potential in a rapidly expanding sector.",
    documents: ["Registered Survey", "Allocation Letter", "Deed of Assignment", "Contract of Sales", "Survey Plan", "Receipt of Payment"],
    brochureUrl: "#"
  },
  {
    id: 2,
    title: "Residential Land Parcel",
    location: "Ibadan, Nigeria",
    size: "Standard Plot",
    price: "Contact for Pricing",
    image: "https://lh3.googleusercontent.com/d/1XiUH0kN3JIznY8uiUgLvbYMhp7oiiucL",
    description: "Secure your future home in a fast-developing environment with excellent neighborhood features.",
    documents: ["Registered Survey", "Allocation Letter", "Deed of Assignment", "Contract of Sales", "Survey Plan", "Receipt of Payment"],
    brochureUrl: "#"
  }
];

const FeaturedProperties = () => {
  return (
    <section id="featured-properties" className="section-container">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-green mb-4">Current Opportunities</p>
          <h2 className="text-4xl md:text-5xl font-medium leading-tight">
            Available <span className="italic">Properties</span>
          </h2>
        </div>
        <p className="text-lg opacity-60 font-light max-w-sm">
          Browse our hand-picked selection of verified land investments available right now.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {properties.map((prop, index) => (
          <motion.div
            key={prop.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="group flex flex-col h-full"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-8">
              <img 
                src={prop.image} 
                alt={prop.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                <MapPin size={12} className="text-brand-green" />
                <span className="text-[10px] font-bold uppercase tracking-wider">{prop.location}</span>
              </div>
            </div>

            <div className="flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4 gap-4">
                <h3 className="text-2xl font-serif font-medium">{prop.title}</h3>
                <div className="bg-brand-green/10 text-brand-green px-3 py-1 rounded text-xs font-bold whitespace-nowrap">
                  {prop.price}
                </div>
              </div>

              <div className="flex gap-6 mb-6">
                <div className="flex items-center gap-2 opacity-60">
                  <Maximize size={16} />
                  <span className="text-sm">{prop.size}</span>
                </div>
                <div className="flex items-center gap-2 opacity-60">
                  <Tag size={16} />
                  <span className="text-sm">Verified Title</span>
                </div>
              </div>

              <p className="opacity-60 font-light mb-8 leading-relaxed">
                {prop.description}
              </p>

              <div className="mt-auto pt-6 border-t border-brand-charcoal/5 flex flex-wrap gap-6 items-center">
                <a 
                  href={`https://wa.me/2348056873453?text=Hi%2C%20My%20name%20is%20_____.%20I'm%20interested%20in%20the%20property%3A%20${prop.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-green font-medium group/link"
                >
                  <MessageCircle size={18} />
                  <span>Inquire Now</span>
                  <div className="h-[1px] w-0 group-hover/link:w-full bg-brand-green transition-all duration-300" />
                </a>

                <button 
                  onClick={() => alert('Brochure download will be available shortly. Please contact us for details.')}
                  className="inline-flex items-center gap-2 text-sm opacity-40 hover:opacity-100 transition-opacity font-medium"
                >
                  <Download size={16} />
                  <span>Download Brochure</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;
