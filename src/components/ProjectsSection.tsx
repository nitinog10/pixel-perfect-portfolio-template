import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "ZENITH",
    category: "Web Design • Development",
    description: "A futuristic e-commerce platform with immersive 3D product visualization and micro-interactions.",
    year: "2025",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "NOVA",
    category: "Branding • Motion",
    description: "Complete brand identity system with animated logo, motion guidelines, and digital presence.",
    year: "2025",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "ORBIT",
    category: "Creative Coding • WebGL",
    description: "Interactive data visualization dashboard with real-time 3D graphics and GLSL shaders.",
    year: "2024",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "PULSE",
    category: "UI/UX • Development",
    description: "Music streaming platform with gesture-driven UI and spatial audio visualization.",
    year: "2024",
    color: "from-rose-500/20 to-pink-500/20",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group relative"
    >
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.color} p-px`}>
        <div className="relative bg-card rounded-2xl p-8 md:p-12 h-full">
          <div className="flex justify-between items-start mb-8">
            <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
              {project.category}
            </span>
            <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
          </div>

          <h3 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-gradient mb-6 group-hover:tracking-normal transition-all duration-700">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
            {project.description}
          </p>

          <motion.div
            className="mt-8 flex items-center gap-2 text-xs font-mono tracking-wider text-muted-foreground group-hover:text-foreground transition-colors duration-500"
            whileHover={{ x: 5 }}
          >
            View Project
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-t from-foreground/[0.02] to-transparent" />
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative z-10 py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4 uppercase"
          >
            // Selected Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tight text-gradient"
          >
            Projects
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
