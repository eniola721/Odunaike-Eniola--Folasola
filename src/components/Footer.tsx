import { Instagram, Facebook, MessageCircle, Music2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-brand-charcoal/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20 text-center md:text-left">
          <div className="md:col-span-1">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <span className="font-serif text-3xl font-semibold tracking-tight">EO</span>
              <span className="text-xs uppercase tracking-[0.2em] opacity-60 font-medium">Land & Investments</span>
            </div>
            <p className="opacity-60 text-sm leading-relaxed mb-8">
              Helping you secure verified land investments in fast-growing locations in Nigeria. Smart, secure, sustainable.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              {[
                { icon: <MessageCircle size={20} />, href: "https://wa.me/2348056873453?text=Hi%2C%20My%20name%20is%20_____.%20I'm%20interested%20in%20secure%20land%20investments." },
                { icon: <Instagram size={20} />, href: "https://instagram.com" },
                { icon: <Music2 size={20} />, href: "https://www.tiktok.com/@eniolatherealtor3?_r=1&_t=ZS-96LmUhesyLU" },
                { icon: <Facebook size={20} />, href: "https://facebook.com" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-brand-charcoal/10 flex items-center justify-center hover:bg-brand-green hover:text-white hover:border-brand-green transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About Eniola</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Services</a></li>
              <li><a href="#why-work-with-me" className="hover:opacity-100 transition-opacity">Why Choose Me</a></li>
              <li><a href="#vision" className="hover:opacity-100 transition-opacity">Our Vision</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm opacity-60">
              <li>Ibadan, Nigeria</li>
              <li>+234 805 6873 453</li>
              <li>eniolaodunaike10@gmail.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-6">Newsletter</h4>
            <p className="text-xs opacity-60 mb-4 line-height-relaxed">Stay updated on new land releases and investment tips.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-brand-bg px-4 py-2 rounded text-sm w-full outline-none focus:ring-1 ring-brand-green"
              />
              <button className="bg-brand-charcoal text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider">Join</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-brand-charcoal/5 gap-4">
          <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold">
            © {new Date().getFullYear()} EO Land & Investments. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest opacity-40 font-bold">
            <a href="#" className="hover:opacity-100">Privacy Policy</a>
            <a href="#" className="hover:opacity-100">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
