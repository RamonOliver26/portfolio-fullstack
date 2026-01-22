import { motion } from "framer-motion";
import "./Hero.css";
import { ParticlesBackground } from "../../components/ParticlesBackground";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Hero() {
  return (
    <motion.section
      className="hero"
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <ParticlesBackground />
      <motion.h1 variants={item} style={{ position: "relative", zIndex: 1 }}>
        Olá, eu sou <span>Ramon Pereira</span>
      </motion.h1>

      <motion.p variants={item} style={{ position: "relative", zIndex: 1 }}>
        Desenvolvedor Full Stack Jr/Pleno focado em criar soluções modernas,
        performáticas e escaláveis.
      </motion.p>

      <motion.div
        className="hero-buttons"
        variants={item}
        initial="hidden"
        animate="visible"
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
      >
        <a href="#projects">Ver Projetos</a>
        <a href="#contact" className="outline">
          Contato
        </a>
      </motion.div>
    </motion.section>
  );
}
