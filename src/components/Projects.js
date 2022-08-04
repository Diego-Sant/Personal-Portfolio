import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg12 from "../assets/img/project-img12.png";
import projImg13 from "../assets/img/project-img13.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Dashboard",
      description: "Site de dashboard e gráficos.",
      imgUrl: projImg1,
    },
    {
      title: "RateYourMovie",
      description: "Site funcional de avaliação de filmes e séries.",
      imgUrl: projImg2,
    },
    {
      title: "WildBeast",
      description: "Site informativo sobre animais selvagens.",
      imgUrl: projImg3,
    },
    {
      title: "YourTurnToDie",
      description: "Wiki sobre um jogo de escolhas.",
      imgUrl: projImg4,
    },
    {
      title: "Pokédex",
      description: "Uma pokédex funcional com sprites animados de 649 Pokémon.",
      imgUrl: projImg5,
    },
    {
      title: "QuizApp",
      description: "Um quiz básico sobre jogos em geral.",
      imgUrl: projImg6,
    },
    {
      title: "NetGamePass",
      description:
        "Um site informativo sobre lançamento de jogos e suas avaliações.",
      imgUrl: projImg7,
    },
    {
      title: "NetClone",
      description: "Um clone da Netflix usando uma API.",
      imgUrl: projImg8,
    },
    {
      title: "EscapeFromHell",
      description:
        "Um jogo de plataforma feito em pygame para o PCA da faculdade.",
      imgUrl: projImg9,
    },
    {
      title: "GodHunter",
      description: "Um jogo de luta em turnos feito no pygame.",
      imgUrl: projImg10,
    },
    {
      title: "Fanimes",
      description: "Um site para artistas divulgarem sua arte.",
      imgUrl: projImg12,
    },
    {
      title: "GameFox",
      description: "Um site sobre peças de um setup gamer.",
      imgUrl: projImg13,
    },
  ];

  return (
    <section className="project" id="projetos">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projetos</h2>
                  <p>Todos os meus projetos em 1 ano e meio de faculdade.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    ></Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="colorSharp2"
      />
    </section>
  );
};
