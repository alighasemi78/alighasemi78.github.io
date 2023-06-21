import logo from "../assets/images/logo-white-orange.svg";
import hamburgerMenu from "../assets/images/bars-solid.svg";
import "../styles/Header.css";
import Button from "./Button";

const Header = () => {
  return (
    <header className="section header">
      <img src={logo} alt="logo" className="headerLogo" />
      <img src={hamburgerMenu} alt="hamburger menu" className="headerMenu" />
      <nav className="headerNav">
        <ul>
          <li>Home</li>
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
      </nav>
      <Button>Download CV</Button>
    </header>
  );
};

export default Header;
