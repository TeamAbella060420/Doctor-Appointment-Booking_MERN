import React from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="Contacts">
      <CommonSection data="Contacts" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-3">Get In Touch</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="w-100 p-2"
                  ></textarea>
                </FormGroup>

                <button className="btn contact__btn mb-3" type="submit">
                  Send
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold mb-3">Contact Information</h6>
                <p className="section__description mb-0">
                  123, Moonwalk Parañaque City
                </p>
                <div className="d-flex align-items-ceter gap-3">
                  <h6 className="mb-0 fs-6">Phone:</h6>
                  <p className="section__description mb-0">+96541256565</p>
                </div>
                <div className="d-flex align-items-ceter gap-3">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">
                    teamabella@outlook.com
                  </p>
                </div>
                <div className="d-flex align-items-ceter gap-3">
                  <h6 className="mb-0 fs-6">Github:</h6>
                  <p className="section__description mb-0">Teamabella060420</p>
                </div>
                <h6 className="mt-3 fs-6">Follow us</h6>
                <div className="d-flex gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link to={item.url} key={item.index}>
                      <i className={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
