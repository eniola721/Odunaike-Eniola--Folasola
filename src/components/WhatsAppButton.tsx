import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setShowTooltip(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isVisible && showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white p-4 rounded-xl shadow-2xl border border-brand-charcoal/5 relative max-w-[200px]"
          >
            <button 
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 opacity-30 hover:opacity-100"
            >
              <X size={12} />
            </button>
            <p className="text-[10px] uppercase tracking-widest font-bold text-brand-green mb-1">Online</p>
            <p className="text-xs font-medium leading-relaxed">
              Hey! Ready to secure your first or next land? Let's chat.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <motion.a
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://wa.me/2348056873453?text=Hi%2C%20My%20name%20is%20_____.%20I'm%20interested%20in%20secure%20land%20investments."
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl relative"
          >
            <MessageCircle size={32} fill="currentColor" />
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 border-2 border-[#25D366] rounded-full scale-110 animate-pulse" />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppButton;
