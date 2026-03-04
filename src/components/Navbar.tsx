import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "About", "Projects", "Services", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6"
      >
        <button onClick={() => scrollTo("home")} className="font-mono text-sm tracking-widest text-foreground/80 hover:text-foreground transition-colors">
          ⟨ AK /⟩
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => scrollTo("contact")}
            className="hidden md:block text-xs font-mono uppercase tracking-[0.2em] border border-border px-4 py-2 rounded-full text-foreground/80 hover:text-foreground hover:border-foreground/40 transition-all duration-300 border-glow"
          >
            Contact ↗
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-2xl font-display tracking-wider text-foreground/80 hover:text-foreground transition-colors"
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
