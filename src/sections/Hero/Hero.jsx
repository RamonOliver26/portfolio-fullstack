import { motion } from "framer-motion";
import "./Hero.css";

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
    >
      <motion.h1 variants={item}>
        Olá, eu sou <span>Ramon Pereira</span>
      </motion.h1>

      <motion.p variants={item}>
        Desenvolvedor Full Stack Jr/Pleno focado em criar soluções modernas,
        performáticas e escaláveis.
      </motion.p>

      <motion.div className="hero-buttons" variants={item}>
        <a href="#projects">Ver Projetos</a>
        <a href="#contact" className="outline">
          Contato
        </a>
      </motion.div>
    </motion.section>
  );
}
