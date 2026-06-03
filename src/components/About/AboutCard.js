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
              I am a Software Developer with 1.5 years of experience in Full-Stack Development. I have worked on developing and maintaining web applications, handling both frontend and backend development responsibilities.During my professional journey at Rokad Group, I gained hands-on experience in building responsive and user-friendly applications using React.js, Tailwind CSS, Django (Python), and MySQL. I have been involved in designing user interfaces, developing REST APIs, database management, bug fixing, and implementing new features based on business requirements.
            </p>
            <p>
              Additionally, I have experience working on freelance projects where I delivered customized web solutions for clients, enhancing my problem-solving, communication, and project management skills.Currently, I am pursuing a .NET Development Internship at Prompt ERP IT Company, where I am expanding my expertise in ASP.NET, C#, SQL Server, and enterprise-level application development.
            </p>

            <br />

            <p>
              Technical Skills
              <br />
              Frontend: React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Bootstrap
              <br />
              Backend: Django (Python), ASP.NET, C#
              <br />
              Databases: MySQL, SQL Server
              <br />
              Tools & Technologies: Git, GitHub, REST APIs, VS Code
            </p>

            <br />

            <p>
              I am passionate about building scalable web applications, learning new technologies, and contributing to innovative software solutions. I continuously strive to improve my technical skills and deliver high-quality software that creates real business value.
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
