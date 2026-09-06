import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCard({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  isBlog = false,
}) {
  return (
    <Card className="project-card-view h-100 shadow-sm border-0">
      <Card.Img variant="top" src={imgPath} alt={`${title} preview`} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>

        <div className="mt-auto d-flex flex-wrap gap-2">
          <Button
            variant="primary"
            href={ghLink}
            target="_blank"
            rel="noreferrer"
            className="d-inline-flex align-items-center"
          >
            <BsGithub size={18} />
            <span className="ms-2">{isBlog ? "Blog" : "GitHub"}</span>
          </Button>

          {!isBlog && demoLink && (
            <Button
              variant="outline-light"
              href={demoLink}
              target="_blank"
              rel="noreferrer"
              className="d-inline-flex align-items-center"
            >
              <CgWebsite size={18} />
              <span className="ms-2">Demo</span>
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
