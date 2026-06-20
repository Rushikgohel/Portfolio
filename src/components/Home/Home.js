import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> RUSHIK GOHEL</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <div className="py-16">
        <div className="max-w-6xl mx-auto text-center px-4">

          <h1 className="text-4xl font-bold text-white">
            Find Me On
          </h1>

          <p className="mt-3 text-gray-300 text-lg">
            Feel free to{" "}
            <span className="text-purple-500 font-semibold">
              connect
            </span>{" "}
            with me
          </p>

          <div className="flex justify-center items-center gap-6 mt-8 flex-wrap">

            {/* GitHub */}
            <a
              href="https://github.com/rushikgohel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-white text-2xl hover:bg-purple-600 hover:scale-110 duration-300 shadow-lg"
            >
              <AiFillGithub />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/rushikgohel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-white text-2xl hover:bg-purple-600 hover:scale-110 duration-300 shadow-lg"
            >
              <AiOutlineTwitter />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rushik-gohel/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-white text-2xl hover:bg-purple-600 hover:scale-110 duration-300 shadow-lg"
            >
              <FaLinkedinIn />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/rushikgohel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-white text-2xl hover:bg-purple-600 hover:scale-110 duration-300 shadow-lg"
            >
              <AiFillInstagram />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;
