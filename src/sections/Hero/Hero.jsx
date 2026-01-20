import { motion } from "framer-motion";
import "./Hero.css";

export function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Ramon Pereira</h1>
      <h2>Desenvolvedor Full Stack Jr</h2>
      <p>
        Desenvolvedor Full Stack com foco em React, Node.js e .NET, criando
        soluções eficientes e escaláveis.
      </p>

      <div className="hero-buttons">
        <a href="#projects">Ver Projetos</a>
        <a href="#contact" className="outline">
          Contato
        </a>
      </div>
    </motion.section>
  );
}
