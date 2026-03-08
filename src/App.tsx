import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
