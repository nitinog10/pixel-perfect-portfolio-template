import { motion } from "framer-motion";

const rocks = [
  { size: 120, x: "8%", y: "15%", delay: 0, blur: 2 },
  { size: 80, x: "85%", y: "10%", delay: 1, blur: 1 },
  { size: 180, x: "75%", y: "60%", delay: 2, blur: 3 },
  { size: 100, x: "5%", y: "70%", delay: 0.5, blur: 2 },
  { size: 60, x: "45%", y: "80%", delay: 1.5, blur: 1 },
  { size: 140, x: "20%", y: "45%", delay: 3, blur: 4 },
  { size: 90, x: "65%", y: "30%", delay: 2.5, blur: 2 },
  { size: 50, x: "90%", y: "85%", delay: 0.8, blur: 1 },
];

const FloatingRocks = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {rocks.map((rock, i) => (
        <motion.div
          key={i}
          className="absolute rounded-[40%_60%_50%_50%/60%_40%_60%_40%]"
          style={{
            width: rock.size,
            height: rock.size * 0.8,
            left: rock.x,
            top: rock.y,
            background: `radial-gradient(ellipse at 30% 30%, hsl(0 0% 18%), hsl(0 0% 6%))`,
            filter: `blur(${rock.blur}px)`,
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 15, -10, 5, 0],
            rotate: [0, 3, -2, 1, 0],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: rock.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingRocks;
