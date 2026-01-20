import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Header.css";
import { motion } from "framer-motion";

export function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <strong>Ramon pereira</strong>

      <nav>
        <a href="#projects">Projetos</a>
        <a href="#about">Sobre</a>
        <a href="#contact">Contato</a>
        <button onClick={toggleTheme} className="theme-btn">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </nav>
    </motion.header>
  );
}
