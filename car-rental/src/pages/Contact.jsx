import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const Contact = () => {
  return (
    <Helmet title="Contacts">
      <CommonSection data="Contacts" />
        <section>
          <Container>
            <Row>
              <Col></Col>
            </Row>
          </Container>
        </section>
    </Helmet>
  );
};

export default Contact;
