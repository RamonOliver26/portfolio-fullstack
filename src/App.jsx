import { Hero } from "./sections/Hero/Hero";
import { Header } from "./components/Header/Header";
import { Projects } from "./sections/Projects/Projects";
import { About } from "./sections/About/About";
function App() {
  return (
    <>
      <Hero />
      <Header />
      <About />
      <Projects />
    </>
  );
}

export default App;
