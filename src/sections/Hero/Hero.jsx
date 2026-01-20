import "./Hero.css";

export function Hero() {
  return (
    <section className="hero">
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
    </section>
  );
}
