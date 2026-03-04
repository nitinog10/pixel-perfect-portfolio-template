import { motion } from "framer-motion";

const letterVariants = {
  hidden: { y: 100, opacity: 0, rotateX: -90 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: 0.3 + i * 0.05,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const HeroSection = () => {
  const name = "PORTFOLIO";
  const subtitle = "Creative Developer & Designer";

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center z-10 px-4">
      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-mono text-xs md:text-sm tracking-[0.3em] text-muted-foreground mb-8"
      >
        {"{ "}
        {subtitle}
        {" ®}"}
      </motion.p>

      {/* Main title with letter animation */}
      <div className="overflow-hidden">
        <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-display font-bold leading-none tracking-tighter text-gradient glow flex">
          {name.split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
              style={{ perspective: "1000px" }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-12 flex flex-col items-center gap-6"
      >
        <a
          href="#projects"
          className="group border border-border px-8 py-3 rounded-full font-mono text-xs uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-all duration-500 border-glow flex items-center gap-3"
        >
          View My Work
          <motion.span
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-base"
          >
            ↑
          </motion.span>
        </a>

        <div className="flex gap-4 mt-4">
          {[
            { icon: "𝕏", href: "#" },
            { icon: "in", href: "#" },
            { icon: "◉", href: "#" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + i * 0.1 }}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-xs font-mono text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-all duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-foreground/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
