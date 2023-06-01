import aliGhasemi from "../assets/images/ali-ghasemi.jpg";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero section">
      <div className="heroImageWrapper">
        <img src={aliGhasemi} alt="Ali Ghasemi" className="heroImage" />
      </div>
      <main className="heroMain">
        <h1>
          My name is Ali.
          <br />
          Front-End Developer
        </h1>
        <h2>With a passion for UI / UX</h2>
      </main>
    </section>
  );
};

export default Hero;
