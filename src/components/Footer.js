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
              <ul>
                <li
                  onClick={() =>
                    document
                      .getElementsByClassName("education")[0]
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Education
                </li>
                <li
                  onClick={() =>
                    document
                      .getElementsByClassName("experiences")[0]
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Experiences
                </li>
                <li
                  onClick={() =>
                    document
                      .getElementsByClassName("certifications")[0]
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Certifications
                </li>
                <li
                  onClick={() =>
                    document
                      .getElementsByClassName("projects")[0]
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Projects
                </li>
                <li
                  onClick={() =>
                    document
                      .getElementsByClassName("about")[0]
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  About
                </li>
                <li
                  onClick={() =>
                    document
                      .getElementsByClassName("contact")[0]
                      .scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Contact
                </li>
              </ul>
            </ul>
          </nav>
        </section>
        <Button>Download CV</Button>
      </section>
    </footer>
  );
};

export default Footer;
