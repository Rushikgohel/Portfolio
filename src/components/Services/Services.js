import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
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
  AiFillInstagram
} from "react-icons/ai";
import Particle from "../Particle";

function Services() {
  const [formData, setFormData] = useState({
    username: "",
    mobile: "",
    email: "",
    city: "",
    businessType: "Startup",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/rushikgohel906@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.username,
          "Mobile Number": formData.mobile,
          "Email Address": formData.email,
          City: formData.city,
          "Business Type": formData.businessType,
          _subject: `New Portfolio Service Query from ${formData.username}`
        })
      });

      const result = await response.json();
      if (response.ok && result.success === "true") {
        setSubmitted(true);
      } else {
        setError(result.message || "Failed to send message. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

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


  return (
    <section>
      {/* ── Services Hero ── */}
      <Container fluid className="services-section py-10  pt-20" id="services">
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

          {/* ── Divider ── */}
          <hr
            style={{
              borderColor: "rgba(199, 112, 240, 0.15)",
              margin: "3rem 0 3rem",
            }}
          />

          {/* ── Contact Form ── */}
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
              Get in touch
            </span>
          </div>

          <h2 className="project-heading text-center mb-4 purple" style={{ fontWeight: "600" }}>
            Contact Us
          </h2>

          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Card
                className="border-0 text-start"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(199, 112, 240, 0.15)",
                  borderRadius: "16px",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  padding: "1.5rem",
                }}
              >
                <Card.Body className="p-2">
                  {submitted ? (
                    <div className="text-center py-4">
                      <h4 className="text-success mb-3" style={{ fontSize: "1.3rem" }}>✓ Message Sent Successfully!</h4>
                      <p style={{ color: "#b0b0b0", fontSize: "0.95rem" }}>
                        Thank you, <strong className="purple">{formData.username}</strong>. We will get back to you shortly.
                      </p>
                      <Button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ username: "", mobile: "", email: "", city: "", businessType: "Startup" });
                        }}
                        style={{
                          background: "linear-gradient(45deg, #a24dd3, #c770f0)",
                          border: "none",
                          borderRadius: "8px",
                          padding: "8px 20px",
                          fontSize: "0.9rem",
                        }}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <Form onSubmit={handleSubmit}>
                      {error && (
                        <div className="alert alert-danger text-center p-2 mb-3" style={{ fontSize: "0.9rem", borderRadius: "10px", background: "rgba(220, 53, 69, 0.1)", border: "1px solid rgba(220, 53, 69, 0.3)", color: "#ea868f" }}>
                          {error}
                        </div>
                      )}

                      <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label style={{ color: "#ffffff", fontSize: "0.9rem" }}>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          required
                          disabled={loading}
                          placeholder="Your Name"
                          style={{
                            background: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(199, 112, 240, 0.25)",
                            color: "#ffffff",
                            borderRadius: "10px",
                            padding: "0.6rem 0.8rem",
                            fontSize: "0.92rem",
                          }}
                        />
                      </Form.Group>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3" controlId="formMobile">
                            <Form.Label style={{ color: "#ffffff", fontSize: "0.9rem" }}>Mobile Number</Form.Label>
                            <Form.Control
                              type="tel"
                              name="mobile"
                              value={formData.mobile}
                              onChange={handleChange}
                              required
                              disabled={loading}
                              placeholder="Mobile Number"
                              style={{
                                background: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(199, 112, 240, 0.25)",
                                color: "#ffffff",
                                borderRadius: "10px",
                                padding: "0.6rem 0.8rem",
                                fontSize: "0.92rem",
                              }}
                            />
                          </Form.Group>
                        </Col>

                        <Col md={6}>
                          <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label style={{ color: "#ffffff", fontSize: "0.9rem" }}>Email Address</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              disabled={loading}
                              placeholder="Email Address"
                              style={{
                                background: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(199, 112, 240, 0.25)",
                                color: "#ffffff",
                                borderRadius: "10px",
                                padding: "0.6rem 0.8rem",
                                fontSize: "0.92rem",
                              }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3" controlId="formCity">
                            <Form.Label style={{ color: "#ffffff", fontSize: "0.9rem" }}>City</Form.Label>
                            <Form.Control
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              required
                              disabled={loading}
                              placeholder="City Name"
                              style={{
                                background: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(199, 112, 240, 0.25)",
                                color: "#ffffff",
                                borderRadius: "10px",
                                padding: "0.6rem 0.8rem",
                                fontSize: "0.92rem",
                              }}
                            />
                          </Form.Group>
                        </Col>

                        <Col md={6}>
                          <Form.Group className="mb-3" controlId="formBusinessType">
                            <Form.Label style={{ color: "#ffffff", fontSize: "0.9rem" }}>Business Type</Form.Label>
                            <Form.Select
                              name="businessType"
                              value={formData.businessType}
                              onChange={handleChange}
                              disabled={loading}
                              style={{
                                background: "rgba(20, 15, 30, 0.95)",
                                border: "1px solid rgba(199, 112, 240, 0.25)",
                                color: "#ffffff",
                                borderRadius: "10px",
                                padding: "0.6rem 0.8rem",
                                fontSize: "0.92rem",
                              }}
                            >
                              <option value="Startup">Startup</option>
                              <option value="Own Business">Own Business</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>

                      <div className="text-center mt-4">
                        <Button
                          type="submit"
                          disabled={loading}
                          className="w-100 py-2"
                          style={{
                            background: "linear-gradient(45deg, #a24dd3, #c770f0)",
                            border: "none",
                            borderRadius: "10px",
                            fontWeight: "600",
                            boxShadow: "0 4px 15px rgba(199, 112, 240, 0.4)",
                            transition: "all 0.3s ease",
                            fontSize: "0.95rem",
                          }}
                          onMouseEnter={(e) => {
                            if (!loading) {
                              e.currentTarget.style.transform = "translateY(-2px)";
                              e.currentTarget.style.boxShadow = "0 6px 20px rgba(199, 112, 240, 0.6)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!loading) {
                              e.currentTarget.style.transform = "translateY(0)";
                              e.currentTarget.style.boxShadow = "0 4px 15px rgba(199, 112, 240, 0.4)";
                            }
                          }}
                        >
                          {loading ? "Sending..." : "Send Message"}
                        </Button>
                      </div>
                    </Form>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* ── Social Links ── */}
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

export default Services;

