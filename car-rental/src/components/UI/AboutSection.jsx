import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import bmw from '../../assets/all-images/cars-img/bmw-offer.png'

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
            <div className="about__section-item d-flex align-items-center">
              <p className="section__description d-flex align-items-center gap-2">
              <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
              </p>
              <p className="section__description d-flex align-items-center gap-2" style={{marginLeft: '1rem'}}>
              <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="about__section-item d-flex align-items-center ">
              <p className="section__description d-flex align-items-center gap-2">
              <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
              </p>
              <p className="section__description d-flex align-items-center gap-2" style={{marginLeft: '1rem'}}>
              <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor sit amet.
              </p>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={bmw} alt="" className="w-100"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
