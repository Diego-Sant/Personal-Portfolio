import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}></Col>
          <Col sm={6} className="text-center text-sm-end">
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
            <p>©Copyright 2022. Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
