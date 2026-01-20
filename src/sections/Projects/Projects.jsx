import { motion } from "framer-motion";
import "./Projects.css";
import { projects } from "../../data/projects";

export function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projetos</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
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
              <a href={project.github} target="_blank">
                GitHub
              </a>
              <a href={project.demo} target="_blank" className="outline">
                Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
