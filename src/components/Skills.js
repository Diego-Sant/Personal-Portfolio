import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import meter5 from "../assets/img/meter5.svg";
import meter6 from "../assets/img/meter6.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Algumas habilidades que eu aprendi durante 1 ano e meio de
                programação
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Imagem" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Imagem" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Imagem" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Imagem" />
                  <h5>Photoshop</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Imagem" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Imagem" />
                  <h5>Java</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        alt="colorSharp"
        src={colorSharp}
      ></img>
    </section>
  );
};
