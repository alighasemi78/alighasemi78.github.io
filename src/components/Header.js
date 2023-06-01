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
          <li>Education</li>
          <li>Experiences</li>
          <li>Certifications</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <Button>Download CV</Button>
    </header>
  );
};

export default Header;
