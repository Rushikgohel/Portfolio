import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaSearch,
  FaBug,
  FaCloud,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import Particle from "../Particle";

function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "Modern, responsive, and scalable websites using React.js, Next.js, Node.js, and modern technologies.",
    },
    {
      icon: <FaMobileAlt />,
      title: "App Development",
      description:
        "High-performance Android and iOS applications with user-friendly interfaces and smooth functionality.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description:
        "Creative and modern designs focused on improving user experience and driving business growth.",
    },
    {
      icon: <FaBug />,
      title: "Software Testing",
      description:
        "Manual and automated testing to ensure your applications are secure, bug-free, and reliable.",
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      description:
        "Boost your website ranking and online visibility with advanced SEO and digital optimization.",
    },
    {
      icon: <FaCloud />,
      title: "SaaS Solutions",
      description:
        "Complete SaaS product development for startups and businesses with flexible pricing plans.",
    },
  ];

  const plans = [
    {
      name: "Monthly Plan",
      label: "Best for startups and small businesses.",
      tag: "Affordable Pricing",
      featured: false,
    },
    {
      name: "Quarterly Plan",
      label: "Perfect for growing businesses and agencies.",
      tag: "Business Growth Package",
      featured: true,
    },
    {
      name: "Yearly Plan",
      label: "Complete enterprise SaaS and development support.",
      tag: "Premium Solution",
      featured: false,
    },
  ];

  const socialLinks = [
    {
      icon: <AiFillGithub />,
      href: "https://github.com/rushikgohel",
      label: "GitHub",
    },
    {
      icon: <AiOutlineTwitter />,
      href: "https://twitter.com/rushikgohel",
      label: "Twitter",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/rushik-gohel/",
      label: "LinkedIn",
    },
    {
      icon: <AiFillInstagram />,
      href: "https://www.instagram.com/rushikgohel",
      label: "Instagram",
    },
  ];

  return (
    <section>
      {/* ── Services Hero ── */}
      <Container fluid className="services-section py-5" id="services">
        <Particle />

        <Container>
          {/* "What we offer" pill */}
          <div className="text-center mb-2">
            <span
              style={{
                display: "inline-block",
                background: "rgba(199, 112, 240, 0.12)",
                color: "#c770f0",
                fontSize: "12px",
                fontWeight: "500",
                letterSpacing: "0.06em",
                padding: "5px 16px",
                borderRadius: "20px",
                border: "1px solid rgba(199, 112, 240, 0.35)",
              }}
            >
              What we offer
            </span>
          </div>

          {/* Heading */}
          <h1 className="project-heading text-center mb-3">
            Our <strong className="purple">Services</strong>
          </h1>

          <p
            className="text-center mb-5"
            style={{
              color: "#b0b0b0",
              maxWidth: "540px",
              margin: "0 auto 3rem",
              lineHeight: "1.7",
            }}
          >
            Complete software solutions for startups, businesses, and clients —
            with flexible monthly, quarterly, and yearly plans.
          </p>

          {/* ── Service Cards ── */}
          <Row className="justify-content-center">
            {services.map((service, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card
                  className="h-100 border-0"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(199, 112, 240, 0.15)",
                    borderRadius: "16px",
                    transition: "border-color 0.25s, transform 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(199, 112, 240, 0.6)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(199, 112, 240, 0.15)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Card.Body className="text-center p-4">
                    {/* Icon circle */}
                    <div
                      style={{
                        width: "58px",
                        height: "58px",
                        borderRadius: "50%",
                        background: "rgba(199, 112, 240, 0.1)",
                        border: "1px solid rgba(199, 112, 240, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 1.2rem",
                        fontSize: "1.6rem",
                        color: "#c770f0",
                      }}
                    >
                      {service.icon}
                    </div>

                    <Card.Title
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        color: "#ffffff",
                        marginBottom: "0.6rem",
                      }}
                    >
                      {service.title}
                    </Card.Title>

                    <Card.Text
                      style={{
                        color: "#b0b0b0",
                        fontSize: "0.92rem",
                        lineHeight: "1.65",
                      }}
                    >
                      {service.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* ── Divider ── */}
          <hr
            style={{
              borderColor: "rgba(199, 112, 240, 0.15)",
              margin: "2rem 0 3rem",
            }}
          />

          {/* ── Pricing Plans ── */}
          <div className="text-center mb-4">
            <h2 className="purple">Flexible Plans</h2>
          </div>

          <Row className="justify-content-center">
            {plans.map((plan, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card
                  className="h-100 border-0"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    border: plan.featured
                      ? "2px solid #c770f0"
                      : "1px solid rgba(199, 112, 240, 0.15)",
                    borderRadius: "16px",
                    position: "relative",
                  }}
                >
                  <Card.Body className="text-center p-4">
                    {plan.featured && (
                      <div
                        style={{
                          display: "inline-block",
                          background: "rgba(199, 112, 240, 0.12)",
                          color: "#c770f0",
                          fontSize: "11px",
                          fontWeight: "500",
                          padding: "4px 14px",
                          borderRadius: "20px",
                          border: "1px solid rgba(199, 112, 240, 0.35)",
                          marginBottom: "0.8rem",
                        }}
                      >
                        Most Popular
                      </div>
                    )}

                    <h3
                      className="purple"
                      style={{ fontSize: "1.2rem", fontWeight: "600" }}
                    >
                      {plan.name}
                    </h3>

                    <p
                      style={{
                        color: "#b0b0b0",
                        fontSize: "0.9rem",
                        marginTop: "0.5rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {plan.label}
                    </p>

                    <h5
                      style={{
                        color: "#ffffff",
                        fontSize: "1rem",
                        fontWeight: "500",
                        marginTop: "0.75rem",
                      }}
                    >
                      {plan.tag}
                    </h5>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      {/* ── Social Links ── */}
      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              {socialLinks.map((link, index) => (
                <li className="social-icons" key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;

