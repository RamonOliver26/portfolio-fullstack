import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <strong>Ramon.dev</strong>

      <nav>
        <a href="#projects">Projetos</a>
        <a href="#about">Sobre</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}
