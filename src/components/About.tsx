import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="section-container grid md:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <img 
            src="https://lh3.googleusercontent.com/d/14YnMmq_J_NMqGMwxChXecD5jT5Gdd6re" 
            alt="Eniola Odunaike" 
            referrerPolicy="no-referrer"
            className="w-full rounded-2xl shadow-lg border-8 border-brand-bg object-cover aspect-[4/5] md:aspect-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-brand-green mb-4">The Consultant</p>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
            Helping You Navigate <span className="italic">Secure Investments</span>
          </h2>
          <div className="space-y-6 text-lg opacity-80 leading-relaxed font-light">
            <p>
              Hey, I’m Eniola Odunaike. I know the feeling of wanting to invest your hard-earned money but being held back by the fear of land-related issues.
            </p>
            <p>
              I’m a real estate consultant focused on helping you make smart, secure land investments without confusion or risk. My goal is to bridge the gap between your aspirations and verified land ownership.
            </p>
            <p>
              With EO Land & Investments, I ensure that every property we offer is not just a piece of earth, but a foundation for your future wealth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
