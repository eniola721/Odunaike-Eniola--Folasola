import React, { useState } from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";

const LeadForm = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="contact" className="bg-brand-bg">
      <div className="section-container max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-brand-charcoal/5">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-medium mb-4">Start Your Journey</h2>
            <p className="text-lg opacity-60 font-light">Tell me about your investment goals, and let's make them a reality.</p>
          </div>

          {status === "success" ? (
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="text-center py-12"
            >
              <div className="w-20 h-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                <Send size={40} />
              </div>
              <h3 className="text-2xl font-medium mb-2">Message Received!</h3>
              <p className="opacity-60">I'll reach out to you within 24 hours.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-8 text-brand-green font-medium hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest font-bold opacity-60">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    placeholder="Eniola Odunaike"
                    className="w-full bg-brand-bg border border-transparent focus:border-brand-green rounded-lg px-4 py-3 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs uppercase tracking-widest font-bold opacity-60">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    placeholder="+234 ..."
                    className="w-full bg-brand-bg border border-transparent focus:border-brand-green rounded-lg px-4 py-3 outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="budget" className="text-xs uppercase tracking-widest font-bold opacity-60">Investment Budget (Optional)</label>
                <select 
                  id="budget" 
                  className="w-full bg-brand-bg border border-transparent focus:border-brand-green rounded-lg px-4 py-3 outline-none transition-colors appearance-none"
                >
                  <option value="">Select Range</option>
                  <option value="1-5m">₦1M - ₦5M</option>
                  <option value="5-10m">₦5M - ₦10M</option>
                  <option value="10-20m">₦10M - ₦20M</option>
                  <option value="20m+">₦20M+</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest font-bold opacity-60">How can I help you?</label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="I'm interested in land in Epe..."
                  className="w-full bg-brand-bg border border-transparent focus:border-brand-green rounded-lg px-4 py-3 outline-none transition-colors resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={status === "sending"}
                className="btn-primary w-full justify-center py-4 text-lg mt-4 disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Request a Consultation"}
                {status === "idle" && <Send size={20} />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
