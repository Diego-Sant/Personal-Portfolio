import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projetos"
              className={
                activeLink === "projetos" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projetos")}
            >
              Projetos
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/diego-de-souza-sant-ana-7784b821b/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="Linkedin" />
              </a>
              <a
                href="https://github.com/Diego-Sant"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="Github" />
              </a>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlQQLQGRwMnvdmHnNHVnkWwqVrQFdGsKgmzXwtnJjTqcJBVFvrZNrjMfHltBFljxmCmzZQ"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="Gmail" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Disponível</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
