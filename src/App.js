import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Section title="education" />
        <Section title="experiences" />
        <Section title="certifications" />
        <Section title="projects" />
        <Section title="about" />
        <Section title="contact" />
      </main>
      <Footer />
    </>
  );
}

export default App;
