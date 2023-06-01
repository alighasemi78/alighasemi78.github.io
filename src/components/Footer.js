import "../styles/Footer.css";
import logo from "../assets/images/logo-orange-black.svg";
import Button from "./Button";

const Footer = () => {
  return (
    <footer className="footer section">
      <section className="footerFirstSection">
        <img src={logo} alt="logo" />
        <p>
          Success is not the key to happiness; happiness is the key to success.
          If you love what you do, you will succeed.
        </p>
      </section>
      <section className="footerSecondSection">
        <section className="footerSections">
          <header>Sections</header>
          <nav>
            <ul>
              <li>Home</li>
              <li>Education</li>
              <li>Experiences</li>
              <li>Certifications</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </section>
        <Button>Download CV</Button>
      </section>
    </footer>
  );
};

export default Footer;
