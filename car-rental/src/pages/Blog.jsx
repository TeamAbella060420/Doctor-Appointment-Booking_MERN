import React from "react";
import { Container, Col, Row } from "reactstrap";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import BlogList from "../components/UI/BlogList";

const Blog = () => {
  return (
    <div>
      <Helmet title='Blog'>
        <CommonSection data='Blog'/>
        <section className="mb-4">
          <Container>
            <Row>
              <Col lg="12" className="mb-5 text-center">
                <h6 className="section__subtitle">Explore our blogs</h6>
                <h2 className="section__title">Latest Blogs</h2>
              </Col>
              <BlogList />
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  );
};

export default Blog;
