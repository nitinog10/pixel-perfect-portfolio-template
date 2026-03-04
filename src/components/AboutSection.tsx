import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative z-10 py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-12 uppercase"
        >
          // About Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-display font-light leading-[1.2] text-foreground/90 max-w-4xl"
        >
          A creative developer & designer who crafts{" "}
          <span className="text-gradient-accent font-medium">immersive digital experiences</span>{" "}
          that break conventions and push boundaries.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              With over 5 years of experience in web development and design, I specialize in creating
              visually stunning and technically complex digital products. My work sits at the intersection
              of design and technology, where every pixel is intentional and every interaction is meaningful.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            {[
              { label: "Projects Delivered", value: "50+" },
              { label: "Years of Experience", value: "5+" },
              { label: "Happy Clients", value: "30+" },
            ].map((stat, i) => (
              <div key={i} className="flex justify-between items-center border-b border-border pb-4">
                <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">{stat.label}</span>
                <span className="text-2xl font-display font-bold text-gradient">{stat.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
