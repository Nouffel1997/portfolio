import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import maquette from "../../Assets/Projects/maquette.png";
import maquetteresponsive from "../../Assets/Projects/maquetteresponsive.png";
import puissance4 from "../../Assets/Projects/puissance4.png";
import djangoproject from "../../Assets/Projects/djangoproject.png";
import ign3d from "../../Assets/Projects/ign3d.png";
import logos from "../../Assets/Projects/logos.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maquette}
              title="Maquette"
              description="Project in HTML and CSS made at Samsung Campus - Epitech."
              ghLink="https://github.com/Nouffel1997/Maquette"
              demoLink="https://maquette-ifjb45owu-nouffel1997.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={puissance4}
              title="Puissance4"
              description="Project in jquery made at Samsung Campus - Epitech."
              ghLink="https://github.com/Nouffel1997/Puissance4"
              demoLink="https://puissance4.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maquetteresponsive}
              title="Maquette Responsive"
              description="Project in HTML and CSS made at Samsung Campus - Epitech."
              ghLink="https://github.com/Nouffel1997/Maquette-Responsive"
              demoLink="https://maquette-responsive.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={djangoproject}
              title="Django Project"
              description="An authentication project in Django made at home."
              ghLink="https://github.com/Nouffel1997/DjangoProject" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ign3d}
              title="Ign3d"
              description="Project in Wordpress and Photoshop made at Micro Web Media."
              demoLink="https://ign3d.fr/"  
              ghLink="https://github.com/Nouffel1997/"  
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logos}
              title="Logos"
              description="Some logos created for companies when I was working at Micro Web Media and others created for fun"
              ghLink="https://github.com/Nouffel1997/Logos"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
