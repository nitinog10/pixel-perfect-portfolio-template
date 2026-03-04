import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative z-10 py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4 uppercase"
        >
          // Get In Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter text-gradient glow mb-12"
        >
          LET'S BUILD
          <br />
          SOMETHING
          <br />
          <span className="text-gradient-accent">TOGETHER</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground text-sm md:text-base max-w-lg mb-12 leading-relaxed"
        >
          Got a project in mind? I'm always open to discussing new ideas, creative projects, or opportunities to be part of your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="mailto:hello@portfolio.dev"
            className="group inline-flex items-center gap-3 border border-border px-8 py-4 rounded-full font-mono text-xs uppercase tracking-[0.2em] text-foreground/80 hover:text-foreground hover:border-foreground/40 transition-all duration-500 border-glow"
          >
            <Mail size={16} />
            hello@portfolio.dev
          </a>
          <a
            href="#"
            className="group inline-flex items-center gap-3 border border-border px-8 py-4 rounded-full font-mono text-xs uppercase tracking-[0.2em] text-foreground/80 hover:text-foreground hover:border-foreground/40 transition-all duration-500 border-glow"
          >
            <Send size={16} />
            Telegram
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <span className="font-mono text-xs text-muted-foreground">© 2026</span>
          <span className="font-mono text-xs text-muted-foreground tracking-widest">
            CRAFTED WITH PASSION & CODE
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
