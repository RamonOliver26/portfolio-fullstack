import { motion } from "framer-motion";
import "./Projects.css";
import { projects } from "../../data/projects";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Projects() {
  return (
    <section className="projects" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Projetos
      </motion.h2>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <ul className="tech-list">
              {project.techs.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="outline"
              >
                Demo
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
