import { motion } from "framer-motion";
import "./About.css";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function About() {
  return (
    <motion.section
      className="about"
      id="about"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 variants={item}>Sobre mim</motion.h2>

      <motion.p variants={item}>
        Sou desenvolvedor Full Stack Jr/Pleno com formação em Processos
        Gerenciais e em conclusão do curso de Análise e Desenvolvimento de
        Sistemas. Atuo criando soluções web modernas, unindo visão estratégica
        de negócio com desenvolvimento de software.
      </motion.p>

      <motion.p variants={item}>
        Possuo experiência com JavaScript, React, Node.js, APIs REST, bancos de
        dados e boas práticas de desenvolvimento, sempre focado em código limpo,
        performance e experiência do usuário.
      </motion.p>

      <motion.div className="about-highlights" variants={item}>
        <span>⚡ Front-end moderno</span>
        <span>🧠 Visão de negócio</span>
        <span>🔧 Back-end & APIs</span>
        <span>🚀 Aprendizado contínuo</span>
      </motion.div>
    </motion.section>
  );
}
