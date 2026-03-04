import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    category: "Design",
    items: ["UI/UX Design", "Web Design", "3D Design", "Branding", "Motion"],
  },
  {
    category: "Coding",
    items: ["Creative Coding", "GLSL Shaders", "Front-end", "Back-end", "WebGL"],
  },
  {
    category: "Strategy",
    items: ["Content Strategy", "Brand Strategy", "Tone of Voice", "Positioning"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative z-10 py-32 md:py-48 px-6 md:px-12">
      {/* Marquee */}
      <div className="overflow-hidden mb-32 -mx-6 md:-mx-12">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-[8vw] font-display font-bold tracking-tighter text-foreground/[0.03] mx-4">
              DESIGN • CODE • CREATE • INNOVATE •&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4 uppercase"
        >
          // What I Do
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-display font-bold tracking-tight text-gradient mb-20"
        >
          Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="group"
            >
              <h3 className="text-lg font-display font-semibold mb-6 text-foreground/90 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {service.category}
              </h3>
              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-default font-mono flex items-center gap-2"
                  >
                    <span className="text-border">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
