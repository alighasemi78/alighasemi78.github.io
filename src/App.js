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
      </main>
    </>
  );
}

export default App;
