import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Rushik Gohel</span>{" "}
            from <span className="purple">Gujarat, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Developer</span> at{" "}
            <span className="purple">Juspay</span>.
            <br />i am completed my master's of computer application in{" "}
            <span className="purple">MCA</span> from{" "}
            <span className="purple">RK University</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <div>
            <p>
              I am 1.5 years of experience in software development in Rokad group and frontend development and backend development skills.
              full stack development work and task in react js, Tailwind CSS, Django(Python) and mysql database.
            </p>
          </div>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Book Reading 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rushik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
