import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import laundryImg from "../../Assets/Projects/laundry.svg";
import libraryImg from "../../Assets/Projects/library.svg";

const projectData = [
  {
    title: "Laundry Management System",
    description:
      "The Laundry Management System is a web-based application designed to automate and manage the complete laundry service workflow efficiently. The system helps laundry service providers handle customer orders, track laundry status, manage services, and generate reports, reducing manual work and operational errors.",
    ghLink: "https://github.com/Rushikgohel/Laundry_managemeny_System",
    imgPath: laundryImg,
  },
  {
    title: "Library Management System",
    description:
      "The Library Management System is a web-based application designed to automate and manage the complete library workflow efficiently. The system helps library administrators handle book inventory, manage user accounts, process loans, and generate reports, reducing manual work and operational errors.",
    ghLink: "https://github.com/Rushikgohel/Library_management_system",
    imgPath: libraryImg,
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>

        <Row className="justify-content-center pb-3">
          {projectData.map((project) => (
            <Col key={project.title} md={4} className="project-card">
              <ProjectCard {...project} isBlog={false} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
