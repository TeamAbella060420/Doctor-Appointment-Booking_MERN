import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";

const AboutSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car service</h2>
              <p className="section__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat dignissimos ducimus reiciendis unde eveniet blanditiis
                voluptatem consequatur! Sed ut temporibus quos excepturi
                aperiam, perspiciatis velit culpa animi dolores maiores, numquam
                repudiandae blanditiis dolorum accusamus, atque laboriosam
                reiciendis labore delectus omnis!
              </p>
            </div>
          </Col>
          <Col lg="6" md="6"></Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
