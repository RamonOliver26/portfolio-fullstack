import "./Hero.css";
import { ParticlesBackground } from "../../components/ParticlesBackground";
import { useMagnetic } from "../../hooks/useMagnetic";

export function Hero() {
  const primaryBtn = useMagnetic(0.25);
  const secondaryBtn = useMagnetic(0.2);

  return (
    <section
      className="hero"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <ParticlesBackground />

      <div className="hero-content">
        <h1>
          Olá, eu sou <span className="glow-name">Ramon Pereira</span>
        </h1>

        <p>
          Desenvolvedor Full Stack Jr/Pleno focado em criar soluções modernas,
          performáticas e escaláveis.
        </p>

        <div className="hero-buttons">
          <a href="#projects" ref={primaryBtn}>
            Ver Projetos
          </a>
          <a href="#contact" className="outline" ref={secondaryBtn}>
            Contato
          </a>
        </div>
      </div>
    </section>
  );
}
